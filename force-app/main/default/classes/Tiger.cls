public with sharing class Tiger{
    @AuraEnabled(cacheable=true)
      public static List<Contact> getContactLists(){
           return [SELECT Id, NAME FROM Contact];
      }
}