// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.22 <0.9.0;

// This import is automatically injected by Remix
import "remix_tests.sol";

// This import is required to use custom transaction context
// Although it may fail compilation in 'Solidity Compiler' plugin
// But it will work fine in 'Solidity Unit Testing' plugin
import "remix_accounts.sol";
import "../contracts/Safemoon/Safemoon.sol";

// File name has to end with '_test.sol', this file can contain more than one testSuite contracts
contract SafemoonTest is Safemoon{

    /// 'beforeAll' runs before all other tests
    /// More special functions are: 'beforeEach', 'beforeAll', 'afterEach' & 'afterAll'
    function beforeAll() public {
        initialize(0x37da632c6436137BD4D0CA30c98d3c615974120b);
    }

    function checkSenderAndValue() public {
        Assert.equal(msg.sender, TestsAccounts.getAccount(0), "Invalid sender");
    }

    function initiated() public {
        Assert.equal(uint(totalSupply()), uint(1000000000000000000000), "init not run");
        //Assert.equal(0xc778417E063141139Fce010982780140Aa0cD5Ab, uniswapV2Router.WETH(), "WBNB address is 0");
    }

    function checkOwner() public {
        Assert.equal(owner(), TestsAccounts.getAccount(0), "Ownership error");
    }

    function checkOwnerBalance() public {
        Assert.equal(balanceOf(owner()), totalSupply(), "Balance does not match");
    }

    function runTestTransaction() public {
        transfer(TestsAccounts.getAccount(1), 1000000000 * 10 ** 9);
        Assert.greaterThan(balanceOf(TestsAccounts.getAccount(1)), uint(1000), "Transfer failed");
        Assert.greaterThan(balanceOf(TestsAccounts.getAccount(0)), balanceOf(TestsAccounts.getAccount(1)), "Transfer failed");

    }

    //_approve throws error
    function testFees() public {
        transferFrom(TestsAccounts.getAccount(0), TestsAccounts.getAccount(1), 1000000000 * 10 ** 9);
        Assert.greaterThan(balanceOf(TestsAccounts.getAccount(1)), uint(1000), "Transfer failed");
        transferFrom(TestsAccounts.getAccount(1), TestsAccounts.getAccount(2), 1000000 * 10 ** 9);
        Assert.greaterThan(balanceOf(0x0000000000000000000000000000000000000001), uint(0), "Transfer failed");
    }
}
