import { getAddbBookutton, getBookins } from '../support/app.po';

describe('bookings', () => {
  beforeEach(() => cy.visit('/'));

  it('should display bookings', () => {
    getBookins().should((t) => expect(t.length).above(0));
    getAddbBookutton().click();
    getBookins().should((t) => expect(t.length).above(1));
  });
});
