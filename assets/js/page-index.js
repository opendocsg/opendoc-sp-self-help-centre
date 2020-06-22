(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "index.md",
                title: "Customer Experience Guides",
                url: "/opendoc-sp-self-help-centre/3Guides/",
                escapedPath: "3Guides/index.md",
                dir: "/3Guides/",
                tocId: "toc_/3guides/",
                documentInfo: ["Customer Experience Guides",null,null]
            },
            
        {
                name: "index.md",
                title: "Announcements & General Information",
                url: "/opendoc-sp-self-help-centre/1Geninfo/",
                escapedPath: "1Geninfo/index.md",
                dir: "/1Geninfo/",
                tocId: "toc_/1geninfo/",
                documentInfo: ["Announcements & General Information",null,null]
            },
            
        {
                name: "index.md",
                title: "Technical e-Helpdesk",
                url: "/opendoc-sp-self-help-centre/2Tech/",
                escapedPath: "2Tech/index.md",
                dir: "/2Tech/",
                tocId: "toc_/2tech/",
                documentInfo: ["Technical e-Helpdesk",null,null]
            },
            
        
        
        {
                name: "Announcements.md",
                title: "Notices and Updates",
                url: "/opendoc-sp-self-help-centre/1Geninfo/Announcements.html",
                escapedPath: "1Geninfo/Announcements.md",
                dir: "/1Geninfo/",
                tocId: "toc_/1geninfo/",
                documentInfo: ["Announcements & General Information",null,null]
            },
            
        {
                name: "Gettinghere.md",
                title: "Getting here",
                url: "/opendoc-sp-self-help-centre/1Geninfo/Gettinghere.html",
                escapedPath: "1Geninfo/Gettinghere.md",
                dir: "/1Geninfo/",
                tocId: "toc_/1geninfo/",
                documentInfo: ["Announcements & General Information",null,null]
            },
            
        {
                name: "OSC.md",
                title: "Establishment of the One-Stop Centre (OSC) in the Singapore Polytechnic",
                url: "/opendoc-sp-self-help-centre/1Geninfo/OSC.html",
                escapedPath: "1Geninfo/OSC.md",
                dir: "/1Geninfo/",
                tocId: "toc_/1geninfo/",
                documentInfo: ["Announcements & General Information",null,null]
            },
            
        {
                name: "Commontech.md",
                title: "Common Technical Issues Faced by Users",
                url: "/opendoc-sp-self-help-centre/2Tech/Commontech.html",
                escapedPath: "2Tech/Commontech.md",
                dir: "/2Tech/",
                tocId: "toc_/2tech/",
                documentInfo: ["Technical e-Helpdesk",null,null]
            },
            
        {
                name: "MSTeams.md",
                title: "How to use Microsoft Teams",
                url: "/opendoc-sp-self-help-centre/2Tech/MSTeams.html",
                escapedPath: "2Tech/MSTeams.md",
                dir: "/2Tech/",
                tocId: "toc_/2tech/",
                documentInfo: ["Technical e-Helpdesk",null,null]
            },
            
        {
                name: "Registration.md",
                title: "Registration",
                url: "/opendoc-sp-self-help-centre/2Tech/Registration.html",
                escapedPath: "2Tech/Registration.md",
                dir: "/2Tech/",
                tocId: "toc_/2tech/",
                documentInfo: ["Technical e-Helpdesk",null,null]
            },
            
        {
                name: "Attendcourse.md",
                title: "Attending a course at the PACE Academy",
                url: "/opendoc-sp-self-help-centre/3Guides/Attendcourse.html",
                escapedPath: "3Guides/Attendcourse.md",
                dir: "/3Guides/",
                tocId: "toc_/3guides/",
                documentInfo: ["Customer Experience Guides",null,null]
            },
            
        {
                name: "Paymentoptions.md",
                title: "Payment options",
                url: "/opendoc-sp-self-help-centre/3Guides/Paymentoptions.html",
                escapedPath: "3Guides/Paymentoptions.md",
                dir: "/3Guides/",
                tocId: "toc_/3guides/",
                documentInfo: ["Customer Experience Guides",null,null]
            },
            
        {
                name: "Withdrawal.md",
                title: "Making a Withdrawal/Cancellation",
                url: "/opendoc-sp-self-help-centre/3Guides/Withdrawal.html",
                escapedPath: "3Guides/Withdrawal.md",
                dir: "/3Guides/",
                tocId: "toc_/3guides/",
                documentInfo: ["Customer Experience Guides",null,null]
            },
            
        {
                name: "test.md",
                title: "Test",
                url: "/opendoc-sp-self-help-centre/assets/images_register/test.html",
                escapedPath: "assets/images_register/test.md",
                dir: "/assets/images_register/",
                tocId: "toc_/assets/",
                documentInfo: ["Assets",null,null]
            },
            
        {
                name: "index.md",
                title: "Index",
                url: "/opendoc-sp-self-help-centre/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["PACE Academy Self Help Centre",null,null]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()