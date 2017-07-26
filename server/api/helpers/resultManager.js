'use strict';

module.exports = {
    Reply: function (error, data) {
        if (!error) return data;
        else          return error;
    }
};