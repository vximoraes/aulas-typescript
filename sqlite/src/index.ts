import { error } from "console";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database('./data/eventos.db');

function criarTabelaUsuarios() {
    const query = `
        CREATE TABLE IF NOT EXISTS usuarios (
            id      INT PRIMARY KEY AUTOINCREMENT,
            nome    TEXT
            email   TEXT
            senha   TEXT
        );
    `

    db.run(query, (error) => {
        if (error) {
            console.log(`Erro ao criar a tabela: ${error}`)
        } else {
            console.log(`Tabela criada com sucesso!`)
        }
    })
}

function inserirUsuarios() {

}

function listarTodosUsuarios() {

}