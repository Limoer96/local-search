import React from 'react'
import LocalSearch from 'local-search'
import { Layout, Input, Button, Typography, message } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import './App.css'

let search = new LocalSearch({ useRegexp: true }) // 只能实例化一次
const { Header } = Layout
const { Title } = Typography

function App() {
  function handleSearch(val) {
    search.setSearch(val)
    search.begin().then((val) => {
      search.next()
    })
  }
  function handleNext() {
    const hasNext = search.next()
    if (!hasNext) {
      message.warn('no more match words')
    }
  }
  function handleGoHomePage() {
    window.location.href = 'https://github.com/Limoer96/local-search'
  }
  return (
    <div className="App">
      <Layout style={{ position: 'fixed', top: 0, width: '100%' }}>
        <Header className="header-container">
          <p className="title">Demo</p>
          <Input.Search
            style={{ width: 600 }}
            placeholder="anything to dom search"
            size="large"
            enterButton="Search"
            onSearch={handleSearch}
          />
          <Button onClick={handleNext} size="large" style={{ marginLeft: 14 }}>
            Next
          </Button>
          <p style={{ flex: 1, textAlign: 'right', marginBottom: 0 }}>
            <Button
              style={{ verticalAlign: 'middle' }}
              type="primary"
              shape="circle"
              icon={<GithubOutlined />}
              size="large"
              onClick={handleGoHomePage}
            />
          </p>
        </Header>
      </Layout>
      <article className="article">
        <Title level={2}>
          被玩坏的“网抑云阴乐”背后，谁在假装抑郁？谁又在制造流行？
        </Title>
        <p>“今天，你网抑云了吗？”</p>
        <p>
          这样的灵魂拷问，是不是有点熟悉？最近两个月，“网抑云阴乐”这个关键词频繁出没在社交网络上。起初，这只是网易云音乐的一个新外号，原因是这个平台的评论区经常出现一些抑郁的矫情文学，其中许多被怀疑是编造的，让旁观群众深感不适，于是一个高度概括其含义的谐音应运而生。
        </p>
        <p>
          此后，网抑云阴乐慢慢衍生出各种各样的段子、表情包和搞笑视频，最终，像知乎上广为人知的句式“人在纽约、刚下飞机”一样，网抑云阴乐由一个谐音演变成流行梗，这五个字不再指代单一平台，而是被加入更多戏谑成分，在熟悉这个梗的网友眼里，含义有点类似于“分享你刚编的抑郁症故事”。
        </p>
        <p>
          针对这一现象及网上的讨论，8月3日，网易云音乐特别推出“云村评论治愈计划”，邀请心理专家、心理专业志愿者加入“云村治愈所”。
        </p>
        <p>
          音乐平台的评论区确实是有抑郁情绪的用户的集中地，但数量级可能没有到目前评论区所展示的这个程度，那么，心理专家真的能治愈平台上的“抑郁用户”吗？本期全媒派（ID：quanmeipai）聚焦“网抑云阴乐”这一网络流行语的传播，结合当前音乐平台的发展与用户心态的变化，探讨这一谐音梗产生的原因，看看是谁在假装抑郁？又是谁在制造流行？
        </p>
        <Title level={3}>一场文字游戏背后的网络情绪</Title>
        <p>
          网抑云阴乐这个谐音梗的确被网友玩坏了。什么“来给我整两首网抑云阴乐”“听歌就用‘网抑云’，‘抑’听就是‘抑’晚上”的调侃，好像是继“废柴”与“葛优躺”后出现的又一个互联网丧文化代名词。
        </p>
        <p>
          但其实，网抑云阴乐的流行与丧文化并不在同一条情绪轨道上。以往的丧文化大多是网友借助一些颓废、绝望、悲观等情绪色彩的语言、文字或图画来对自己进行反讽，丧是表面，焦虑是内核。
        </p>
        <p>
          充满情怀感、符合文艺青年腔调的评论一向是网易云音乐的特色。去年网易公司的相关资料显示，网易云音乐总用户数已突破8亿。根据2019年8月发表的《极光：国内在线音乐社区研究报告》，网易云音乐25岁以下的年轻用户占比高达83.
          5％，社交风格的关键词为知识青年、流行时尚等。平台还曾对用户留言进行包装打造过线下营销活动。
        </p>
        <Title level={3}>“云上”的情感贬值与连接瓦解</Title>
        <p>
          当“网抑云音乐”的称谓开始流行，与网易云音乐评论被冷嘲热讽相伴而生的是“反煽情评论”的出现。
        </p>
        <p>“为什么海水跟眼泪都是咸的？”</p>
        <p>过去的回复是：“笑着流着海水一样咸的眼泪……”</p>
        <p>
          现在则变成了：“因为在所有的离子中，氯离子和钠离子最容易溶解在水中，地球上的海洋中到处都是不计其数的氯离子和钠离子，而以人类的味觉，氯化钠是咸的。”
        </p>
      </article>
      <article className="article">
        <Title level={2}>Deep Learning for Inertial Navigation</Title>
        <p>
          A short review of cutting edge deep learning-based solutions for
          inertial navigation.
        </p>
        <Title level={3}>Introduction</Title>
        <p>
          Many vision aiding navigation approaches were presented in the last
          decade as there is a wide range of applications these days (Huang,
          2019). Saying that the classical field of inertial navigation with
          low-cost inertial sensors as the only source of information is
          starting getting attention with novel deep learning methods to involve
          in it.
        </p>
        <p>
          In this post, we review the integration of deep learning in classical
          Inertial Navigation System (INS) with Inertial Measurement Units
          (IMU’s) only. First, we present some cutting edge architectures for
          improved speed estimation, noise reduction, zero-velocity detection,
          and attitude & position prediction. Secondly, the KITTI and OxIOD
          dataset are discussed. Lastly, schemes of pedestrian inertial
          navigation with deep learning are presented.
        </p>
        <Title level={3}>Cutting edge deep learning-based Solutions</Title>
        <p>
          One of the main problems in the navigation field is speed estimation.
          As the estimation becomes accurate it affect also on the position
          solution. In a work published in 2018 by Cortes et al, a deep
          learning-based speed estimation approach was suggested. The main idea
          was to add a speed constrain to the classical Inertial Navigation
          System (INS). They estimated the speed from the IMU only by using a
          CNN and then constrained the INS solution by this prediction.
          Formulating this estimation as a regression deep learning task, where
          the inputs are the six-channel of the IMU over a few seconds, and the
          output is the speed, leads to improved trajectory tracking as also
          motion mode classification.
        </p>
        <p>Cortes et al, 2018</p>
        <p>
          The next work I want to present regarding noise reduction. As many
          low-cost sensors suffer from the high magnitude of noise and
          characterized by a noise profile, where the noise changes with time,
          there is a need to filter it. But as these noise profiles are
          difficult to estimate, using a deep learning-based approach seems to
          solve this issue. Chen et al (2018) presented a novel deep learning
          approach to deal with many error sources in the sensor signals. By
          doing that, the sensors’ signals can be corrected and only then to be
          used in the navigation scheme. They reported 80% accuracy on the
          correct identification of the IMU signals. CNN was also used in this
          work, where it includes 5 convolutional layers and one fully-connected
          layer.
        </p>
        <p>Chen et al, 2018</p>
        <p>
          Another work, by Wagstaff and Kelly (2018), deals with indoor
          navigation tasks where a scheme to detect foot zero-velocity is
          presented. By doing that, the accuracy of the velocity estimation is
          provided, and by the general INS, accuracy is improved. The detection
          was done by designing a Long Short-Term Memory (LSTM) neural network.
          By evaluating the designed scheme for more than 7.5 [km] of indoor
          pedestrian locomotion data, they reported a reduction of over 34%
          positioning error. Their architecture includes 6-layers LSTM with 80
          units per each one of them and a single fully-connected layer after
          the LSTM.
        </p>
        <p>
          The last work I want to discuss is related to one of the main problems
          in the navigation field: attitude and position prediction. Achieving
          precise state estimation of attitude is very important to multirotor
          systems, as small errors might lead to instability and end in
          disaster. A work by Al-Sharman et al (2019) presents a deep
          learning-based state estimation enhancement with a particular
          application to attitude estimation. They tackled the problem of
          precise attitude estimation by noise reduction technique, where they
          identified the measurement noise characteristics. They used a simple
          multilayer neural network with a dropout technique and exhibited
          superiority over the conventional approaches.
        </p>
        <Title level={3}>Common dataset</Title>
        <p>
          To evaluate the different suggestion approaches, there are two common
          datasets to work with, the first one is the KITTI dataset of Karlsruhe
          Institute of Technology. It contains a big amount of data: Velodyne,
          IMU, GPS, camera calibration, grayscale stereo sequences, 3D object
          trucklet labels, and many more. The paper by Geiger et al (2013)
          reviews the entire dataset. Alto KITTI is the main dataset in the
          field, I want to mention additional pretty new dataset called OxIOD by
          Oxford. It is used for deep inertial odometry and the entire
          information is available in the paper by Chen et al (2018).
        </p>
        <p>
          Another work, by Klein et-al (2020) presents the StepNet: a deep
          learning approach for step length estimation. The authors addressed
          the pedestrian indoor dead reckoning by a family of deep
          learning-based approaches to regress the step-length. The suggested
          StepNet outperforms traditional approaches as described in their
          paper.
        </p>
      </article>
    </div>
  )
}

export default App
