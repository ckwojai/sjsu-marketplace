from typing import Optional
from fastapi import FastAPI

import logging

log = logging.getLogger()
log.setLevel('DEBUG')
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s"))
log.addHandler(handler)

from cassandra import ConsistencyLevel
from cassandra.cluster import Cluster
from cassandra.query import SimpleStatement


def testCassandra():
    KEYSPACE = "testkeyspace"
    cluster = Cluster(['sjsump-cassandra-svc'], protocol_version=5)
    session = cluster.connect()

    rows = session.execute("SELECT keyspace_name FROM system_schema.keyspaces")
    if KEYSPACE in [row[0] for row in rows]:
        log.info("dropping existing keyspace...")
        session.execute("DROP KEYSPACE " + KEYSPACE)

    log.info("creating keyspace...")
    session.execute("""
        CREATE KEYSPACE %s
        WITH replication = { 'class': 'SimpleStrategy', 'replication_factor': '2' }
        """ % KEYSPACE)

    log.info("setting keyspace...")
    session.set_keyspace(KEYSPACE)

    log.info("creating table...")
    session.execute("""
        CREATE TABLE mytable (
            thekey text,
            col1 text,
            col2 text,
            PRIMARY KEY (thekey, col1)
        )
        """)

    query = SimpleStatement("""
        INSERT INTO mytable (thekey, col1, col2)
        VALUES (%(key)s, %(a)s, %(b)s)
        """, consistency_level=ConsistencyLevel.ONE)

    prepared = session.prepare("""
        INSERT INTO mytable (thekey, col1, col2)
        VALUES (?, ?, ?)
        """)

    for i in range(3):
        log.info("inserting row %d" % i)
        session.execute(query, dict(key="key%d" % i, a='a', b='b'))
        session.execute(prepared.bind(("key%d" % i, 'b', 'b')))

    future = session.execute_async("SELECT * FROM mytable")
    # log.info("key\tcol1\tcol2")
    # log.info("---\t----\t----")

    try:
        rows = future.result()
    except Exception:
        log.exeception()

    # for row in rows:
    #     log.info('\t'.join(row))

    return rows
    # session.execute("DROP KEYSPACE " + KEYSPACE)


app = FastAPI()

@app.get("/")
def read_root():
    return "Kin is really cool =]"

@app.get("/test")
def read_root():
    rows = testCassandra()
    return rows.all()