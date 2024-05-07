"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheDate = exports.getImages = exports.setImageContent = exports.setImage = void 0;
const _config_1 = require("../../config");
const dayjs_1 = __importDefault(require("dayjs"));
function setImage(value, before = true) {
    if (value) {
        if (before && value.indexOf(_config_1.appConfig.URL_FILE) === 0)
            return value.replace(_config_1.appConfig.URL_FILE, '');
        else if (!before && value.indexOf('http') === -1)
            return _config_1.appConfig.URL_FILE + value;
    }
    return value;
}
exports.setImage = setImage;
function setImageContent(value, before = true) {
    if (value)
        return value.replaceAll('src="' + (before ? _config_1.appConfig.URL_FILE : ''), 'src="' + (!before ? _config_1.appConfig.URL_FILE : ''));
    return value;
}
exports.setImageContent = setImageContent;
function getImages(images = [], data, arrayContent = [], oldData) {
    const listFilesActive = [];
    const listFilesRemove = [];
    if (data) {
        arrayContent.forEach((name) => {
            if (data[name]) {
                data[name].forEach((translation) => {
                    if (translation.content?.blocks)
                        translation.content?.blocks.forEach((item) => {
                            if (item.type === 'image')
                                listFilesActive.push(item.data.file.url.replace(_config_1.appConfig.URL_FILE, ''));
                        });
                });
            }
            if (oldData && oldData[name]) {
                oldData[name].forEach((translation) => {
                    if (translation.content?.blocks)
                        translation.content?.blocks.forEach((item) => {
                            if (item.type === 'image')
                                listFilesRemove.push(item.data.file.url.replace(_config_1.appConfig.URL_FILE, ''));
                        });
                });
            }
        });
    }
    if (!!data && !!oldData) {
        images.forEach((name) => {
            if (oldData[name] !== data[name]) {
                if (!oldData[name] && !!data[name])
                    listFilesActive.push(data[name].replace(_config_1.appConfig.URL_FILE, ''));
                else if (!!oldData[name] && !data[name])
                    listFilesRemove.push(oldData[name].replace(_config_1.appConfig.URL_FILE, ''));
                else if (oldData[name] && data[name]) {
                    listFilesActive.push(data[name].replace(_config_1.appConfig.URL_FILE, ''));
                    listFilesRemove.push(oldData[name].replace(_config_1.appConfig.URL_FILE, ''));
                }
            }
        });
        return [
            listFilesActive.filter((item) => listFilesRemove.indexOf(item) < 0),
            listFilesRemove.filter((item) => listFilesActive.indexOf(item) < 0),
        ];
    }
    else if (!!data && !oldData)
        images.forEach((name) => data[name] && listFilesActive.push(data[name].replace(_config_1.appConfig.URL_FILE, '')));
    return [listFilesActive, listFilesRemove];
}
exports.getImages = getImages;
function getTheDate(value) {
    const currentDate = (0, dayjs_1.default)();
    const threeDaysAgo = currentDate.subtract(value, 'day');
    const formattedDate = threeDaysAgo.format('YYYY-MM-DD');
    const formattedCurrentDate = currentDate.format('YYYY-MM-DD');
    return `${formattedDate}/${formattedCurrentDate}`;
}
exports.getTheDate = getTheDate;
//# sourceMappingURL=images.js.map