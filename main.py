from flask import Flask, render_template, request
import os
app=Flask(__name__,static_url_path='',template_folder='templates')

@app.route('/')
def root():
    markers=[
        {
        'lat':40.75042,
        'lon':-73.98928
        },
        {
        'lat':40.75050,
        'lon':-73.9000
        }
    ]
    return render_template('index.html',markers=markers)

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=int(os.environ['CDSW_APP_PORT']))
