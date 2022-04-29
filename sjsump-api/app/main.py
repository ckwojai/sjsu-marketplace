from typing import Optional
from fastapi import FastAPI
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from fastapi import FastAPI, Form
from pydantic import BaseModel
from typing import Optional
from fastapi import FastAPI, File, UploadFile
from cassandra.cluster import Cluster
from cassandra import ConsistencyLevel
from cassandra.cluster import Cluster
from cassandra.query import SimpleStatement

import logging
import uvicorn
import uuid


log = logging.getLogger()
log.setLevel('DEBUG')
handler = logging.StreamHandler()
handler.setFormatter(logging.Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s"))
log.addHandler(handler)



def testCassandra():
    KEYSPACE = "testkeyspace"
    cluster = Cluster(['sjsump-cassandra-svc'], protocol_version=5)
    session = cluster.connect()
    print("[INFO] In testCassandra-connected to cluster")

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

class Product_Ad(BaseModel):
    post_id: str
    post_price: str
    post_title :Optional[str] =None
    post_desc : Optional[str] = None
    post_image: UploadFile


def connect_to_db():
    #cluster=Cluster(['127.0.0.1'],port=9042)
    cluster=Cluster(['sjsump-cassandra-svc'], protocol_version=5)
    session=cluster.connect()
    session.set_keyspace("sjsu")
    session.execute("use sjsu;")
    return session


@app.post("/post_product_ad")
async def post_product_ad(post_id : str = Form(...),
    post_price  : str = Form(...),
    post_title  : str = Form(...),
    post_desc : str = Form(...),
    post_image: UploadFile = File(...)):

    ## Printing data
    print(post_id)
    print(post_price)
    print(post_title)
    print(post_desc)
    content_assignment=await post_image.read()
    print("[INFO]Image received")

    session=connect_to_db()


    stmt=session.prepare("""INSERT INTO posts
     (Post_id,Post_image, Post_title, Post_price,Post_description) VALUES(?,?,?,?,?)""")


    post_id = uuid.UUID(post_id)
    post_price=int(post_price)
    results=session.execute(stmt,[post_id,content_assignment,post_title,post_price,post_desc])
    return {"success":"inserted"}#{"owner_name":owner_name,"email_id":email_id,"product_name":product_name,"input_address" :input_address,"product_description":product_description}