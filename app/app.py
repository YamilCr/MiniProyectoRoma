from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    titulo = 'ROMA Nodos'
    return render_template('index.html', data=titulo)
@app.route('/grafico')
def grafico():
    titulo = 'Prueba'
    return render_template('pruebaGrafico.html', data=titulo)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
