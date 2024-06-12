describe("Quiz Timer and Sound Functions", () => {
    beforeEach(() => {
      // Configurar mocks de funções e elementos DOM
      jasmine.clock().install();
      const audioMock = jasmine.createSpyObj("Audio", ["play", "pause", "load"]);
      document.getElementById = jasmine.createSpy().and.callFake((id) => {
        return audioMock;
      });
    });
  
    afterEach(() => {
      jasmine.clock().uninstall();
    });
  
    it("should play alert sound at 5 seconds remaining", () => {
      timeRemaining = 6;
      resetTimer();
      jasmine.clock().tick(1000);
      expect(document.getElementById('timeout-sound').play).toHaveBeenCalled();
    });
  
    it("should not play alert sound if already played", () => {
      timeRemaining = 4;
      resetTimer();
      jasmine.clock().tick(1000);
      expect(document.getElementById('timeout-sound').play).not.toHaveBeenCalled();
    });
  
    // Adicione mais testes conforme necessário
  });
  