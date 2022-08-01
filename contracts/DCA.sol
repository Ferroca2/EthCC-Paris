//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract DCA is ERC721, AccessControl {
  using SafeERC20 for IERC20;

  bytes32 public constant SELLER_ROLE = keccak256("SELLER_ROLE");
  struct UserPosition {
    uint256 dayStart;
    uint256 dailySellAmount;
    uint256 lastDay;
  }

  IERC20 public immutable tokenToSell;
  IERC20 public immutable tokenToBuy;
  uint256 public length;
  uint256 public dailyTotalSell;
  uint256 public lastDaySold;

  mapping(uint256 => uint256) public exchangePricesCumulative;
  mapping(uint256 => uint256) public removeSellAmountByDay;
  mapping(uint256 => UserPosition) public userPositions;

  function currentDay() public view returns (uint256) {
    return block.timestamp / 1 days;
  }

  constructor(string memory _name, string memory _symbol, address _tokenToSell, address _tokenToBuy)
    ERC721(_name, _symbol)
  {
    tokenToSell = IERC20(_tokenToSell);
    tokenToBuy = IERC20(_tokenToBuy);
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    lastDaySold = currentDay();
  }

 
}