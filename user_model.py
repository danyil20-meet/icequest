from sqlalchemy import Column, Integer, String, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from sqlalchemy import create_engine

Base = declarative_base()

class User(Base):
        __tablename__='user'
        name = Column(String)
        surname = Column(String)
        team = Column(Integer)
        phone = Column(String, primary_key = True)
        date = Column(String)

        def __repr__(self):
        	return("<name: {}, surname: {}, num of teammates: {}, phone num: {}, date: {}>").format(
                               self.name,
                               self.surname,
                               self.team,
                               self.phone,
                               self.date)
