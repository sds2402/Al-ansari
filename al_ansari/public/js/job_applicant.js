frappe.ui.form.on("Job Applicant",{
    onload:function(frm){
        auto_populate_child_table(frm);
        auto_populate_description(frm);
    },
})

var arr = ["Are you currently employed?","Why do you want to leave your current job? & Relocate?","If you are appointed, how long you need to join us?",
"Do you have any relative here in Oman?","What are your current salary package and other benefits?",
"What is your salary package expectation? Is it Negotiable?",
"Years of experience in Oman and Other Country?",
"Would you be interested in doing other roles as well as the role you applied for?","Why are you interested to work with us?","Languages you are fluent ?","Would you be willing to travel / relocate?"
,"Please provide references, each from your current and previous employer?"
,"Can we contact the 02 references you have provided? If No, why?"
,"Please indicate your interview availability?"
,"No of dependents:____2__?"]

var description = ["Attested University Degree","Valid contact number in Oman","Valid Passport more than 6 months",
"Experience certificates to support your experience","Valid Oman Driving license"]

function auto_populate_child_table(frm) {
    console.log(frm)
    var job_applic = frappe.model.get_doc("Job Applicant", frm.doc.name)
    frm.doc.questions_and_answers = []
    $.each(arr, function(index, row) {
        var d = frm.add_child("questions_and_answers");
            d.questions = row

            })
            refresh_field("questions_and_answers")
    
}

function auto_populate_description(frm) {
    $.each(description,function (i,r) {
        var x = frm.add_child("documentations");
        x.description = r
    var df = frappe.meta.get_docfield("Documentations", "description",frm.doc.name);
        df.read_only = 1;
    })
    frm.get_field("documentations").grid.cannot_add_rows = true;
    refresh_field("documentations")
}