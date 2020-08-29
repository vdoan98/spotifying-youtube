import json 
import os 

import google_auth_oauthlib.flow
import googleapiclient.discovery 
import googleapiclient.errors
import requests
import youtube_dl

from exceptions import ResponseException 
from secrets import spotify_token, spotify_user_id

class CreatePlaylist:
    def __init__(self):
        return 

    def get_youtube_client(self):
        return 

    def get_playlist_videos(self):
        """Function grab all videos from an existing Youtube playlist"""
        return

    def create_spotify_playlist(self):
        return 

    def get_spotify_uri(self, song_name, artist):
        return 

    def add_song_to_playlist(self):
        return 
    