function getShortMessages(messages) {
    return messages
    .filter(function(item){
        return item.message && item.message.length < 50;
    })
    .map(function(item){
        return item.message;    
    });
}
                  
module.exports = getShortMessages

