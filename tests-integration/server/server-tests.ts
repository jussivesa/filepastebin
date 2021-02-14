import {afterEach, beforeEach, describe} from "mocha";
import * as App from '../../src/server/app'
import {HostModel} from "../../src/server/models/HostModel";
import {Express} from "express";
import * as http from "http";
import {Constants} from "../../src/shared/constants";
import REQUEST_JOIN_ROOM = Constants.REQUEST_JOIN_ROOM;

const request = require('supertest');

const ROOM_ID = '123234';
const HOST_MODEL = <HostModel> {
    roomId: ROOM_ID,
    hostId: "host_id",
    fileName: "file_name",
    fileSize: 100,
    fileType: "file_type"
};

let app: Express;
let hostMap: Map<string, HostModel> = new Map();
hostMap.set(ROOM_ID, HOST_MODEL);

app = App.newInstance(hostMap);

describe('GET /', () => {
    it('responds with html', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, done)
    });
});

describe(`GET ${REQUEST_JOIN_ROOM}:room_id`, () => {
    it('creates a room', (done) => {
        request(app)
            .get(`${REQUEST_JOIN_ROOM}${ROOM_ID}`)
            .expect(200, "true", done)
    });

    it('rejects wrong room ids', (done) => {
        request(app)
            .get(`${REQUEST_JOIN_ROOM}123193`)
            .expect(200, "false", done)
    });

    it('rejects empty room ids', (done) => {
        request(app)
            .get(`${REQUEST_JOIN_ROOM}`)
            .expect(404, done)
    })
});

describe(`GET /:room_id`, () => {
   it('responds with html', (done) => {
       request(app)
           .get(`/${ROOM_ID}`)
           .expect('Content-Type', /html/)
           .expect(200, done)
   });

   it('responds with 404 on not found', (done) => {
       request(app)
           .get(`/131232`)
           .expect(404, done)
   })
});
