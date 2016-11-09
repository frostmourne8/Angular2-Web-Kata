"use strict";

const express = require('express');

const itemService = require('../services/items.service');

function ItemsRouter() {

    this.apply = apply;

    function apply(app) {        
        app.use('/items', createRouter());
    }

    function createRouter() {
        let router = express.Router();

        router.get('/:type', itemsByType);
        router.get('/:id/info', itemInfo);

        return router;
    }

    function itemsByType(req, res) {
        let type = req.params.type;
        itemService.itemsForType(type).then(function(items) {
            res.json({data: items});
        });
    }

    function itemInfo(req, res) {
        let itemId = req.params.id;
        itemService.itemInfo(itemId).then(function(info) {
            res.json({data: info});
        });
    }
}

module.exports = new ItemsRouter();