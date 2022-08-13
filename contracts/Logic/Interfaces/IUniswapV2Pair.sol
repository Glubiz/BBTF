// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

interface IUniswapV2Pair {
    //////////////////
    ///// Events /////
    //////////////////  
    event Approval(address indexed owner, address indexed spender, uint value);
    event Burn(address indexed sender, uint amount0, uint amount1, address indexed to);
    event Mint(address indexed sender, uint amount0, uint amount1);
    event Swap(
        address indexed sender,
        uint amount0In,
        uint amount1In,
        uint amount0Out,
        uint amount1Out,
        address indexed to
    );
    event Sync(uint112 reserve0, uint112 reserve1);
    event Transfer(address indexed from, address indexed to, uint value);
    
    /////////////////////
    ///// Functions /////
    /////////////////////
    function allowance(address owner, address spender) external view returns (uint);
    
    function approve(address spender, uint value) external returns (bool);
    
    function balanceOf(address owner) external view returns (uint);
    
    function burn(address to) external returns (uint amount0, uint amount1);
    
    function decimals() external pure returns (uint8);
    
    function DOMAIN_SEPARATOR() external view returns (bytes32);
    
    function factory() external view returns (address);
    
    function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);
    
    function initialize(address, address) external;
    
    function kLast() external view returns (uint);
    
    function MINIMUM_LIQUIDITY() external pure returns (uint);
    
    function mint(address to) external returns (uint liquidity);
    
    function name() external pure returns (string memory);
    
    function nonces(address owner) external view returns (uint);
    
    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;
    
    function PERMIT_TYPEHASH() external pure returns (bytes32);
    
    function price0CumulativeLast() external view returns (uint);
    
    function price1CumulativeLast() external view returns (uint);
    
    function skim(address to) external;
    
    function swap(uint amount0Out, uint amount1Out, address to, bytes calldata data) external;
    
    function symbol() external pure returns (string memory);
    
    function sync() external;
    
    function token0() external view returns (address);
    
    function token1() external view returns (address);
    
    function totalSupply() external view returns (uint);
    
    function transfer(address to, uint value) external returns (bool);
    
    function transferFrom(address from, address to, uint value) external returns (bool);
}