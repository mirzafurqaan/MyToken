const MyToken = artifacts.require('MyToken');

contract('MyToken', accounts => {
    const _name = 'MyToken';
    const _symbol = 'MTK';
    const _decimals = 18;

    beforeEach(async function() {
       this.token = await MyToken.new(_name, _symbol, _decimals);
    }); 

    describe('token attributes', function(){

        it('has the correct name', async function(){
           
        });

        it('has the correct symbol', async function(){

        });
        
        
    });
});
