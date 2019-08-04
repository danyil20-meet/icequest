from user_model import Base, User
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite:///user.db')
Base.metadata.create_all(engine)
DBSession = sessionmaker(bind=engine)
session = DBSession()
        
def add_user(name, surname, team, phone, date):
	new_user = User(name = name, surname = surname, team = team, phone = phone, date = date)
	session.add(new_user)
	session.commit()
                
def query_all():
	return(session.query(User).all())

def query_by_name(name):
        return(session.query(User).filter_by(name=name).first())

def delete_all():
	session.query(User).delete()
	session.commit()
        
                
def delete_by_name(name):
        session.query(User).filter_by(name=name).delete()
        session.commit()

