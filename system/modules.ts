//import { OutgoingMessage } from "node:http";
import * as nodeChildProcess from 'child_process';

const https = require('https');
const fs = require('fs');
const readline = require('readline');
const IORead = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let globalInput: string = '';

let OmegaConf = {
    id: 'omega',
    shellEcho: '$%',
}

module EpsilonScript {
    let lexer = function() {
        return null;
    }
}

module Subroutine {
    function daemon() {

    }
}

module Variable {
    export const changed = function() {
        
    }
    export const concatenate = function() {

    }
    export const encapsulate = function(parameters = '', encapsulator = '[]') {
        const chars = parameters.split("");
        console.log(chars);
        let toReturn: string = "";
        chars.forEach(element => {
            toReturn += element;
        });
        return toReturn;
    }
    
}

module IO {
    function prompt(parameters = '', promptSign = 'error') {
        print(Variable.encapsulate(promptSign));
    }
    export const print = function(parameters = "") {
        console.log(parameters);
    }
    export const read = function() {
        IORead.prompt(), answer => {
            globalInput = answer;
            console.log(answer);
            IORead.close;
        };
    }
}

module FileSystem {

}

module Generate {
    //export const certificate = Subroutine.alias(Generate.certificate, Secure.generateOpenSSL);
    //export const certificate = function() {Subroutine.alias(Generate.certificate, Secure.generateOpenSSL, ["parum zerum", "parum einum"])};
}

module Secure {
    export const generateOpenSSL = function(parameters = "", par1 = "") {
        console.log("ssl lmao", parameters, par1)
    }
}

module Shell {  // OMICRON
    export class SuperShell {
        //config: {id: string, shellEcho: string};
        id: string;
        shellEcho: string;
        constructor(SSConf = OmegaConf) {
            this.id = SSConf.id;
            this.shellEcho = SSConf.shellEcho;
        }
        fetchId() {
            return [this.id, this.shellEcho];
        }
    }
}

function initialize(globalConfig = "./system/config/global") {
    console.log("Initializing SUPERSHELL server");
    //console.log(IO.read());
    //Generate.certificate();
}

export = {Subroutine, Variable, IO, Shell, initialize};

// initialize SYSTEM/CONFIG

