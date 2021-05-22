let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('todo', () => {
    // get all
    describe('/GET allToDoList', () => {
        it('GET all to do', (done) => {
            chai.request(server)
                .get('/list')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    //Post
    describe('/POST createToDo', function createTodo(req, res, next) {
        it('Create to do', (done) => {
            let params = req.body,
                todo = {
                    id: params.id,
                    title: params.title,
                    description: params.description
                }
            chai.request(server)
                .post('/create')
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Create ok');
                    res.body.todo.should.have.property('id');
                    res.body.todo.should.have.property('title');
                    res.body.todo.should.have.property('description');
                    done();
                });
        });

        it('not create to do', (done) => {
            let params = req.body,
                todo = {
                    id: params.id,
                    title: params.title,
                    description: params.description
                }
            chai.request(server)
                .post('/create')
                .send(todo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('errors').eql("invalid");
                    done();
                });
        });
    });

    describe('/GET/:idTodo getToDoById', () => {
        it('Get to do by ID', (done) => {
            let params = req.body,
                idTodo = params.idTodo;
            chai.request(server)
                .get('/' + idTodo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/PUT/:idTodo UpdateToDo', () => {
        it('To do update', (done) => {
            let params = req.body,
                idTodo = params.idTodo;
            chai.request(server)
                .put('/' + idTodo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('update ok');
                    done();
                });
        });
    });

    describe('/DELETE/:idTodo DeleteToDo', () => {
        it('Delete to do', (done) => {
            let params = req.body,
                idTodo = params.idTodo;
            chai.request(server)
                .delete('/' + idTodo)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Delete ok');
                    done();
                });
        });
    });
});