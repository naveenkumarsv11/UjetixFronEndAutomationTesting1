class ManageIssues{
    get issuesList(){
        return $$("//tbody//tr//td[@data-th='#']")
    }
}

export default new ManageIssues()