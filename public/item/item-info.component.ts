import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Item } from 'item/model';

import 'jquery';
import 'libraries/jquery.jqote2';
import 'libraries/jquery.jsonp';
import 'libraries/DarkTip.wow';

declare const DarkTip: any;

@Component({
    selector: 'item-info',
    templateUrl: 'item-info.html',
    styleUrls: [ '../libraries/DarkTip.wow.css', 'item.css'],
    encapsulation: ViewEncapsulation.None
})
export class ItemInfoComponent {

    public item: Item;
    public htmlContent: string;

    @Input() visible: boolean;

    @Input('item')
    set setItem(item: Item) {
        this.item = item;
        this.htmlContent = this.getItemInfoPane(item);
    }

    private getItemInfoPane(item) {
        if(!item) {return "";}

        var params = {
            host: 'us.battle.net',
            itemId: item.id,
            lang: 'en',
            locale: 'en_US',
            region: 'us'
        };

        var module = "wow.item";
        var prepareDataFunc = DarkTip.read(module, 'prepareData');
        var data = prepareDataFunc({data: {item: item.details}});

        var enhanceDataFunc = DarkTip.read(module, 'enhanceData');
        data = enhanceDataFunc(module, params, data);

        var width = DarkTip.read(module, 'layout.width.core');

        var content = DarkTip.jq.jqote(
            DarkTip.read(module, 'templates.core'),
            DarkTip.jq.extend(true, {}, DarkTip.getTemplateTools(module, 'en-US'), data)
        );

        return content;
    };
}