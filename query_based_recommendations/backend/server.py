from fastapi import FastAPI
from pydantic import BaseModel
from recommend import train, find_relevant_documents_knn
from fastapi.middleware.cors import CORSMiddleware

class RecommendAirbnbRequest(BaseModel):
    query: str
class RelevantDocument(BaseModel):
    document_id: int
    document_title: str
    document_content: str
    document_address: str

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
doc_vectors = None
labels = None
model = None  # Assuming 'model' is an instance of the trained Doc2Vec model
tagged_documents = None

@app.get("/", response_model=str)
def root_requests():
    global doc_vectors, labels, model, tagged_documents
    doc_vectors, labels, model, tagged_documents = train()
    return "Model has been loaded!"

@app.post("/recommend", response_model=list[RelevantDocument])
def recommend_documents(request: RecommendAirbnbRequest):
    user_query = request.query
    
    # Assuming model, vectors, and tagged_documents are defined somewhere
    result_documents = find_relevant_documents_knn(user_query, model, doc_vectors, tagged_documents)
    relevant_documents = [
        RelevantDocument(
            document_id=document['Document ID'],
            document_title=document['Document Title'],
            document_content=document['Document Content'],
            document_address=document['Document Address']
        )
        for document in result_documents
    ]
    return relevant_documents

# Run the FastAPI app
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)

