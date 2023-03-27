<aura:component
  controller="MyChatBotApex"
  implements="force:appHostable,flexipage:availableForAllPageTypes,flexipage:availableForRecordHome,force:hasRecordId,forceCommunity:availableForAllPageTypes,force:lightningQuickAction"
  access="global"
>
  <aura:attribute name="chatList" type="List" default="[]" />

  <aura:attribute name="userChat" type="String" />

  <div class="chat-container">
    <ul>
      <aura:iteration items="{!v.chatList}" var="chat">
        <li>{!chat.userName} {!chat.chatText}</li>
      </aura:iteration>
    </ul>

    <div class="input-container">
      <input
        type="text"
        placeholder="Amuse me...!"
        value="{!v.userChat}"
        onchange="{!c.updateUserChat}"
      />

      <button class="slds-button slds-button_brand" onclick="{!c.postUserChat}"
        >Send</button
      >

        // by Samanvay
    </div>
  </div>
</aura:component>
