/// <reference types="cypress" />

    describe('My Test Suit', function() {

        // it('Verify radio buttons bottom of the page', function() {

        //     cy.visit('https://demo.nopcommerce.com/');
        //     cy.scrollTo('bottom');
        //     cy.get('#pollanswers-2').should('be.visible').should('be.enabled').should('not.be.checked').click();
        //     cy.get('#vote-poll-1').should('be.visible').should('be.enabled').click();
        //     cy.get('#block-poll-vote-error-1').contains('Only registered users can vote.');

        //   })
        
        // it('Verify value of cart', function() {

        //   cy.visit('https://demo.nopcommerce.com/');
        //   cy.get('#small-searchterms').type('Apple MacBook Pro 13-inch');
        //   cy.get('#small-search-box-form > button').click();  
        //   cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.search-results > div > div.products-wrapper > div > div > div > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button').click();
        //   cy.get('#product_enteredQuantity_4').clear().type('5');
        //   cy.get('#add-to-cart-button-4').click();
        //   cy.wait(3000);
        //   cy.get('#topcartlink > a > span.cart-label').click();
        //   cy.scrollTo(0,500);
        //   cy.wait(2000);
        //   cy.get('#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.subtotal > span').contains('9,000.00');
        //   cy.get('#termsofservice').check().should('be.checked');
        // })

        it('Text Box', function() {

            cy.visit('https://demo.nopcommerce.com/');
            cy.get('#small-searchterms').type('Build your own computer');
            cy.wait(3000);
          })

          it('Drop Down by typing a value', function() {

            cy.get('#small-searchterms').type('{enter}');  
            cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.search-results > div > div.products-wrapper > div > div > div > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button').click();
            cy.title().should('eq','nopCommerce demo store. Build your own computer');
          })

          it('Radio Button', function() {

            cy.get('#product_attribute_3_6').check().should('be.checked');
          })

          it('Select Box', function() {

            cy.get('[name=product_attribute_5]').check(['10' , '11']);
            cy.get('#product_attribute_5_10').should('be.checked');
            cy.get('#product_attribute_5_11').should('be.checked');
          })

          it('Clear and set Value', function() {

            cy.get('#product_enteredQuantity_1').clear().type('5').should('have.value','5');
          })

          it('Drop Down', function() {

            cy.get('#product_attribute_2').select('2 GB').should('have.value','3');

          })
    
      })
