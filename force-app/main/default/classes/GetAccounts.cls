public with sharing class GetAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountRecords() {
        return [SELECT Id, Name, Industry FROM Account];
    }
}
