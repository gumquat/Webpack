// ... (existing imports)

describe('App', () => {
  // ... (existing tests)

  describe('mapStateToProps', () => {
    it('should return the correct object when isUserLoggedIn is true', () => {
      const state = fromJS({
        isUserLoggedIn: true,
      });
  
      const expected = { isLoggedIn: true };
      const result = mapStateToProps(state);
  
      expect(result).toEqual(expected);
    });

    it('should return the correct object when isUserLoggedIn and isNotificationDrawerVisible are true', () => {
      const state = fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true,
      });

      const expected = { isLoggedIn: true, displayDrawer: true };
      const result = mapStateToProps(state);

      expect(result).toEqual(expected);
    });

    it('should return the correct object when isUserLoggedIn and isNotificationDrawerVisible are false', () => {
      const state = fromJS({
        isUserLoggedIn: false,
        isNotificationDrawerVisible: false,
      });

      const expected = { isLoggedIn: false, displayDrawer: false };
      const result = mapStateToProps(state);

      expect(result).toEqual(expected);
    });
  });
});