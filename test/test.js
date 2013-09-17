var commons = require ('..')
var should = require('should')

describe('The app', function() {
  it('should work', function(done){
    var prefix = '://upload.wikimedia.org/wikipedia/commons/'
    var testImages = [
      ['Example.png', '7/70/Example.png'],
      ['Flag of the United Kingdom.svg','a/ae/Flag_of_the_United_Kingdom.svg'],
      ['George IV van het Verenigd Koninkrijk.jpg',
       'd/d7/George_IV_van_het_Verenigd_Koninkrijk.jpg'],
      ['Goldnerwagenradebeul.jpg', '8/88/Goldnerwagenradebeul.jpg']
    ]

    testImages.forEach(function(img){
      should.equal(commons(img[0]),'http' + prefix +  img[1])
      should.equal(commons(img[0],true), 'https' + prefix + img[1])
    })

    done()
  })
})
