//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Branching on uknoo page
router.post('/uknoo', function (req, res) {
  {
    res.redirect('/selectorg')
  }
})


// Branching on selectorg page
router.post('/selectorg', function (req, res) {
  var corg = req.session.data['choose-org']
  if (corg == "M academics"){
    res.redirect('/eligible')
  } else {
    res.redirect('/ineligible')
  }
})


// Navigation from eligible page
router.post('/eligible', function (req, res) {
  {
    res.redirect('/ourschool')
  }
})


// Branching on ourschool page
router.post('/ourschool', function (req, res) {
  var oschool = req.session.data['summer-school-take-place']
  if (oschool == "yes"){
    res.redirect('/anotherschool')
  } else {
    res.redirect('/ineligible')
  }
})


// Branching on anotherschool page
router.post('/anotherschool', function (req, res) {
  var aschool = req.session.data['deliver-a-summer-school']
  if (aschool == "yes"){
    res.redirect('/informationcheck')
  } else {
    res.redirect('/ineligible')
  }
})


// Branching on informationcheck page
router.post('/informationcheck', function (req, res) {
  var carrange = req.session.data['confirm-your-arrangements']
  if (carrange == "yes"){
    res.redirect('/additionalschool')
  } else {
    res.redirect('/ineligible')
  }
})


// Navigation from additionalschool page
router.post('/additionalschool', function (req, res) {
  {
    res.redirect('/schooldays')
  }
})


// Navigation from schooldays page
router.post('/schooldays', function (req, res) {
  {
    res.redirect('/schooldate')
  }
})


// Navigation from schooldate page
router.post('/schooldate', function (req, res) {
  {
    res.redirect('/datavalidation')
  }
})


// Navigation from datavalidation page
router.post('/datavalidation', function (req, res) {
  {
    res.redirect('/checkanswers')
  }
})


// Navigation from checkanswers page
router.post('/checkanswers', function (req, res) {
  {
    res.redirect('/submission')
  }
})