({ 

    updateUserChat:function(component, event, helper) {

    var inputValue = event.target.value;

    component.set("v.userChat", inputValue);

},

    postUserChat: function(component, event, helper){

        // 

        var chatList = component.get("v.chatList");

        chatList.push({"chatText": component.get("v.userChat"), "userName": 'Me: '});

component.set("v.chatList", chatList);

//component.set("v.userChat","");

        var action = component.get("c.getChatbotResponse");

        action.setParams({ input: component.get("v.userChat") });

        action.setCallback(this, function(response) {

            var state = response.getState();

            if (state === "SUCCESS") {

                var chatbotResponse = response.getReturnValue();

                chatList.push({"chatText": chatbotResponse, "userName": 'Chatbot: '});

                component.set("v.chatList", chatList);

component.set("v.userChat","");

            }

        });

        $A.enqueueAction(action);

//by chatnxt.com

    }   

    })
