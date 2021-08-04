from flask import Flask, request
from flask_restful import Api, Resource, reqparse, abort
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'

api = Api(app)
db = SQLAlchemy(app)


class VideoModel(db.Model):
    id = db.Column(db.Integer, primary_key=True)


db.create_all()

video_put_args = reqparse.RequestParser()
video_put_args.add_argument('name', type=str, help='Name of video is required', required=True)
video_put_args.add_argument('views', type=int, help='Views of video is required', required=True)
video_put_args.add_argument('likes', type=int, help='Likes on video is required', required=True)

videos = {}

def abortIfVideoIDNotExists(video_id):
    if video_id not in videos:
        abort(404, message="Video id is not valid")

def abortIfVideoIDExists(video_id):
    if video_id in videos:
        abort(409, message=f'Video already exists with ID {video_id}')

class Video(Resource):
    def get(self, video_id):
        abortIfVideoIDNotExists(video_id)

        return videos[video_id]
    
    def put(self, video_id):
        abortIfVideoIDExists(video_id)

        args = video_put_args.parse_args()
        videos[video_id] = args
        return videos[video_id], 201
    
    def delete(self, video_id):
        abortIfVideoIDNotExists(video_id)

        del videos[video_id]
        return {'message': 'Successful deletion'}, 204

        

api.add_resource(Video, "/video/<int:video_id>")

if __name__ == "__main__":
    app.run(debug=True)