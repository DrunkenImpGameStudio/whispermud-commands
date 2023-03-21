'use strict';

const { Broadcast } = require('whispermud-core');

/**
 * Flush the command queue
 */
module.exports = {
  usage: 'flush',
  command : (state) => (args, player) => {
    player.commandQueue.flush();
    Broadcast.sayAt(player, '<bold><yellow>Queue flushed.</yellow></bold>');
  }
};
