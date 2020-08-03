import React, { useState, useEffect } from 'react'
import LocalSearch from 'local-search'
import './App.css'

let search = new LocalSearch({ useRegexp: true }) // 只能实例化一次

function App() {
  const [keywords, setKeywords] = useState('')
  useEffect(() => {
    search.setSearch(keywords)
  }, [keywords, search])
  function handleClick() {
    search.begin().then(() => {
      search.next()
    })
  }
  function handleNext() {
    search.next()
  }
  return (
    <div className="App">
      <div
        style={{ position: 'fixed', top: 100, right: 50, textAlign: 'left' }}
      >
        <input
          value={keywords}
          type="text"
          placeholder="请输入关键字"
          onChange={(e) => setKeywords(e.target.value)}
        />
        <button onClick={handleClick}>search!</button>
        <button onClick={handleNext}>next!</button>
        <div>
          <p>input whatever you want. eg.</p>
          <p>二级</p>
          <p>一</p>
          <p>set</p>
          <p>.App</p>
          <p>li:last-child</p>
          <p>li:nth-child(2n)</p>
        </div>
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/Limoer96/local-search"
          target="_blank"
          rel="noopener noreferrer"
        >
          More About local-search
        </a>
        <p>
          展开来讲，第一个功能是使持有人有权完成对平台的治理控制，主要包括确定网络的费用，拍卖动态和添加平行链的时间表以及特殊事件，例如Polkadot
          平台的升级和修复；第二个功能是支持Polkadot
          的共识机制，持有者可以通过抵押所持有 DOT
          来执行这些功能；第三个功能是通过绑定通证来添加新的平行链；第四个功能则是向验证人节点支付费用，以传送跨链的消息。
        </p>
        <p>
          A year ago I started working on a set of projects that requires
          accessing data from a huge legacy database. There was a decision to
          use Dapper to facilitate database access code. For those of you who
          are not familiar with Dapper, it’s a set of extension methods to
          IDbConnection , which allows to easily map C# object to SQL query
          parameters, as well as SQL query result to C# objects. I was quite
          skeptical to use a library that requires writing SQL queries directly
          in the C# code, because I got used to relying always on ORMs (
          NHibernate in particular). Throughout the year, Dapper has proven to
          be the right tool for the job. In the meantime, I also discovered a
          couple of features and tricks that allow me to write quite concise and
          easy to maintain database access code, and I think it’s worth sharing
          them here.
        </p>
        <p>
          当然，
          <span>
            这些功能需要阶段性展开，并没有对当前的二级市场价格产生直接影响。
          </span>
        </p>
        <p>
          而其价格在高开后的大幅低走，
          一方面可能是受Polkadot移除sudo模块并正式向去中心化治理切换以及开启转账投票等消息影响，
          由于这两则消息意味着主网上线将至，届时DOT则可以进入市场进行流通，闸门打开，私募与公募投资者很可能上线即抛售，如此一来造成的行情压力一定程度上让二级市场的投资者有所忌惮，很可能选择提前抛掉代币。
        </p>
        <ul>
          <li>1. 测试列表获取1</li>
          <li>1. 测试列表获取99</li>
          <li>1. 测试列表获取3</li>
          <li>1. 测试列表获取97</li>
          <li>1. 测试列表获取5</li>
          <li>1. 测试列表获取7</li>
          <li>1. 测试列表获取9</li>
        </ul>
      </header>
    </div>
  )
}

export default App
