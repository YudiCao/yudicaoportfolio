/**
 * 作品集数据：封面图放在 assets/work/<id>.jpg（可选）；未提供时使用 placeholder-cover.png。
 * 视频：填写 youtubeId（仅 ID）或 mp4 相对路径；皆空则详情页显示占位说明。
 */
(function (global) {
  var PLACEHOLDER = "assets/work/placeholder-cover.png";

  global.WORKS_CATALOG = [
    {
      id: "revisitation",
      category: "installation",
      cover: "assets/work/revisitation-cover.jpg",
      youtubeId: "",
      mp4: "assets/work/video-web/revisitation-trailer.mp4",
      title: { zh: "Revisitation 重访", en: "Revisitation (重访)" },
      blurb: {
        zh: "一件通过空间、物件与跨时间碎片探索家庭记忆的互动 VR 体验。",
        en: "An interactive installation exploring memory and space—reconstructing past experiences through light, shadow, and sound.",
      },
      body: {
        zh: [
          "《重访》是一件通过空间、物件与跨越时间的记忆碎片来探索家庭记忆的互动 VR 项目。作品重建了来自不同年代的三个客厅，它们分别对应我的母亲、祖父和曾祖父的生活片段。",
          "每个空间都建立在个人档案之上，包括家庭照片、口述故事以及被保存下来的日常物件。它并不提供一条固定叙事，而是让使用者在这些环境中自由探索，并通过互动遭遇不同的记忆瞬间。",
          "当观众触摸、拿起并与物件互动时，记忆的碎片会逐渐浮现出来。这些互动不仅触发具体片段，也会带来空间与时间的切换，让人得以在几代人的家庭场景之间穿行，重新回到他们曾经生活过的家中。",
          "《重访》也试图提出一种保存家庭记忆的替代方式。它不把记忆视为仅仅需要被记录和存放的材料，而是把记忆理解为可以被重建、被进入、被体验的空间，从而提供一种更具身体感和沉浸感的个人档案形式。",
        ],
        en: [
          "Revisitation traces memory and perception through space, inviting visitors to re-encounter personal recollections between movement and stillness. The piece combines a responsive light environment with spatialized sound.",
          "The work asks how places trigger memory and how mediated technologies shape emotional recall. Add a documentation clip or walkthrough video below.",
        ],
      },
      tags: {
        zh: ["装置艺术", "交互设计", "空间"],
        en: ["Installation", "Interaction design", "Space"],
      },
    },
    {
      id: "the_landing",
      category: "installation",
      cover: "assets/work/the-landing-cover.jpg",
      youtubeId: "",
      mp4: "",
      title: { zh: "The Landing 登陆", en: "The Landing (登陆)" },
      blurb: {
        zh: "围绕多伦多迁移与归属主题展开的互动灯光装置，观众通过写下家乡标签共同点亮城市景观。",
        en: "An interactive light installation about migration and belonging in Toronto.",
      },
      body: {
        zh: [
          "《登陆》是一件关于多伦多迁移与归属感的互动灯光装置。观众被邀请把自己的家乡写在标签上，并将它们夹在发光的线条上，看着城市景观随着参与逐渐被点亮。",
          "作品关注代际迁移、记忆，以及不同个体如何通过共享的经验共同塑造这座城市。该作品曾在多伦多 OCAD University Graduate Gallery 展出。",
        ],
        en: [
          "The Landing is an interactive light installation about migration and belonging in Toronto. Audiences are invited to write their hometowns on tags, clip them onto glowing strings, and watch the cityscape gradually light up.",
          "The piece reflects on intergenerational migration, memory, and the shared connections that shape the city. This work was exhibited at the OCAD University Graduate Gallery in Toronto.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2025" },
          { label: "工具", value: "TouchDesigner, Projector, Adobe Premiere Pro, Arduino, Laser cut" },
          { label: "周期", value: "4 周" },
        ],
        en: [
          { label: "Year", value: "2025" },
          { label: "Tools", value: "TouchDesigner, Projector, Adobe Premiere Pro, Arduino, Laser cut" },
          { label: "Duration", value: "4 weeks" },
        ],
      },
      tags: {
        zh: ["互动装置", "TouchDesigner"],
        en: ["Interactive Installation", "TouchDesigner"],
      },
    },
    {
      id: "echoes_of_us",
      category: "installation",
      cover: "assets/work/echoes-of-us-cover.jpg",
      youtubeId: "",
      mp4: "assets/work/video-web/echoes-of-us-installation.mp4",
      title: { zh: "Echoes of Us 我们的回声", en: "Echoes of Us (我们的回声)" },
      blurb: {
        zh: "声音与空间的对话，记录集体记忆与个人情感的交织。",
        en: "A dialogue between sound and space—where collective memory and personal feeling intertwine.",
      },
      body: {
        zh: [
          "《我们的回声》是一件邀请参与者回忆、反思，甚至尝试和解的互动装置作品。作品借由叙述者的视角展开，通过 Arduino 驱动的感应器、LED、投影与声音设计，把被隐藏的核心记忆逐步解锁出来。",
          "参与者将以表演者的身份与五件被精心布置的物件互动，包括装着婴儿鞋的小盒子、泄气的排球、被撕裂的画作、一把椅子与一部老式转盘电话。每次触碰都会触发一段父女关系的记忆，从第一步的喜悦，到关于成为艺术家的冲突，再到三种不同的结局：冷漠、遗憾，或和解。",
          "项目希望通过身体参与与线性叙事之间的切换，让观众进入一个既私密又可共享的记忆空间，感受亲密关系中的爱、失落与修补可能。",
        ],
        en: [
          "Echoes of Us is an interactive installation that invites participants to reminisce, reflect, and potentially reconcile through the narrator's perspective. Using Arduino-powered sensors, LEDs, projection, and evocative sound design, the work gradually unlocks the narrator's core memories.",
          "A single participant performs through five arranged objects: a box of baby shoes, a deflated volleyball, a torn painting, a chair, and a vintage rotary telephone. Each interaction reveals a different moment in a father-daughter relationship, leading toward one of three endings: indifference, regret, or reconciliation.",
          "By blending physical interaction with branching narrative, the installation creates a memory space that is intimate yet shareable, asking how family bonds are shaped, damaged, and possibly repaired.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2025" },
          { label: "工具", value: "TouchDesigner, Projector, Adobe Premiere Pro, Arduino" },
          { label: "周期", value: "3 周" },
          { label: "团队", value: "Yudi Cao, Peter Oke, JC Zhang" },
        ],
        en: [
          { label: "Year", value: "2025" },
          { label: "Tools", value: "TouchDesigner, Projector, Adobe Premiere Pro, Arduino" },
          { label: "Duration", value: "3 weeks" },
          { label: "Team", value: "Yudi Cao, Peter Oke, JC Zhang" },
        ],
      },
      tags: {
        zh: ["互动装置", "TouchDesigner", "投影映射", "记忆", "叙事装置"],
        en: ["Interactive Installation", "TouchDesigner", "Projection Mapping", "Memory", "Narrative Installation"],
      },
    },
    {
      id: "engulf",
      category: "installation",
      cover: "assets/work/engulf-cover.png",
      youtubeId: "",
      mp4: "assets/work/video-web/engulf-final-interactive-video.mp4",
      title: { zh: "Engulf 吞没", en: "Engulf (吞没)" },
      blurb: {
        zh: "体量、材料与观看距离共同作用的沉浸式场域，探讨被包裹与被看见的边界。",
        en: "An immersive field of scale, material, and viewing distance—testing the edge between envelopment and being seen.",
      },
      body: {
        zh: [
          "《吞没》是一件围绕人类与技术关系展开的互动装置作品，特别关注智能手机的使用与过度使用。作品试图追问：究竟是人掌控技术，还是技术正在反过来控制我们？",
          "装置通过 TouchDesigner、摄像头与投影构建一个黑暗空间，一束白色圆形聚光会在场地中来回移动，并在观众进入时追随其身影。当观众停留在投影边缘，一道影子会伴随脚步声出现、坐下、拿起手机开始滑动，随后通知声、讯息提示音与短视频声逐渐充满整个空间。",
          "随着影子愈发沉迷于屏幕，象征信息过载的滚动文字开始出现，黑暗也从上方缓缓降下。如果观众伸手介入、把黑暗推回上方，人物会停止刷手机并重新站起；如果什么都不做，黑暗将完全吞没人物，整个房间最终陷入全黑并以长鸣结束。",
        ],
        en: [
          "Engulf is an interactive installation that reflects on the relationship between humans and technology, specifically the use and overuse of smartphones. It asks whether we control our devices, or whether our devices increasingly control us.",
          "Built with TouchDesigner, a webcam, and projection, the installation begins with a moving spotlight that acknowledges the viewer's presence by following them. When the participant lingers at the edge of the projection, a shadow figure enters, sits down, takes out a phone, and starts scrolling while footsteps, notifications, and social-media audio accumulate in the soundscape.",
          "As the figure becomes absorbed in the screen, scrolling text and darkness descend to engulf them. If the participant intervenes with hand gestures, the darkness retreats and the figure gets up; if not, the room fades to black. The work turns passive observation into an ethical choice about attention, care, and agency.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2025" },
          { label: "工具", value: "Camera, Webcam, TouchDesigner, Projector, Adobe Premiere Pro, Audacity" },
          { label: "周期", value: "3 周" },
          { label: "团队", value: "Yudi Cao, Peng Guan (Snow), Yifan Wang" },
        ],
        en: [
          { label: "Year", value: "2025" },
          { label: "Tools", value: "Camera, Webcam, TouchDesigner, Projector, Adobe Premiere Pro, Audacity" },
          { label: "Duration", value: "3 weeks" },
          { label: "Team", value: "Yudi Cao, Peng Guan (Snow), Yifan Wang" },
        ],
      },
      tags: {
        zh: ["互动装置", "TouchDesigner", "投影映射", "智能手机成瘾", "手势控制", "动作追踪", "声音景观", "实时交互"],
        en: ["Interactive Installation", "TouchDesigner", "Projection Mapping", "Smartphone Addiction", "Gesture Control", "Motion Tracking", "Soundscape", "Real-time Interaction"],
      },
    },
    {
      id: "resonance",
      category: "installation",
      cover: "assets/work/resonance-cover.png",
      youtubeId: "",
      mp4: "assets/work/video-web/resonance.mp4",
      images: [
        {
          src: "assets/work/resonance-page-1.jpg",
          alt: {
            zh: "《共鸣》项目介绍页，展示作品标题、项目类型与核心概念说明。",
            en: "Resonance project introduction page showing the title, project type, and core concept.",
          },
        },
        {
          src: "assets/work/resonance-page-2.jpg",
          alt: {
            zh: "《共鸣》背景与研究页，梳理社会网络与媒介关系的时间线。",
            en: "Resonance background and research page mapping a timeline of social networks and media.",
          },
        },
        {
          src: "assets/work/resonance-page-3.jpg",
          alt: {
            zh: "《共鸣》访谈与问题定义页，呈现关于孤独、连接与社交质量的调研内容。",
            en: "Resonance interview and problem-definition page about loneliness, connection, and social quality.",
          },
        },
        {
          src: "assets/work/resonance-page-4.jpg",
          alt: {
            zh: "《共鸣》灵感、概念与故事板页，展示水波隐喻、思维导图和互动流程。",
            en: "Resonance inspiration, concept, and storyboard page showing ripple metaphors, mind map, and interaction flow.",
          },
        },
        {
          src: "assets/work/resonance-page-5.jpg",
          alt: {
            zh: "《共鸣》过程与最终效果页，展示 TouchDesigner 流程、传感器测试与最终投影画面。",
            en: "Resonance process and finalization page showing TouchDesigner setup, sensor testing, and final projection imagery.",
          },
        },
      ],
      title: { zh: "Resonance 共鸣", en: "Resonance (共鸣)" },
      blurb: {
        zh: "以水波为隐喻的沉浸式互动装置，探索人际连接与社会互动。",
        en: "An immersive interactive installation using water-ripple metaphors to explore human connection.",
      },
      body: {
        zh: [
          "《共鸣》是一件沉浸式互动艺术装置，也是我以“人际连接与社会互动”为主题展开的个人研究。项目以水波纹作为视觉隐喻，把参与者的动作转译为不断扩散的互动涟漪，象征每个人在社会关系中细微却持续的影响力。",
          "在研究过程中，我通过背景调研、用户访谈、概念图绘制与迭代原型，梳理社会网络从过去到当下的演变。作品利用 Xbox Kinect 捕捉观众动作，并通过 TouchDesigner 生成实时响应的视觉，让个体行为与群体共鸣之间的关系被直观呈现出来。",
          "通过数字交互、视觉象征与参与式体验，《共鸣》邀请观众重新思考人与人之间互动的质量，以及个人行为如何在更广阔的社会网络中产生回响。",
        ],
        en: [
          "Resonance is an immersive interactive art installation developed as an individual exploration into the dynamics of human connectivity and social interaction. Inspired by the metaphor of water ripples, the project translates participants' movements into responsive visual waves.",
          "Through background research, user interviews, concept mapping, and iterative prototyping, I explored the evolution of social networks from historical to contemporary contexts. The installation uses Xbox Kinect for motion capture and TouchDesigner for responsive real-time visuals.",
          "By blending digital interaction, visual symbolism, and participatory engagement, Resonance invites audiences to reflect on the quality of social interaction and the ripple effects that individual actions can have within a broader social framework.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2023.11 – 2024.01" },
          { label: "工具", value: "Xbox Kinect, TouchDesigner, Projector, Adobe Illustrator, Figma, Adobe Premiere Pro" },
          { label: "项目类型", value: "个人项目" },
        ],
        en: [
          { label: "Year", value: "2023 Nov – 2024 Jan" },
          { label: "Tools", value: "Xbox Kinect, TouchDesigner, Projector, Adobe Illustrator, Figma, Adobe Premiere Pro" },
          { label: "Project Type", value: "Individual Project" },
        ],
      },
      tags: {
        zh: ["沉浸式艺术", "互动装置", "情感共鸣", "社会连接", "动作交互", "水波可视化"],
        en: ["Immersive Art", "Interactive Installation", "Emotional Resonance", "Social Connection", "Motion Interaction", "Water Ripple Visualization"],
      },
    },
    {
      id: "folding_pocket",
      category: "creative_computation",
      cover: "assets/work/folding-pocket-cover.jpg",
      youtubeId: "",
      mp4: "assets/work/video-web/folding-pocket-demo.mp4",
      title: { zh: "Folding Pocket 折叠兜", en: "Folding Pocket (折叠兜)" },
      blurb: {
        zh: "以计算与软材料结构结合的 wearable / 可折叠交互物件，探讨随身与隐藏。",
        en: "Creative computing meets soft structure—a wearable / foldable interactive object exploring portability and concealment.",
      },
      body: {
        zh: [
          "《折叠兜》是一款互动式游戏控制器，灵感来自中国传统折叠针线盒，把数字交互与童年记忆中的触觉体验结合在一起。作品将“开合口袋”的动作转化为一种直观而有趣的身体交互，用于控制经典街机游戏《乓》的现代版本。",
          "控制器的每一个口袋都内置了光敏电阻，用于测量环境光变化。玩家通过打开或闭合口袋来改变传感器接收到的光线，从而控制屏幕上的挡板移动；同时系统还提供声音反馈，上移时发出清脆的 beep，下移时则是较低沉的 boop。",
          "项目基于 Arduino Nano 33 IoT 与低功耗蓝牙实现无线交互。在技术实现之外，折叠结构也唤起了童年玩具的记忆，鼓励玩家通过动作、光线和声音去重新感受数字与实体之间的连接。",
        ],
        en: [
          "Folding Pocket is an interactive game controller inspired by the traditional Chinese folding needle box, blending digital interaction with tactile childhood memory. Opening and closing the pockets becomes a playful physical interface for controlling a contemporary version of Pong.",
          "Each pocket contains an LDR light sensor. By changing the amount of light that reaches the sensors, players move the paddle on screen, while audio feedback adds a distinct beep for upward motion and a lower boop for downward motion.",
          "Built with Arduino Nano 33 IoT and Bluetooth Low Energy, the controller creates a portable wireless play experience. Beyond function, its foldable structure recalls simple toys and reframes how physical action can shape digital interaction.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2024" },
          { label: "工具", value: "Arduino, Bluetooth Low Energy (BLE), Paper, Cardboard" },
          { label: "周期", value: "3 周" },
        ],
        en: [
          { label: "Year", value: "2024" },
          { label: "Tools", value: "Arduino, Bluetooth Low Energy (BLE), Paper, Cardboard" },
          { label: "Duration", value: "3 weeks" },
        ],
      },
      tags: {
        zh: ["互动游戏控制器", "Arduino Nano 33 IoT", "低功耗蓝牙", "光传感器", "折叠结构", "身体交互", "文化遗产", "Pong", "可持续设计"],
        en: ["Interactive Game Controller", "Arduino Nano 33 IoT", "Bluetooth Low Energy (BLE)", "Light Sensors", "Folding Mechanism", "Physical Interaction", "Cultural Heritage", "Pong", "Sustainable Design"],
      },
    },
    {
      id: "stop_spying",
      category: "creative_computation",
      cover: "assets/work/stop-spying-cover.jpg",
      youtubeId: "",
      mp4: "assets/work/video-web/stop-spying-on-me-demo.mp4",
      title: { zh: "Stop Spying on Me! 别监视我!", en: "Stop Spying on Me! (别监视我!)" },
      blurb: {
        zh: "围绕数字监控与隐私的批判性创意计算项目，结合数据、界面或实时生成。",
        en: "A critical creative-computing project on digital surveillance and privacy—using data, interfaces, or real-time generation.",
      },
      body: {
        zh: [
          "《别监视我！》是一件融合物理计算与计算机视觉的互动装置，围绕隐私、监控与数字身份等当代议题展开。参与者通过身体动作控制一个浴室场景中的章鱼，试图遮挡隐藏的监控摄像头。",
          "系统通过外接摄像头捕捉动作，并利用 ML5.js 与 P5.js 进行分析，再通过 Arduino 控制舵机驱动章鱼触手进行响应。所有动作都被有意镜像与反向处理，形成一种既有趣又具有挑战性的互动体验，隐喻数字监控环境中的复杂与失控感。",
          "作品将浴室这一私密空间、章鱼的非人形象，以及镜像交互方式结合在一起，回应当代人如何在便利、娱乐与被观看之间不断让渡自身隐私，并促使观众重新思考自己与数字环境及监控设备之间的关系。",
        ],
        en: [
          "Stop Spying on Me! is an interactive installation that merges physical computing with computer vision to explore privacy, surveillance, and digital identity. Participants use their body gestures to control an octopus in a bathroom scene, trying to block a hidden surveillance camera.",
          "An external webcam captures movement, which is analyzed through ML5.js and P5.js, while Arduino-driven servos animate the octopus tentacles. The interaction is intentionally mirrored and inverted, creating a playful yet unsettling experience that reflects the instability of living under digital surveillance.",
          "By combining an intimate bathroom setting, a non-human octopus figure, and reflective gesture control, the project asks viewers to consider how easily privacy is exchanged for convenience, entertainment, and participation in digital culture.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2024" },
          { label: "工具", value: "Arduino, ml5.js, p5.js, Adobe Illustrator, Laser cut, Procreate" },
          { label: "周期", value: "3 周" },
          { label: "团队", value: "Yudi Cao, JC Zhang" },
          { label: "尺寸", value: "80cm × 60cm × 65cm" },
        ],
        en: [
          { label: "Year", value: "2024" },
          { label: "Tools", value: "Arduino, ml5.js, p5.js, Adobe Illustrator, Laser cut, Procreate" },
          { label: "Duration", value: "3 weeks" },
          { label: "Team", value: "Yudi Cao, JC Zhang" },
          { label: "Size", value: "80cm × 60cm × 65cm" },
        ],
      },
      tags: {
        zh: ["互动装置", "计算机视觉", "Arduino", "ml5.js", "p5.js", "WebSerial", "监控", "隐私", "镜像反射", "数据伦理"],
        en: ["Interactive Installation", "Computer Vision", "Arduino", "ml5.js", "p5.js", "WebSerial", "Surveillance", "Privacy", "Mirror Reflection", "Data Ethics"],
      },
    },
    {
      id: "raccoon_studio",
      category: "illustration",
      cover: "assets/work/raccoon-studio.jpg",
      images: [
        {
          src: "assets/work/raccoon-studio.jpg",
          alt: {
            zh: "《浣熊工作室》插画：一个充满绿植、乐器与浣熊雕塑的理想创作空间。",
            en: "Raccoon Studio: an imagined creative space filled with plants, instruments, and raccoon imagery.",
          },
        },
      ],
      youtubeId: "",
      mp4: "",
      title: { zh: "Raccoon Studio 浣熊工作室", en: "Raccoon Studio (浣熊工作室)" },
      blurb: {
        zh: "为“Studio Dreams”主题创作的插画，描绘我心中理想的创作空间。",
        en: "An illustration created for the “Studio Dreams” theme, depicting an ideal creative studio.",
      },
      body: {
        zh: [
          "《浣熊工作室》是一幅为“Studio Dreams”主题创作的插画作品，灵感来源于 Nobrow 的同名合集，呈现了我心中理想的创作空间。",
          "画面融合了现实与想象，整体环境充满绿植与自然光，并加入了轻松有趣的视觉元素。其中最核心的是我喜爱的动物浣熊，空间中分布着与浣熊相关的艺术作品，以及一个具有视觉冲击力的“盔甲浣熊”雕塑。",
          "我对音乐的兴趣也被融入其中，一把电吉他被放置在画面里作为重要元素。透过大面积的窗户，可以看到一座漂浮在空中的梦幻岛屿，象征着无限的创造力与灵感来源。",
        ],
        en: [
          "Raccoon Studio was created for the “Studio Dreams” theme and was inspired by Nobrow’s anthology of the same name. The piece imagines my ideal creative workspace.",
          "The scene blends reality with fantasy through plants, daylight, and playful visual details. Raccoons appear throughout the room, including a striking armored raccoon sculpture that reflects my attachment to the animal.",
          "My interest in music is folded into the composition through the electric guitar, while the floating island outside the window suggests an endless source of imagination and creative energy.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2024" },
          { label: "周期", value: "2 周" },
          { label: "关键词", value: "Illustration, Raccoon, Natural" },
          { label: "尺寸", value: "441 pixel × 313 pixel" },
        ],
        en: [
          { label: "Year", value: "2024" },
          { label: "Duration", value: "2 weeks" },
          { label: "Key Words", value: "Illustration, Raccoon, Natural" },
          { label: "Size", value: "441 pixel × 313 pixel" },
        ],
      },
      tags: {
        zh: ["插画", "浣熊", "自然"],
        en: ["Illustration", "Raccoon", "Natural"],
      },
    },
    {
      id: "only_child_dilemma",
      category: "illustration",
      cover: "assets/work/only-child-dilemma.png",
      images: [
        {
          src: "assets/work/only-child-dilemma.png",
          alt: {
            zh: "《生存还是毁灭：独生子女的困境》插画：女孩站在镜前，镜中浮现童年与家庭记忆。",
            en: "To Be, or Not to Be: An Only Child's Dilemma illustration showing a girl facing a mirror filled with childhood and family memory.",
          },
        },
      ],
      youtubeId: "",
      mp4: "",
      title: {
        zh: "To Be, or Not to Be: An Only Child's Dilemma 生存还是毁灭：独生子女的困境",
        en: "To Be, or Not to Be: An Only Child's Dilemma",
      },
      blurb: {
        zh: "为加拿大 Ripple Foundation 旗下 Wave Blog 创作的编辑插画，呈现独生子女在身份认同与自我反思中的复杂感受。",
        en: "An editorial illustration for Wave Blog by Ripple Foundation, exploring the emotional complexity of being an only child.",
      },
      body: {
        zh: [
          "这组编辑插画为加拿大教育公益机构 Ripple Foundation 发起的 Wave Blog 项目创作。Wave Blog 致力于培养青少年的创意素养，通过发布“由青年写给青年”的文章，呈现真实而富有洞察力的个人经验与观点。",
          "我的插画围绕作者 Bhanvi Girdhar 的文章《To Be, or Not to Be: An Only Child’s Dilemma》展开，尝试把文中关于身份、独立与自我反思的细腻情绪转译成视觉语言，呈现独生子女经验中的复杂心理层次。",
          "原文链接：blog.ripplefoundation.ca",
        ],
        en: [
          "This editorial illustration was created for Wave Blog, an initiative by Ripple Foundation, a Canadian educational charity dedicated to nurturing creative literacy among youth. Wave Blog publishes stories written by youth, for youth, amplifying authentic and insightful perspectives rooted in lived experience.",
          "My illustration visually translates the personal reflections and emotional nuances shared by the author, Bhanvi Girdhar, in her essay, 'To Be, or Not to Be: An Only Child's Dilemma'. The artwork emphasizes the complexity of identity, independence, and self-reflection experienced by an only child.",
          "Read the full article: blog.ripplefoundation.ca",
        ],
      },
      meta: {
        zh: [
          { label: "日期", value: "2024" },
          { label: "周期", value: "1 个月" },
          { label: "尺寸", value: "441 pixel × 313 pixel" },
        ],
        en: [
          { label: "Date", value: "2024" },
          { label: "Duration", value: "1 month" },
          { label: "Size", value: "441 pixel × 313 pixel" },
        ],
      },
      tags: {
        zh: ["编辑插画", "青年声音", "加拿大公益", "创意素养", "数字插画", "叙事表达", "社区参与"],
        en: ["Editorial Illustration", "Youth Voices", "Canadian Charity", "Creative Literacy", "Digital Illustration", "Storytelling", "Community Engagement"],
      },
    },
    {
      id: "tibet_story",
      category: "illustration",
      cover: "assets/work/tibet-1.jpg",
      images: [
        {
          src: "assets/work/tibet-1.jpg",
          alt: {
            zh: "《西藏往事》系列插画之一：僧人走向布达拉宫前的雪地场景。",
            en: "Once Upon a Time in Tibet, illustration one: a monk walking toward the Potala Palace across a snowy landscape.",
          },
        },
        {
          src: "assets/work/tibet-2.png",
          alt: {
            zh: "《西藏往事》系列插画之二：人物在室内对坐，窗外可见布达拉宫。",
            en: "Once Upon a Time in Tibet, illustration two: two figures seated indoors with the Potala Palace framed in the window.",
          },
        },
      ],
      youtubeId: "",
      mp4: "",
      title: { zh: "Once Upon a Time in Tibet 西藏往事", en: "Once Upon a Time in Tibet (西藏往事)" },
      blurb: {
        zh: "围绕仓央嘉措与玛吉阿米爱情故事展开的插画系列，交织旅途记忆与历史想象。",
        en: "A heartfelt illustration series about the love story of Tsangyang Gyatso and Ma Ji Ami.",
      },
      body: {
        zh: [
          "《西藏往事》源于我在西藏旅行时对第六世达赖喇嘛仓央嘉措与玛吉阿米爱情故事的想象。这个系列通过一幅幅画面，描绘他们在激情与悲剧之间不断摇摆的关系，也呈现社会规范与身份责任投下的阴影。",
          "当我漫步在拉萨古老的街巷时，这段被命运牵引却被责任拆散的爱情仿佛仍在回响。作品试图把他们的传奇不仅作为历史再现，更作为一段被深情、约束、失落与反抗共同塑造的爱情来讲述。",
          "这一传说在藏族民间被反复讲述，也被视为对传统束缚的一种反抗，以及对真实情感的追求。系列希望借由西藏文化与自然景观的背景，让观者更贴近这段永恒故事中的爱与失落。",
        ],
        en: [
          "Once Upon a Time in Tibet is a heartfelt journey through the love story of Tsangyang Gyatso, the Sixth Dalai Lama, and Maji Ami, imagined during my travels in Tibet. The series captures their passion and tragedy through moments of tenderness shadowed by social constraint and duty.",
          "As I wandered the ancient streets of Lhasa, the echoes of their forbidden love inspired works that reflect the tension between emotional intimacy and the strict responsibilities imposed by Tsangyang Gyatso's destiny. The series revisits their story not only as history but as a legend of lovers entwined by fate and separated by obligation.",
          "Widely retold in Tibetan culture, the story is often understood as both a romantic tragedy and a symbol of resistance against convention. These illustrations place that emotional history within the visual richness of Tibetan landscape and atmosphere.",
        ],
      },
      meta: {
        zh: [
          { label: "年份", value: "2024" },
          { label: "周期", value: "3 周" },
          { label: "关键词", value: "Digital painting, Illustration" },
          { label: "尺寸", value: "17 inch × 11 inch" },
        ],
        en: [
          { label: "Year", value: "2024" },
          { label: "Duration", value: "3 weeks" },
          { label: "Key Words", value: "Digital painting, Illustration" },
          { label: "Size", value: "17 inch × 11 inch" },
        ],
      },
      tags: {
        zh: ["数字绘画", "插画"],
        en: ["Digital painting", "Illustration"],
      },
    },
    {
      id: "material",
      category: "visual",
      cover: "",
      youtubeId: "",
      mp4: "",
      title: { zh: "Material 材料", en: "Material" },
      blurb: {
        zh: "旧站中以图像陈列为主的材料与媒介实验集合。",
        en: "An image-led collection of material and media experiments from the previous site.",
      },
      body: {
        zh: [
          "旧站中的《Material》页面以图像陈列为主，没有附带成段文字说明。页面中出现的作品标题与媒介包括 Night dream（Knitting）、Silence（Clay Sculpture）、Angel and Demon（Clay Sculpture）、Human and animal role reversal（Sculpture）、Untitled（Mix Media）以及 Cats in the Forbidden City（Printmaking）。",
        ],
        en: [
          "On the previous site, Material was presented primarily as an image gallery without additional descriptive text. The page referenced works such as Night dream (Knitting), Silence (Clay Sculpture), Angel and Demon (Clay Sculpture), Human and animal role reversal (Sculpture), Untitled (Mix Media), and Cats in the Forbidden City (Printmaking).",
        ],
      },
      tags: {
        zh: ["材料实验", "雕塑", "编织", "混合媒介", "版画"],
        en: ["Material study", "Sculpture", "Knitting", "Mixed media", "Printmaking"],
      },
    },
    {
      id: "analogue",
      category: "visual",
      cover: "",
      youtubeId: "",
      mp4: "",
      title: { zh: "Analogue 模拟", en: "Analogue" },
      blurb: {
        zh: "以手绘与传统媒介作品为主的视觉艺术系列。",
        en: "A visual art series focused on hand-drawn works and traditional media.",
      },
      body: {
        zh: [
          "旧站中的 Analogue 页面主要以手绘作品图像与标题呈现，没有附带成段说明。页面里出现的媒介包括 Acrylic on Canvas、Oil on Canvas、Mixed media on paper、Watercolour on paper 等。",
        ],
        en: [
          "On the previous site, Analogue was shown as an image-led page of hand-drawn works without extended project text. Visible media labels included Acrylic on Canvas, Oil on Canvas, Mixed media on paper, and Watercolour on paper.",
        ],
      },
      tags: {
        zh: ["手绘", "丙烯", "油画", "混合媒介", "水彩"],
        en: ["Hand drawing", "Acrylic", "Oil painting", "Mixed media", "Watercolour"],
      },
    },
    {
      id: "graphic-design",
      category: "graphic",
      cover: "",
      youtubeId: "",
      mp4: "",
      title: { zh: "Graphic Design 平面设计", en: "Graphic Design" },
      blurb: {
        zh: "旧站中以案例图像为主的平面设计页面。",
        en: "A graphic-design page on the previous site presented mainly through case images.",
      },
      body: {
        zh: [
          "旧站中的 Graphic Design 页面以图像为主，没有附带完整项目说明。页面里出现的案例包括 Poster design、Dumplings、Business card design、The album cover design、Pattern design、Packaging Design for Bacardi Spiced Rum，以及 Book Cover Design。",
        ],
        en: [
          "On the previous site, Graphic Design was presented primarily through images rather than long-form project descriptions. Visible case titles included Poster design, Dumplings, Business card design, The album cover design, Pattern design, Packaging Design for Bacardi Spiced Rum, and Book Cover Design.",
        ],
      },
      tags: {
        zh: ["海报设计", "包装设计", "书籍封面", "名片设计", "图案设计"],
        en: ["Poster design", "Packaging design", "Book cover", "Business card", "Pattern design"],
      },
    },
    {
      id: "photography",
      category: "photo",
      cover: "",
      youtubeId: "",
      mp4: "",
      title: { zh: "Photography 摄影", en: "Photography" },
      blurb: {
        zh: "旧站中的摄影页面以图像展示为主，没有附带文字说明。",
        en: "The photography page on the previous site functioned primarily as an image gallery.",
      },
      body: {
        zh: [
          "旧站中的 Photography 页面以连续照片展示为主，没有出现额外的项目说明、关键词或细节文字。",
        ],
        en: [
          "On the previous site, Photography appeared as a continuous image gallery without additional descriptive text, keywords, or project notes.",
        ],
      },
      tags: {
        zh: ["摄影"],
        en: ["Photography"],
      },
    },
    {
      id: "mirror",
      category: "uiux",
      cover: "assets/work/mirror-cover.png",
      youtubeId: "",
      mp4: "",
      images: [
        {
          src: "assets/work/mirror-page-1.png",
          alt: {
            zh: "《Mirror 魔镜》项目概览页，展示应用、智能戒指、核心功能与设计流程。",
            en: "Mirror project overview showing the app, smart ring, core functions, and design process.",
          },
        },
        {
          src: "assets/work/mirror-page-2.png",
          alt: {
            zh: "《Mirror 魔镜》背景研究页，介绍社交焦虑障碍、症状、影响与应对方式。",
            en: "Mirror background research page covering social anxiety disorder, symptoms, impacts, and coping methods.",
          },
        },
        {
          src: "assets/work/mirror-page-3.png",
          alt: {
            zh: "《Mirror 魔镜》发现阶段页，展示问卷、用户访谈与亲和图分析。",
            en: "Mirror discovery page showing questionnaire findings, user interviews, and affinity diagram analysis.",
          },
        },
        {
          src: "assets/work/mirror-page-4.png",
          alt: {
            zh: "《Mirror 魔镜》定义阶段页，展示用户画像、需求陈述与用户旅程图。",
            en: "Mirror define page showing user persona, need statements, and user journey map.",
          },
        },
        {
          src: "assets/work/mirror-page-5.png",
          alt: {
            zh: "《Mirror 魔镜》价值主张与构思页，展示产品功能、用户需求、点子列表与优先级矩阵。",
            en: "Mirror value proposition and ideation page showing product features, user needs, ideas, and prioritization grid.",
          },
        },
        {
          src: "assets/work/mirror-page-6.png",
          alt: {
            zh: "《Mirror 魔镜》开发阶段页，展示概念故事、产品 MVP、草图与故事板。",
            en: "Mirror develop page showing concept story, product MVP, sketches, and storyboard.",
          },
        },
        {
          src: "assets/work/mirror-page-7.png",
          alt: {
            zh: "《Mirror 魔镜》线框图与高保真原型页，展示应用信息架构与界面系统。",
            en: "Mirror wireframe and high-fidelity prototype page showing app information architecture and interface system.",
          },
        },
        {
          src: "assets/work/mirror-page-8.png",
          alt: {
            zh: "《Mirror 魔镜》交付页，展示可穿戴设备渲染与应用界面成品。",
            en: "Mirror delivery page showing wearable device renderings and final app interface screens.",
          },
        },
      ],
      title: { zh: "Mirror 魔镜", en: "Mirror (魔镜)" },
      blurb: {
        zh: "我第一个完整的 UI/UX 设计项目，围绕社交焦虑与可穿戴设备支持系统展开。",
        en: "My first comprehensive UI/UX project, built around a wearable support system for social anxiety.",
      },
      body: {
        zh: [
          "《Mirror》是我第一个完整的 UI/UX 设计项目，作为 Google UX Design Certificate 课程的一部分开发。项目包含一款名为 Luminous Ring 的智能可穿戴设备，以及与之配套的移动应用，旨在帮助有社交焦虑困扰的用户。",
          "项目采用 Google 的用户中心设计方法，包含用户研究、角色画像、用户旅程、线框图与高保真原型设计。Mirror 应用通过沉浸式社交练习场景、智能戒指的实时反馈，以及个性化改进建议，帮助用户提升沟通能力、建立自信并更好地管理焦虑。",
          "通过将富有共情的数字交互与可穿戴技术结合，《Mirror》试图帮助用户跨越社交焦虑、建立更有意义的连接，并改善情绪状态与整体生活质量。",
        ],
        en: [
          "\"Mirror\" is my first comprehensive UI/UX design project, developed as part of the Google UX Design Certificate program on Coursera. The project features a smart wearable device, the Luminous Ring, paired with a companion mobile app designed to support users experiencing social anxiety.",
          "Employing Google's user-centered design methodology, I conducted user research, created personas, mapped user journeys, and developed both wireframes and high-fidelity prototypes. The Mirror app guides users through immersive social practice scenarios, offers real-time feedback via the smart ring, and provides personalized strategies for improvement.",
          "By integrating empathetic digital interaction with wearable technology, Mirror aims to help users manage anxiety, build confidence, and foster meaningful social connection.",
        ],
      },
      tags: {
        zh: ["UI/UX 设计", "可穿戴设备", "社交焦虑", "用户研究", "高保真原型"],
        en: ["UI/UX Design", "Wearable Device", "Social Anxiety", "User Research", "High-fidelity Prototype"],
      },
    },
  ];

  global.WORKS_resolveCover = function (project) {
    if (!project || !project.cover) return PLACEHOLDER;
    return project.cover;
  };
  /* 为某项目添加独立封面时，在条目上设置 cover: "assets/work/<文件名>.jpg" 即可 */

  global.WORKS_placeholderCover = PLACEHOLDER;
})(typeof window !== "undefined" ? window : this);
