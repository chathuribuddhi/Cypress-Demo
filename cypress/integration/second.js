/// <reference types="cypress" />

    describe('My Test Suit', function() {

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
            cy.wait(2000);

          })

          it('Add to cart', function() {

            cy.get('#add-to-cart-button-1').click();
            cy.wait(2000);
            cy.get('#topcartlink > a > span.cart-label').click();
            cy.get('#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.subtotal > span').contains('6,625.00');

          })

          it('Find a value in Table', function() {

            cy.visit('https://demo.nopcommerce.com/desktops');
            cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.products-container > div.products-wrapper > div > div > div:nth-child(2) > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button').click();
            cy.wait(2000);
            cy.get('body > div.master-wrapper-page > div.master-wrapper-content > div > div.center-2 > div > div.page-body > div.products-container > div.products-wrapper > div > div > div:nth-child(3) > div > div.details > div.add-info > div.buttons > button.button-2.product-box-add-to-cart-button').click();
            cy.wait(2000);
            cy.scrollTo(0,0);
            cy.get('#topcartlink > a > span.cart-label').click();
            cy.get('table[class=cart]>tbody>tr>td:nth-child(3)').each(($element, index, $list) => {
                var text = $element.text();
                if(text.includes('Lenovo IdeaCentre 600 All-in-One PC')){
                    cy.get('table[class=cart]>tbody>tr>td:nth-child(1)').eq(index).then(function($sku){
                        var sku = $sku.text();
                        expect(sku).contains('LE_IC_600');
                    })
                }
            })

          })
    
      })
