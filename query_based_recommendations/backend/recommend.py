import pandas as pd
import numpy as np
from sklearn.neighbors import NearestNeighbors
from gensim.models.doc2vec import Doc2Vec, TaggedDocument
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from gensim.models.doc2vec import Doc2Vec, TaggedDocument


def train():
    dataset = pd.read_csv("./data/Joshua_Tree_Airbnb_Raw.csv")
    selected_columns = ["address","name","reviews/0/comments","reviews/1/comments","reviews/2/comments","reviews/3/comments","reviews/4/comments","reviews/5/comments","reviews/6/comments","reviews/7/comments","reviews/8/comments","reviews/9/comments"]
    dataset = dataset[selected_columns]
    dataset.dropna()
    tagged_documents = dataset.apply(row_to_tagged_document, axis=1).tolist()


    model = Doc2Vec(vector_size=50,  # Dimensionality of the document vectors
                window=2,         # Maximum distance between the current and predicted word within a sentence
                min_count=1,      # Ignores all words with total frequency lower than this
                workers=4,        # Number of CPU cores to use for training
                epochs=20)        # Number of training epochs

    model.build_vocab(tagged_documents)
    model.train(tagged_documents, total_examples=model.corpus_count, epochs=model.epochs)
    model.save("doc2vec_model")

    doc_vectors = [model.dv[idx] for idx in range(530)] 
    labels = dataset["name"][:530]

    return doc_vectors, labels, model, tagged_documents



def row_to_tagged_document(row):
    comments = [str(row[f'reviews/{i}/comments']) for i in range(10)]
    words = ' '.join(comments).split()  
    tags = [row['name'], row['address']]
    return TaggedDocument(words=words, tags=tags)


def find_relevant_documents_knn(input_string, model, vectors, tagged_documents):
    input_vector = model.infer_vector(input_string.split())
    knn = NearestNeighbors(n_neighbors=5, metric='cosine')  # Adjust 'n_neighbors' as needed
    knn.fit(vectors)
    _, indices = knn.kneighbors([input_vector])

    relevant_documents = []

    for idx in indices.flatten():
        document = {
            'Document ID': idx,
            'Document Title': " ".join(tagged_documents[idx].tags[0]),
            'Document Content': " ".join(tagged_documents[idx].words),
            'Document Address': " ".join(tagged_documents[idx].tags[1])
        }
        relevant_documents.append(document)

    return relevant_documents

#input_string = "A big beautiful room"
#doc_vectors, labels, model, tagged_documents = train()
#print(find_relevant_documents_knn(input_string, model, doc_vectors, tagged_documents))

