import {Base} from "./base";
import {Socket} from "socket.io";
import {HostModel} from "../models/models";
import {Constants} from "../../shared/constants";
import REQUEST_CLIENT_ACCEPTED = Constants.REQUEST_CLIENT_ACCEPTED;
import RequestClientAcceptedModel = Constants.RequestClientAcceptedModel;
import {Logger} from "../config/logger";

export class Client extends Base {

    private hostModel: HostModel;

    constructor(
        socket: Socket,
        private io: SocketIO.Server,
        private hostMap: Map<string, HostModel>,
        private roomId: string) {
        super(socket)
    }

    public createClient() {
        if (!this.hostMap.get(this.roomId)) {
            this.socket.emit('exception', 'host disconnected');
            return;
        }

        this.hostModel = this.hostMap.get(this.roomId);

        this.socket.join(this.roomId);
        this.socket.emit(REQUEST_CLIENT_ACCEPTED, <RequestClientAcceptedModel>{
            roomId: this.roomId,
            fileName: this.hostModel.fileName,
            fileSize: this.hostModel.fileSize,
            fileType: this.hostModel.fileType
        });

        Logger.info(`Client connected: ${this.roomId}`)
    }

}