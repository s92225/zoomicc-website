(function () {
  "use strict";

  var I18N_TEXT = {
    "Flow2 — Automation for Hong Kong SMEs": "Flow2 — 香港中小企自動化系統",
    "Flow2 - Automation for Hong Kong SMEs": "Flow2 - 香港中小企自動化系統",
    "Pricing Plans - Flow2 Automation for Hong Kong SMEs": "Flow2 價格方案 - 香港中小企自動化",
    "Free Automation Blueprints for SMEs - Flow2": "Flow2 中小企免費自動化藍圖",
    "pricing": "價格",
    "free resources": "免費資源",
    "Workflow automation for Hong Kong SMEs": "為香港中小企而設的流程自動化",
    "Starting prices": "起始價格",
    "Make.com blueprints for SMEs": "中小企 Make.com 自動化藍圖",
    "Download first / customize later": "先下載，再按業務客製",

    "About": "關於",
    "Services": "服務",
    "Resources": "資源",
    "Case study": "案例",
    "Case study pages": "\u6848\u4f8b\u9801\u9762",
    "Pricing": "價格",
    "Method": "方法",
    "Start audit": "開始評估",
    "Pages": "頁面",
    "Signals": "訊號",
    "Stacks": "工具",
    "Focus": "重點",
    "Contact": "聯絡",
    "Lead flow": "客源流程",
    "Ecommerce ops": "電商營運",
    "AI routing": "AI 分流",
    "Audit request": "評估申請",
    "Automated": "自動化",
    "workflows": "工作流程",
    "Automation systems for Hong Kong SMEs. Built around operational reality, not platform hype.": "\u70ba\u9999\u6e2f\u4e2d\u5c0f\u4f01\u5efa\u7acb\u5be6\u969b\u53ef\u7528\u7684\u81ea\u52d5\u5316\u7cfb\u7d71\uff0c\u4ee5\u771f\u5be6\u71df\u904b\u6d41\u7a0b\u70ba\u6838\u5fc3\uff0c\u800c\u4e0d\u662f\u8ffd\u9010\u5e73\u53f0\u566a\u982d\u3002",
    "Flow2 builds practical automation systems for Hong Kong SMEs: sales follow-up, operations, reporting, and customer service working in one flow.": "Flow2 \u70ba\u9999\u6e2f\u4e2d\u5c0f\u4f01\u5efa\u7acb\u5be6\u7528\u81ea\u52d5\u5316\u7cfb\u7d71\uff0c\u8b93\u92b7\u552e\u8ddf\u9032\u3001\u71df\u904b\u3001\u5831\u8868\u548c\u5ba2\u6236\u670d\u52d9\u5728\u540c\u4e00\u689d\u6d41\u7a0b\u4e2d\u904b\u4f5c\u3002",
    "Business flows, automated.": "\u696d\u52d9\u6d41\u7a0b\u81ea\u52d5\u5316\u3002",
    "Case template": "\u6848\u4f8b\u7bc4\u672c",
    "LumeLuxe case": "LumeLuxe \u6848\u4f8b",
    "Swire Group case": "Swire Group \u6848\u4f8b",
    "RSVP case": "RSVP \u6848\u4f8b",
    "Harbour Weekly case": "Harbour Weekly \u6848\u4f8b",
    "PlayNest Events case": "PlayNest Events \u6848\u4f8b",
    "Part-time staffing case": "\u517c\u8077\u6392\u73ed\u6848\u4f8b",
    "Shiftwise Staffing case": "Shiftwise Staffing \u6848\u4f8b",
    "Flow2 case study": "Flow2 \u6848\u4f8b\u7814\u7a76",
    "Part-time staffing": "\u517c\u8077\u6392\u73ed",
    "Shiftwise Staffing": "Shiftwise Staffing",
    "Roster automation": "\u66f4\u8868\u81ea\u52d5\u5316",
    "Approved case framework": "\u5df2\u78ba\u8a8d\u6848\u4f8b\u6846\u67b6",
    "Knowledge base automation": "\u77e5\u8b58\u5eab\u81ea\u52d5\u5316",
    "Instagram monitoring": "Instagram \u76e3\u6e2c",
    "Quotation automation": "\u5831\u50f9\u81ea\u52d5\u5316",
    "Flow2 case template": "Flow2 \u6848\u4f8b\u7bc4\u672c",
    "JSON to case study": "JSON \u8f49\u6210\u6848\u4f8b",
    "LumeLuxe flow chart format": "LumeLuxe \u6d41\u7a0b\u5716\u683c\u5f0f",
    "Case Study Template - Flow2": "Flow2 \u6848\u4f8b\u7bc4\u672c",
    "Case study template": "\u6848\u4f8b\u7bc4\u672c",
    "Turn workflow JSON into a": "\u628a\u5de5\u4f5c\u6d41 JSON \u8f49\u6210",
    "client story": "\u5ba2\u6236\u6848\u4f8b",
    "Use the approved LumeLuxe format as the base: concise case copy, a readable six-node flow chart, oval nodes, icons, and hover notes. Paste a case JSON file below to generate the first simplified version.": "\u4ee5\u5df2\u78ba\u8a8d\u7684 LumeLuxe \u7248\u5f0f\u70ba\u57fa\u6e96\uff1a\u7cbe\u7c21\u6848\u4f8b\u6587\u6848\u3001\u516d\u500b\u4e3b\u8981\u7bc0\u9ede\u7684\u6613\u8b80\u6d41\u7a0b\u5716\u3001\u6a62\u5713\u7bc0\u9ede\u3001\u5716\u793a\u8207 hover \u8aaa\u660e\u3002\u4e0b\u65b9\u8cbc\u4e0a\u6848\u4f8b JSON\uff0c\u5373\u53ef\u751f\u6210\u7b2c\u4e00\u7248\u7c21\u5316\u6848\u4f8b\u3002",
    "JSON input": "JSON \u8f38\u5165",
    "Paste the case file here. The template will use the company name if it exists; if not, it creates a temporary client name and simplifies the workflow into six readable nodes.": "\u5728\u9019\u88e1\u8cbc\u4e0a\u6848\u4f8b\u6a94\u3002\u5982\u679c JSON \u6709\u516c\u53f8\u540d\uff0c\u7cfb\u7d71\u6703\u76f4\u63a5\u4f7f\u7528\uff1b\u5982\u679c\u6c92\u6709\uff0c\u6703\u7522\u751f\u81e8\u6642\u5ba2\u6236\u540d\uff0c\u4e26\u628a\u6d41\u7a0b\u7c21\u5316\u70ba\u516d\u500b\u6613\u8b80\u7bc0\u9ede\u3002",
    "Case JSON": "\u6848\u4f8b JSON",
    "Generate case": "\u751f\u6210\u6848\u4f8b",
    "Load sample": "\u8f09\u5165\u7bc4\u4f8b",
    "Generated case study": "\u5df2\u751f\u6210\u6848\u4f8b",
    "Case study / Operations workflow": "\u6848\u4f8b / \u71df\u904b\u6d41\u7a0b",
    "Template output is simplified on purpose: six nodes is the default so the case remains readable on desktop and mobile.": "\u7bc4\u672c\u6703\u523b\u610f\u7c21\u5316\u8f38\u51fa\uff1a\u9810\u8a2d\u4f7f\u7528\u516d\u500b\u7bc0\u9ede\uff0c\u8b93\u6848\u4f8b\u5728\u684c\u9762\u8207\u624b\u6a5f\u90fd\u4fdd\u6301\u53ef\u8b80\u3002",
    "Copy simplified JSON": "\u8907\u88fd\u7c21\u5316 JSON",
    "Hover or focus a node to see how this automation works.": "\u79fb\u5230\u6216\u805a\u7126\u7bc0\u9ede\uff0c\u67e5\u770b\u9019\u500b\u81ea\u52d5\u5316\u5982\u4f55\u904b\u4f5c\u3002",

    "Book a Flow Audit": "預約流程審核",
    "View pricing": "查看價格",
    "properly?": "真正可用嗎？",
    "Need this consignment flow built": "想把這類寄售流程建得",
    "Need this knowledge flow built": "想把知識流程建得",
    "Need this content monitoring flow built": "想把內容監測流程建得",
    "Need this weekly report flow built": "想把週報流程建得",
    "Need this quotation flow built": "想把報價流程建得",
    "Need your roster flow built": "想把更表流程建得",
    "Flow2 can map your intake, WhatsApp, inventory, Shopify, and payout handoffs into one reliable operating lane.": "Flow2 可以把入件資料、WhatsApp、庫存、Shopify 和付款交接整理成一條可靠的營運流程。",
    "Flow2 can turn email and SharePoint updates into governed records, knowledge-base entries, and traceable Excel logs.": "Flow2 可以把 email 與 SharePoint 更新轉成可治理的記錄、知識庫條目和可追蹤的 Excel log。",
    "Flow2 can connect social handles, post metrics, image capture, and Notion review into one editorial monitoring lane.": "Flow2 可以把社群帳號、貼文數據、圖片擷取和 Notion 審閱連成一條內容監測流程。",
    "Flow2 can turn article sources, AI drafting, Google Docs, and Notion review into one publish-ready weekly issue.": "Flow2 可以把文章來源、AI 草稿、Google Docs 和 Notion 審閱連成一份可發布的週報。",
    "Flow2 can connect quote requests, contacts, documents, calendar holds, and follow-up tasks into one clean sales handoff.": "Flow2 可以把報價請求、聯絡人、文件、日曆預留和跟進任務接成乾淨的銷售交接。",
    "Flow2 can map your current scheduling sheet, define the right gap rules, and connect the output to WhatsApp, email, AI drafting, or manager review.": "Flow2 可以整理現有更表、定義缺口規則，並把輸出接到 WhatsApp、email、AI 草稿或主管審批。",

    "HK automation agency": "香港自動化顧問",
    "Automation": "自動化",
    "that helps": "協助",
    "small teams": "小團隊",
    "grow": "成長",
    "Your business,": "讓業務",
    "on": "自動",
    "autopilot": "運作",
    "Automation that helps small teams grow.": "自動化系統，協助小團隊成長。",
    "Flow2 helps Hong Kong SME owners increase business efficiency by setting up automated business flows across sales, operations, ecommerce, reporting, and customer follow-up.": "Flow2 協助香港中小企老闆，把銷售、營運、電商、報表和客戶跟進變成可持續運作的自動化流程。",
    "WhatsApp Flow2": "WhatsApp 聯絡 Flow2",
    "See automation growth": "查看自動化流程",
    "Agent T + Agent M": "Agent T + Agent M",
    "daily operations": "日常營運",
    "Show us the workflow. We map the first automation path": "把流程給我們看，我們會整理第一條自動化路徑",
    "Start on WhatsApp": "用 WhatsApp 開始",
    "“I’ve watched so many AI tutorials. How do I actually apply this to my business?”": "「我看了很多 AI 教學，但到底怎樣套用到自己的生意？」",
    "Does that sound familiar?": "這聽起來像你嗎？",
    "Client notes": "客戶回饋",
    "“We finally know what needs a reply without checking five places.”": "「終於不用開五個地方，才知道哪個客人要回覆。」",
    "Handbag consignment owner": "手袋寄售店主",
    "“The daily updates feel much easier to follow now.”": "「每天的更新現在清楚很多。」",
    "Retail operations lead": "零售營運負責人",
    "“It feels like our work finally has a proper route.”": "「每日工作終於有一條清楚路線。」",
    "SME founder, Hong Kong": "香港中小企創辦人",
    "Integrates with the tools your team already uses": "可整合你團隊已在使用的工具",
    "Flow2 can integrate with Google Sheets, WhatsApp, Shopify, HubSpot, Slack, Notion, Airtable, Xero, Stripe, Gmail, Trello, and Zapier.": "Flow2 可整合 Google Sheets、WhatsApp、Shopify、HubSpot、Slack、Notion、Airtable、Xero、Stripe、Gmail、Trello 和 Zapier。",

    "Automation workflow model": "自動化流程模型",
    "Workflow model": "流程模型",
    "/ Client operations": "/ 客戶營運",
    "See how everyday tools become one": "看看日常工具如何變成一個",
    "operating flow": "營運流程",
    "Manual versus": "人手流程 vs",
    "automated": "自動化",
    "Manual": "人手",
    "Manual ecomm CS": "人手電商客服",
    "Auto Ecomm CS": "自動電商客服",
    "WhatsApp service flow": "WhatsApp 客服流程",
    "PAY": "薪",
    "Consignment merchant onboarding": "寄售商戶入場",
    "Signed form to records": "簽",
    "Month-end salary calculation": "月結薪酬計算",
    "Sales data to payslip": "銷售資料到糧單",
    "Map": "整理",
    "Trigger": "觸發",
    "Action": "動作",
    "Goal": "目標",
    "Customer message starts the service flow.": "客戶訊息啟動服務流程。",
    "Classify": "分類",
    "If sales": "如屬銷售",
    "Sales requests move to invoice preparation.": "銷售查詢會進入發票準備。",
    "Send invoice": "發送發票",
    "Invoice is generated and sent for payment.": "系統會產生發票並送出付款通知。",
    "Gateway": "付款閘道",
    "Payment gateway confirmation controls the next update.": "付款閘道確認後，系統才發送下一步更新。",
    "Both sides": "雙方同步",
    "Customer and owner receive the right status update.": "客戶與老闆會收到對應狀態更新。",
    "If enquiry": "如屬查詢",
    "Knowledge base": "知識庫",
    "Answer": "回覆",
    "The answer is drafted back into WhatsApp.": "答案會草擬回 WhatsApp 對話。",
    "If other": "如屬其他",
    "Human review": "人工審核",
    "Cases outside the rules are assigned for human intervention.": "規則以外的個案會交由真人處理。",
    "Build": "建置",
    "Audit": "審核",
    "Training": "培訓",
    "Agents": "代理",
    "Tune": "微調",
    "RAG": "RAG",

    "About Flow2": "關於 Flow2",
    "/ Operator team": "/ 營運團隊",
    "Built by operators who know how SME work": "由真正理解中小企工作的營運者",
    "moves": "建立",
    "Built by SME": "由中小企",
    "operators": "營運者建立",
    "Flow2 is led by Agent T and Agent M: a marketing operator and an automation/ecommerce operator. The work is deliberately practical: map the active business flow, automate the repeatable parts, keep humans in control of judgment.": "Flow2 由 Agent T 和 Agent M 主導：一位市場營運者，一位自動化與電商營運者。我們的方法很實際：先整理現有業務流程，把重複的部分自動化，並保留人的判斷。",
    "Crypto marketing operator": "加密市場營運者",
    "8 years of campaign, community, funnel, and growth operations experience. Focus: lead quality, customer journeys, conversion loops, and follow-up cadence.": "8 年活動、社群、漏斗與增長營運經驗。專注：高品質客源、客戶旅程、轉化流程和跟進節奏。",
    "08 years": "08 年",
    "Marketing systems": "市場系統",
    "AI automation and ecommerce expert": "AI 自動化與電商專家",
    "10 years running ecommerce operations. Focus: order flow, fulfilment handoffs, AI-assisted service, and tool integration.": "10 年電商營運經驗。專注：訂單流程、履約交接、AI 輔助客服和工具整合。",
    "10 years": "10 年",
    "Ecommerce ops": "電商營運",
    "Audit desk": "審核桌面",
    "Paper system": "紙本系統",

    "/ Automation scope": "/ 自動化範圍",
    "Practical services for": "可落地的",
    "business automation": "業務自動化服務",
    "Automation": "自動化",
    "services": "服務",
    "Flow2 designs and builds practical workflows for sales, operations, customer service, reporting, and AI-assisted routing using the tools your team already works with.": "Flow2 使用你團隊已在工作的工具，為銷售、營運、客服、報表與 AI 輔助分流設計實用自動化流程。",
    "Custom Workflow Development": "客製流程開發",
    "Design and build tailored automations across forms, WhatsApp, email, CRMs, sheets, ecommerce systems, invoices, and internal approvals.": "設計及建立表格、WhatsApp、電郵、CRM、試算表、電商系統、發票及內部審批的客製自動化。",
    "Strategy & Auditing": "策略與流程審核",
    "Review the current operating flow, identify where automation creates the most leverage, and turn the roadmap into practical first builds.": "檢視現有營運流程，找出自動化最有槓桿的位置，並把路線圖轉成可執行的第一批建置。",
    "Automation Training Service": "自動化培訓服務",
    "Train owners and teams to understand the workflows, manage handoffs, review outputs, and work confidently with automation tools.": "培訓老闆與團隊理解流程、管理交接、檢視輸出，並有信心使用自動化工具。",
    "AI Agent Design": "AI Agent 設計",
    "Create AI agents for retrieval, routing, drafting, classification, follow-up, and human handoff inside the business systems already in use.": "在現有業務系統中建立可用於擷取、分流、撰寫、分類、跟進與人工交接的 AI agent。",
    "AI Agent Finetuning": "AI Agent 微調",
    "Refine agent prompts, retrieval logic, routing rules, and review loops so AI outputs match the way your business actually works.": "微調 Agent 提示、擷取邏輯、分流規則及審核流程，讓 AI 輸出更貼近真實業務。",
    "Corporate Training": "企業培訓",
    "Train teams to identify useful AI opportunities, operate the new workflows, review outputs, and keep automation practical.": "培訓團隊找出可用的 AI 機會、操作新流程、檢視輸出，讓自動化真正落地。",
    "RAG Pipeline": "RAG 資料管道",
    "Connect business knowledge, documents, sheets, and product data into retrieval pipelines for customer service and internal teams.": "把業務知識、文件、試算表及產品資料接入可擷取的 RAG 管道，支援客服及內部團隊。",

    "Owner focus": "老闆專注",
    "/ Admin load": "/ 行政負荷",
    "Daily admin pulls owners away from": "日常行政把老闆從",
    "running": "營運中拉走",
    "the business": "生意",
    "Admin work pulls": "行政工作分散",
    "focus": "焦點",
    "Automation helps route repeat work into clear systems, so owners can keep attention on customers, products, and decisions.": "自動化把重複工作分流到清楚系統，讓老闆可以專注客戶、產品和決策。",
    "Owner view": "老闆視角",
    "Scroll-linked nodes": "滾動節點",
    "Admin work": "行政工作",
    "Forms, messages, approvals, and daily records move into one owned operating lane.": "表格、訊息、審批及每日記錄都可以整合到一條清楚的營運線。",
    "Order tracking": "訂單追蹤",
    "Invoices, stock notes, courier updates, and payment records move as one sequence.": "發票、庫存記錄、物流更新及付款記錄可以連成一個序列。",
    "Reporting": "報表",
    "Daily records become owner-ready views for priorities, sales, service, and team handover.": "每日記錄變成老闆可看的優先次序、銷售、客服和團隊交接視圖。",
    "Client follow-up": "客戶跟進",
    "Leads, enquiries, replies, and reminders stay visible across WhatsApp and email.": "客源、查詢、回覆及提醒可以在 WhatsApp 和電郵中保持可見。",

    "Automation start point": "自動化起點",
    "/ Working method": "/ 合作方法",
    "Start with one workflow, then build the": "先從一個流程開始，再建立",
    "automation path": "自動化路徑",
    "Map one workflow": "先整理一個",
    "first": "流程",
    "Bring one repeatable workflow. Flow2 maps the work, defines the trigger, builds the action, and agrees what success should look like.": "帶來一個重複的業務流程。Flow2 會整理工作步驟、定義觸發點、建立動作，再一起確認成功標準。",
    "Document the owner, data source, decision rule, and desired customer response.": "記錄負責人、資料來源、判斷規則及客戶應得的回應。",
    "Define the signal that starts the workflow inside the tools your team already uses.": "定義在團隊已使用工具中啟動流程的訊號。",
    "Run the reply, update, alert, draft, routing, or approval that keeps the workflow moving.": "執行回覆、更新、提醒、草稿、分流或審批等動作。",
    "Give the owner a clear daily view, team handover, and maintenance rhythm.": "讓老闆得到清楚的每日視圖、團隊交接和維護節奏。",

    "Case studies": "案例",
    "/ Applied workflows": "/ 實際流程",
    "Business workflows shaped into": "把業務流程變成",
    "reliable": "可靠",
    "systems": "系統",
    "A closer look at how one owner workflow can become a practical automation system.": "看一個老闆的業務流程如何變成實用自動化系統。",
    "Case study pages": "\u6848\u4f8b\u9801\u9762",
    "Consignment operations": "\u5bc4\u552e\u71df\u904b",
    "Knowledge base automation": "\u77e5\u8b58\u5eab\u81ea\u52d5\u5316",
    "Instagram monitoring": "Instagram \u76e3\u6e2c",
    "EDM automation": "EDM \u81ea\u52d5\u5316",
    "Quotation automation": "\u5831\u50f9\u81ea\u52d5\u5316",
    "Roster automation": "\u6392\u73ed\u81ea\u52d5\u5316",
    "LumeLuxe handbag intake": "LumeLuxe \u624b\u888b\u5bc4\u552e\u5165\u5eab",
    "Swire Group knowledge flow": "Swire Group \u77e5\u8b58\u6d41\u7a0b",
    "RSVP content watchlist": "RSVP \u5167\u5bb9\u76e3\u6e2c\u6e05\u55ae",
    "Harbour Weekly editorial draft": "Harbour Weekly \u9031\u5831\u8349\u7a3f",
    "PlayNest Events quote follow-up": "PlayNest Events \u5831\u50f9\u8ddf\u9032",
    "Shiftwise Staffing timesheets": "Shiftwise Staffing \u5de5\u6642\u8a18\u9304",
    "Client sign-off, receipt creation, inventory updates, Shopify sales data, and payout sheets connected into one working flow.": "\u5ba2\u6236\u7c3d\u7f72\u3001\u6536\u64da\u3001\u5eab\u5b58\u66f4\u65b0\u3001Shopify \u92b7\u552e\u8cc7\u6599\u8207\u85aa\u916c\u8868\u4e32\u6210\u4e00\u689d\u71df\u904b\u6d41\u7a0b\u3002",
    "Line to Take emails and SharePoint incident updates become structured records, knowledge-base entries, and traceable Excel IDs.": "Line to Take \u96fb\u90f5\u8207 SharePoint \u4e8b\u4ef6\u66f4\u65b0\u6703\u8f49\u6210\u7d50\u69cb\u5316\u8a18\u9304\u3001\u77e5\u8b58\u5eab\u5167\u5bb9\u548c\u53ef\u8ffd\u8e64\u7684 Excel ID\u3002",
    "Selected Instagram accounts are scanned into a Notion review database with post metadata, signals, and image previews.": "\u6307\u5b9a Instagram \u5e33\u865f\u6703\u88ab\u6383\u63cf\u5230 Notion \u5be9\u95b1\u8cc7\u6599\u5eab\uff0c\u5305\u542b\u8cbc\u6587\u8cc7\u6599\u3001\u4e92\u52d5\u8a0a\u865f\u548c\u5716\u50cf\u9810\u89bd\u3002",
    "Recent Notion news items are filtered, packed, drafted with AI, and turned into a Google Docs weekly issue for review.": "\u8fd1\u671f Notion \u65b0\u805e\u7d20\u6750\u6703\u88ab\u7be9\u9078\u3001\u6574\u7406\u3001\u7531 AI \u8d77\u8349\uff0c\u518d\u8f49\u6210 Google Docs \u9031\u5831\u7d66\u5718\u968a\u5be9\u95b1\u3002",
    "A new quote request creates the contact, document, calendar hold, Notion task, and review alert without repeated admin entry.": "\u65b0\u5831\u50f9\u8acb\u6c42\u6703\u540c\u6b65\u5efa\u7acb\u806f\u7d61\u4eba\u3001\u6587\u4ef6\u3001\u65e5\u66c6\u9810\u7559\u3001Notion \u4efb\u52d9\u548c\u5be9\u95b1\u63d0\u9192\uff0c\u6e1b\u5c11\u91cd\u8907\u884c\u653f\u8f38\u5165\u3002",
    "Roster submissions, staff hours, approval records, and payroll-ready summaries stay aligned for daily staffing operations.": "\u6392\u73ed\u63d0\u4ea4\u3001\u54e1\u5de5\u5de5\u6642\u3001\u5be9\u6279\u8a18\u9304\u548c\u85aa\u916c\u6458\u8981\u6703\u4fdd\u6301\u4e00\u81f4\uff0c\u652f\u63f4\u65e5\u5e38\u4eba\u624b\u71df\u904b\u3002",
    "View case": "\u67e5\u770b\u6848\u4f8b",
    "Case study 1": "案例 1",
    "Lume Lux handbag consignment": "Lume Lux 手袋寄售",
    "Case study 2": "案例 2",
    "Swire Group": "Swire Group",
    "Case study 1 / Handbag consignment": "案例 1 / 手袋寄售",
    "Lume Lux handles handbag consignment intake, client sign-off, receipts, inventory, Shopify records, and day-end spreadsheet work. The automation turns that intake flow into a cleaner operating system.": "Lume Lux 需要處理手袋寄售入庫、客戶簽署、收據、庫存、Shopify 記錄和每日表格工作。自動化把整個入庫流程變成更清楚的營運系統。",
    "Clients complete most intake fields and sign off before the record moves forward.": "客戶先完成大部分入庫欄位並簽署，記錄才進入下一步。",
    "Receipts, WhatsApp copies, inventory records, and sales data stay connected.": "收據、WhatsApp 副本、庫存記錄和銷售資料會保持連接。",
    "Shopify and CMS data feed Google Sheets for staff payout calculation.": "Shopify 和 CMS 資料會進入 Google Sheets，用於員工薪酬計算。",
    "Signed intake": "簽署入庫",
    "Collect": "收集",
    "Form data": "表格資料",
    "Receipt + WhatsApp": "收據與 WhatsApp",
    "Sync": "同步",
    "Inventory records": "庫存記錄",
    "Sales": "銷售",
    "Shopify + CMS": "Shopify + CMS",
    "Payout sheet": "薪酬表",
    "Hover or focus a node to see how the Lume Lux automation works.": "點選節點，查看 Lume Lux 自動化如何運作。",
    "Case study 2 / Swire Group": "案例 2 / Swire Group",
    "Swire Group Line to Take knowledge flow": "Swire Group Line to Take 知識流程",
    "Swire Group needed incoming Line to Take emails and incident file updates to become reusable records without the team manually rewriting the same update into SharePoint, Excel, and the knowledge base.": "Swire Group 需要把 Line to Take 電郵與事件檔案更新整理成可重用記錄，避免團隊把同一段更新重複輸入 SharePoint、Excel 與知識庫。",
    "Email requests are summarised into a SharePoint note and logged in the Line to Take Excel record.": "電郵要求會被整理成 SharePoint 筆記，並同步記錄到 Line to Take Excel 表格。",
    "Incident table updates are checked for status before active items move into the knowledge base.": "事件表格更新會先判斷狀態，再把 active 項目送入知識庫。",
    "Inactive rows are still cleaned for reference; active rows get IDs written back for traceability.": "Inactive 記錄仍會被整理作參考；active 記錄會寫回 ID，方便追蹤。",
    "Gmail inbox": "Gmail 收件箱",
    "Line to Take request": "Line to Take 要求",
    "slashhorse247@gmail.com / subject: Line to Take": "slashhorse247@gmail.com / 主題：Line to Take",
    "SharePoint folder": "SharePoint 資料夾",
    "IncidentTable library": "IncidentTable 文件庫",
    "Incident table update": "事件表格更新",
    "/IncidentTable folder updates": "/IncidentTable 資料夾更新",
    "Flow A": "Flow A",
    "Flow A / SharepointAI": "Flow A / SharepointAI",
    "SharepointAI": "SharepointAI",
    "New email arrives": "收到新電郵",
    "AI extracts the brief": "AI 擷取重點",
    "Draft record text": "草擬記錄文字",
    "Save SharePoint note": "儲存 SharePoint 筆記",
    "Log Excel record": "寫入 Excel 記錄",
    "Flow B": "Flow B",
    "Flow B / V3 file upload": "Flow B / V3 檔案上傳版",
    "V3 file upload": "V3 檔案上傳版",
    "Incident file changes": "事件檔案更新",
    "Read incident table": "讀取事件表格",
    "Get Excel table + incidents": "取得 Excel 表格與事件列",
    "For each event row": "For Each 每筆事件",
    "Review each row": "逐筆檢查記錄",
    "Check date + status": "檢查日期與狀態",
    "Confirm active item": "確認 active 項目",
    "Active": "Active",
    "Inactive": "Inactive",
    "Publish to KB": "發佈到知識庫",
    "Clean summary only": "只整理摘要",
    "Keep as reference": "保留作參考",
    "Record": "記錄",
    "Write collection ID": "寫回 collection ID",
    "Flow C": "Flow C",
    "Flow C / V4 chunking": "Flow C / V4 分塊版",
    "V4 chunking": "V4 分塊版",
    "Create KB chunks": "建立知識庫分塊",
    "Write chunk ID": "寫回 chunk ID",
    "Final records": "最終記錄",
    "SharePoint": "SharePoint",
    "Structured notes": "結構化筆記",
    "Excel": "Excel",
    "Traceable records": "可追蹤記錄",
    "Knowledge base": "知識庫",
    "Searchable active items": "可搜尋 active 項目",
    "The flow keeps each Line to Take update moving from request to searchable record without retyping it across three systems.": "這條流程讓每次 Line to Take 更新由要求一路變成可搜尋記錄，不需要在三個系統重複輸入。",

    "Hong Kong operations network": "香港營運網絡",
    "cliente": "cliente",
    "Flow2 builds workflow systems for teams that need dependable handoffs, measurable service quality, and cleaner daily operations across finance, retail, transport, property, utilities, and customer-facing work.": "Flow2 為金融、零售、交通、地產、公用事業及客戶服務團隊建立流程系統，協助交接更可靠、服務品質更可量度、日常營運更清楚。",
    "Testimonial": "客戶回饋",
    "/ Client note": "/ 客戶筆記",
    "Before Flow2, I kept checking WhatsApp, invoices, and stock notes myself. Now the team knows the next step, and I can focus on buying and selling better handbags.": "在 Flow2 之前，我要自己不停查看 WhatsApp、發票和庫存記錄。現在團隊知道下一步要做什麼，我可以專注買賣更好的手袋。",
    "Handbag consignment owner, Hong Kong": "香港手袋寄售店主",
    "/ Workflow briefing": "/ 流程簡報",
    "Send one active workflow on": "用 WhatsApp 發來",
    "Share one workflow. We will map the first automation path.": "分享一個流程，我們會整理第一條自動化路徑。",
    "Start on": "用 WhatsApp",
    "Tell us the workflow you want to improve.": "告訴我們你想改善的流程。",

    "Price plan / Automation scope": "價格方案 / 自動化範圍",
    "Choose the right": "選擇合適的",
    "workflow": "流程",
    "entry point": "切入點",
    "Clear starting points for Hong Kong SMEs: from mapping one manual process to building AI-assisted operating flows across teams.": "為香港中小企提供清楚起點：由整理一個人手流程，到建立跨團隊的 AI 輔助營運流程。",
    "View plans": "查看方案",
    "Ask on WhatsApp": "WhatsApp 查詢",
    "Find the first process": "找出第一個流程",
    "Ship the workflow": "交付流程",
    "AI / OS": "AI / OS",
    "Connect the system": "連接系統",
    "Plans": "方案",
    "Price plans": "價格方案",
    "Not sure yet": "尚未確定",
    "Flow Audit": "流程審核",
    "Price": "價格",
    "Choose this if": "適合你，如果",
    "You know work is too manual, but you are not sure what should be automated first.": "你知道工作太人手，但未確定應該先自動化哪一部分。",
    "You get": "你會得到",
    "One consultation call": "一次顧問通話",
    "Process review and opportunity map": "流程檢視與機會地圖",
    "Recommended workflow plan": "建議流程方案",
    "Typical outcome": "常見成果",
    "A clear first automation target before you commit to a build.": "在正式建置前，先確定第一個清楚的自動化目標。",
    "Choose Audit": "選擇流程審核",
    "Most SME teams": "大部分中小企團隊",
    "Workflow Build": "流程建置",
    "From HKD 6,800": "HKD 6,800 起",
    "You already know the process and want Flow2 to build it into a working automation.": "你已經知道要改善的流程，並希望 Flow2 把它建成可運作的自動化。",
    "One to three connected workflows": "一至三個互相連接的流程",
    "App integrations, testing, and handover": "應用整合、測試與交接",
    "Support period based on scope": "按範圍提供支援期",
    "Lead alerts, document generation, CRM updates, order tracking, or internal routing.": "客源提醒、文件產生、CRM 更新、訂單追蹤或內部分流。",
    "Choose Workflow Build": "選擇流程建置",
    "AI or full system": "AI 或完整系統",
    "AI / Business OS": "AI / Business OS",
    "From HKD 28,800": "HKD 28,800 起",
    "You need AI inside the workflow, or you are replacing several messy manual systems.": "你需要把 AI 放進流程，或正在取代多個混亂的人手系統。",
    "AI extraction, drafting, chatbot, or assistant setup": "AI 擷取、草稿、聊天機械人或助理設定",
    "Workflow integration and testing": "流程整合與測試",
    "Custom OS builds from HKD 48,000": "客製 OS 建置 HKD 48,000 起",
    "Customer reply assistant, enquiry classification, CRM, inventory flow, client portal, or finance automation.": "客服回覆助理、查詢分類、CRM、庫存流程、客戶入口或財務自動化。",
    "Choose AI / OS": "選擇 AI / OS",
    "Pricing note": "價格備註",
    "Prices above are starting prices. Final pricing depends on workflow complexity, integrations, AI usage, data volume, and support level.": "以上為起始價格。最終價格取決於流程複雜度、整合數量、AI 使用量、資料量和支援級別。",
    "Third-party software subscriptions, API usage, WhatsApp fees, hosting, and automation platform costs are not included unless stated.": "除非另有說明，第三方軟件訂閱、API 用量、WhatsApp 費用、hosting 及自動化平台費用並不包括在內。",
    "Discuss scope": "討論範圍",
    "Next step": "下一步",
    "Bring one messy workflow": "帶來一個混亂流程",
    "Flow2 will map the process, confirm the right plan, and define what needs to be automated first.": "Flow2 會整理流程、確認合適方案，並定義應該先自動化的部分。",
    "See method": "查看方法",
    "Selected plan": "已選方案",
    "Use this as the starting point for the first consultation. Scope can move up or down after the workflow is reviewed.": "這會作為第一次顧問討論的起點；流程檢視後，範圍可以上調或下調。",

    "Free Automation Blueprints for SMEs": "中小企免費自動化藍圖",
    "Free": "免費",
    "Make.com": "Make.com",
    "Automation Blueprints for SMEs": "中小企自動化藍圖",
    "Download the Starter Blueprints": "下載入門藍圖",
    "Not sure what to automate? Book a Flow Audit": "未確定要自動化什麼？預約流程審核",
    "Live automation preview": "即時自動化預覽",
    "A simple blueprint turns one form submission into logged data, alerts, follow-up messages, and a daily owner report.": "一份簡單藍圖，可以把一次表格提交變成資料記錄、提醒、跟進訊息和每日老闆報告。",
    "Form": "表格",
    "Sheet": "試算表",
    "Alert": "提醒",
    "Report": "報告",
    "New enquiry received": "收到新查詢",
    "Make watches the form and starts the scenario automatically.": "Make 監察表格，並自動啟動 scenario。",
    "Record saved to Sheets": "記錄已存入 Sheets",
    "The lead, quote, or booking details are logged in one clean row.": "客源、報價或預約詳情會記錄成一行清楚資料。",
    "Team notified instantly": "團隊即時收到通知",
    "The right person gets an email alert before the request is missed.": "相關同事會在查詢被漏掉前收到電郵提醒。",
    "Owner digest prepared": "老闆摘要已準備",
    "Daily summaries turn routine updates into one readable report.": "每日摘要把例行更新整理成一份易讀報告。",
    "Why this page exists": "這個頁面的用途",
    "Automation Should Not Be": "自動化不應該",
    "Complicated": "複雜",
    "Free resource first. Lead capture second. Consultation CTA throughout. Technical instructions after download.": "先提供免費資源，再收集客源，並在頁面中安排顧問諮詢入口；技術說明會放在下載包內。",
    "Manual admin is still where time disappears.": "時間仍然消失在人手行政裡。",
    "Many SMEs still rely on manual data entry, repeated WhatsApp messages, spreadsheet updates, and copy-paste admin work. These starter blueprints show how simple automation can connect your forms, spreadsheets, emails, calendars, documents, and notifications.": "很多中小企仍依賴人手輸入、重複 WhatsApp 訊息、試算表更新和複製貼上行政工作。這些入門藍圖示範簡單自動化如何連接表格、試算表、電郵、日曆、文件和通知。",
    "Start small before building a full system.": "建立完整系統前，先從小流程開始。",
    "They are not full business systems, but they are a practical starting point for understanding what automation can do for your company.": "它們不是完整業務系統，但能作為理解自動化可如何幫助公司的實用起點。",
    "Forms": "表格",
    "Sheets": "試算表",
    "Calendar": "日曆",
    "Drive": "雲端硬碟",
    "Blueprint cards": "藍圖卡片",
    "Choose a Starter": "選擇一份入門",
    "Blueprint": "藍圖",
    "Pick the workflow closest to your daily process. Each download starts from the form below so Flow2 can send the files and setup notes by email.": "選擇最接近你日常流程的工作流。每次下載都會由下方表格開始，Flow2 會透過電郵傳送檔案和設定說明。",
    "Lead generation": "客源開發",
    "New Lead Capture Flow": "新客源收集流程",
    "Best for": "適合",
    "Agencies, consultants, service businesses": "代理公司、顧問、服務型公司",
    "Simple flow": "簡單流程",
    "Reply": "回覆",
    "Apps needed": "需要工具",
    "Google Forms": "Google Forms",
    "Download Blueprint": "下載藍圖",
    "Customize This Flow": "客製這個流程",
    "Sales follow-up": "銷售跟進",
    "Quote Request Tracker": "報價查詢追蹤",
    "B2B sales, trading companies, service providers": "B2B 銷售、貿易公司、服務供應商",
    "Quote": "報價",
    "Reminder": "提醒",
    "Bookings": "預約",
    "Appointment Confirmation Flow": "預約確認流程",
    "Clinics, tutors, salons, consultants": "診所、補習導師、美容/髮型店、顧問",
    "Booking": "預約",
    "Confirm": "確認",
    "Admin filing": "行政歸檔",
    "Receipt & Document Filing Flow": "收據與文件歸檔流程",
    "Admin teams, consignment businesses, accounting, retail": "行政團隊、寄售業務、會計、零售",
    "Log": "記錄",
    "Email": "電郵",
    "Reputation": "口碑",
    "Customer Review Request Flow": "客戶評價邀請流程",
    "Restaurants, clinics, e-commerce, local services": "餐廳、診所、電商、本地服務",
    "Order": "訂單",
    "Delay": "延遲",
    "Review": "評價",
    "Owner reporting": "老闆報告",
    "Daily Business Digest": "每日業務摘要",
    "Owners, managers, small teams": "老闆、經理、小團隊",
    "Summary": "摘要",
    "How it works": "如何使用",
    "How to Use These": "如何使用這些",
    "Blueprints": "藍圖",
    "Each template is a starter workflow. You still connect your own accounts, test the path, and customize anything that depends on your real business rules.": "每個模板都是入門流程。你仍需要連接自己的帳戶、測試路徑，並按真實業務規則客製細節。",
    "Choose a blueprint": "選擇藍圖",
    "Pick the one that matches your business process.": "選擇最符合你業務流程的一份。",
    "Download the file": "下載檔案",
    "Receive the Make.com blueprint and setup notes by email.": "透過電郵收到 Make.com 藍圖和設定說明。",
    "Import into Make": "匯入 Make",
    "Add the blueprint to your own Make account.": "把藍圖加入你自己的 Make 帳戶。",
    "Reconnect apps": "重新連接工具",
    "Use your own Google Sheets, Gmail, Drive, Calendar, or forms.": "使用你自己的 Google Sheets、Gmail、Drive、Calendar 或表格。",
    "Test sample data": "測試範例資料",
    "Run a small test before using it in daily operations.": "在日常營運前，先跑一個小測試。",
    "Customize the flow": "客製流程",
    "Adjust it yourself or contact Flow2 for setup support.": "你可以自行調整，或聯絡 Flow2 協助設定。",
    "Before You Use the Blueprints": "使用藍圖前",
    "These templates are starter workflows. You will still need to connect your own Make.com account, Google account, forms, sheets, folders, and email settings.": "這些模板是入門流程。你仍需要連接自己的 Make.com 帳戶、Google 帳戶、表格、試算表、資料夾和電郵設定。",
    "Every business process is different. Some workflows may require custom logic, error handling, approval steps, permissions, WhatsApp integration, CRM setup, or AI processing.": "每個業務流程都不同。有些流程可能需要客製邏輯、錯誤處理、審批步驟、權限、WhatsApp 整合、CRM 設定或 AI 處理。",
    "Lead capture": "客源收集",
    "Get the Free": "取得免費",
    "Blueprint Pack": "藍圖包",
    "After submitting, you will receive the blueprint files and setup instructions by email.": "提交後，你會透過電郵收到藍圖檔案和設定說明。",
    "Quote tracking": "報價追蹤",
    "Documents": "文件",
    "Reviews": "評價",
    "Daily digest": "每日摘要",
    "Name": "姓名",
    "Company Name": "公司名稱",
    "Business Type": "業務類型",
    "Which workflow are you interested in?": "你對哪個流程有興趣？",
    "Send Me the Blueprints": "寄送藍圖給我",
    "This static page can collect the lead visually now. Connect the form to your CRM, email tool, or Make scenario before publishing.": "這個靜態頁目前已展示收集客源流程；正式發布前，請把表格接到 CRM、電郵工具或 Make 自動化流程。",
    "Thanks. The selected blueprint pack and setup instructions would be sent by email after the form is connected.": "謝謝。表格連接後，所選藍圖包和設定說明會透過電郵寄出。",
    "Preview details": "預覽細節",
    "See what each": "看看每份",
    "blueprint solves": "藍圖解決什麼",
    "The main page only shows previews. Full technical setup instructions should stay inside the email download pack.": "主頁只顯示預覽。完整技術設定說明應放在電郵下載包內。",
    "Lead Capture": "客源收集",
    "Quote Tracker": "報價追蹤",
    "Appointments": "預約",
    "Document Filing": "文件歸檔",
    "Review Request": "評價邀請",
    "Daily Digest": "每日摘要",
    "Capture enquiries and reply faster.": "收集查詢並更快回覆。",
    "This workflow captures new enquiries from a form, saves them into Google Sheets, notifies your team, and sends an automatic reply to the customer.": "這個流程會從表格收集新查詢、存入 Google Sheets、通知團隊，並自動回覆客戶。",
    "Good for": "適合",
    "Agencies": "代理公司",
    "Consultants": "顧問",
    "Clinics": "診所",
    "Local service businesses": "本地服務公司",
    "B2B sales teams": "B2B 銷售團隊",
    "Download This Blueprint": "下載這份藍圖",
    "Store": "儲存",
    "Internal Email": "內部電郵",
    "Customer Auto Reply": "客戶自動回覆",
    "Send": "發送",
    "Stop losing quote requests in inboxes.": "不要再讓報價查詢淹沒在收件箱。",
    "This workflow logs each quote request, alerts the right person, and creates a follow-up reminder so sales work does not depend on memory.": "這個流程會記錄每個報價查詢、提醒相關同事，並建立跟進提醒，讓銷售工作不再靠記憶。",
    "Trading companies": "貿易公司",
    "Service providers": "服務供應商",
    "Owners handling enquiries": "親自處理查詢的老闆",
    "Quote Form": "報價表格",
    "Internal Alert": "內部提醒",
    "Follow-up Reminder": "跟進提醒",
    "Track": "追蹤",
    "Confirm bookings without manual replies.": "不用人手回覆也能確認預約。",
    "This workflow takes a booking form submission, creates a calendar event, and sends a confirmation email with the next step.": "這個流程會接收預約表格、建立日曆事件，並寄出包含下一步的確認電郵。",
    "Tutors": "補習導師",
    "Salons": "美容/髮型店",
    "Booking Form": "預約表格",
    "Google Calendar": "Google Calendar",
    "Create": "建立",
    "Confirmation Email": "確認電郵",
    "File documents the same way every time.": "每次都用同一套方式歸檔文件。",
    "This workflow creates a consistent document trail by saving uploads into Drive, logging the record in Sheets, and confirming the submission by email.": "這個流程會把上載文件存入 Drive、把記錄寫入 Sheets，並以電郵確認提交，建立一致的文件軌跡。",
    "Admin teams": "行政團隊",
    "Accounting support": "會計支援",
    "Retail operations": "零售營運",
    "Consignment businesses": "寄售業務",
    "Drive Folder": "Drive 資料夾",
    "File": "歸檔",
    "Sheet Log": "表格記錄",
    "Ask for reviews at the right moment.": "在合適時機邀請客戶評價。",
    "This workflow waits after a completed order or visit, then sends a review request email without staff needing to remember the follow-up.": "這個流程會在訂單或到訪完成後等待一段時間，再自動寄出評價邀請電郵，不需要同事記住跟進。",
    "Restaurants": "餐廳",
    "E-commerce stores": "電商店",
    "Completed Order": "完成訂單",
    "Wait": "等待",
    "Review Request Email": "評價邀請電郵",
    "Give owners one daily operations snapshot.": "給老闆一份每日營運快照。",
    "This workflow reads a Google Sheet, turns rows into a short daily summary, and emails the report to owners or managers.": "這個流程會讀取 Google Sheet，把資料行整理成每日短摘要，並把報告寄給老闆或經理。",
    "Owners": "老闆",
    "Managers": "經理",
    "Small teams": "小團隊",
    "Operations leads": "營運負責人",
    "Daily Summary": "每日摘要",
    "Email Report": "電郵報告",
    "Consultation hook": "顧問入口",
    "Want This Built": "想把這套流程",
    "Properly": "正式建好",
    "for Your Business": "放進你的業務？",
    "Free blueprints are useful for simple workflows, but real business automation usually needs customization. Flow2 helps SMEs design, build, and maintain automation systems that match their actual daily operations.": "免費藍圖適合簡單流程，但真正業務自動化通常需要客製。Flow2 協助中小企設計、建置和維護符合日常營運的自動化系統。",
    "Book a Free Automation Consultation": "預約免費自動化諮詢",
    "View Our Pricing": "查看價格",
    "We can help you with": "我們可以協助你",
    "Workflow planning": "流程規劃",
    "Make.com setup": "Make.com 設定",
    "Google Workspace automation": "Google Workspace 自動化",
    "WhatsApp notification flows": "WhatsApp 通知流程",
    "CRM integration": "CRM 整合",
    "AI document processing": "AI 文件處理",
    "PDF and invoice generation": "PDF 與發票產生",
    "Dashboard and reporting": "儀表板與報表",
    "Error handling and maintenance": "錯誤處理與維護",
    "FAQ": "常見問題",
    "Questions before you": "下載前的",
    "download": "問題",
    "Short answers for SME owners who want to know whether the blueprints are easy to use and whether Flow2 can handle the setup.": "給中小企老闆的簡短答案，了解藍圖是否容易使用，以及 Flow2 能否協助設定。",
    "Do I need a Make.com account?": "我需要 Make.com 帳戶嗎？",
    "Yes. You need a Make.com account to import and run the blueprints.": "需要。你需要 Make.com 帳戶才能匯入和執行藍圖。",
    "Are these blueprints fully ready to use?": "這些藍圖可以直接使用嗎？",
    "They are starter templates. You still need to connect your own apps and adjust the settings.": "它們是入門模板。你仍需要連接自己的應用程式並調整設定。",
    "Can Flow2 set this up for me?": "Flow2 可以幫我設定嗎？",
    "Yes. We can customize, test, and deploy the workflow for your business.": "可以。我們可以為你的業務客製、測試和部署流程。",
    "Can these workflows connect with WhatsApp?": "這些流程可以連接 WhatsApp 嗎？",
    "Yes, but WhatsApp usually requires additional setup through supported providers or API tools.": "可以，但 WhatsApp 通常需要透過支援供應商或 API 工具進行額外設定。",
    "Can I use these with my CRM?": "可以和我的 CRM 一起使用嗎？",
    "Yes, depending on your CRM. Flow2 can help integrate tools like HubSpot, Airtable, Notion, Google Sheets, or custom systems.": "可以，視乎你的 CRM 而定。Flow2 可協助整合 HubSpot、Airtable、Notion、Google Sheets 或客製系統。",
    "Are the blueprints free?": "藍圖是免費的嗎？",
    "Yes, the starter blueprints are free. Custom setup and advanced automation are paid services.": "是，入門藍圖免費。客製設定和進階自動化屬付費服務。",
    "What if my process is more complex?": "如果我的流程更複雜怎麼辦？",
    "Book a Flow Audit and we will map your workflow before building.": "預約流程審核，我們會在建置前先整理你的流程。",
    "Final CTA": "最後行動",
    "Ready to": "準備好",
    "Automate": "自動化",
    "Your Business Workflow": "你的業務流程？",
    "Download the free starter blueprints or book a consultation with Flow2 to design a workflow that fits your actual business process.": "下載免費入門藍圖，或預約 Flow2 諮詢，設計符合你真實業務流程的自動化。",
    "Download Free Blueprints": "下載免費藍圖",
    "Book a Free Consultation": "預約免費諮詢"
  };

  var I18N_ATTRS = {
    "content": {
      "Flow2 pricing for Hong Kong SMEs: choose an audit, a workflow build, or an AI / Business OS project based on how clear your automation need is today.": "Flow2 香港中小企價格方案：按你目前的自動化需求清晰度，選擇流程審核、流程建置，或 AI / Business OS 專案。",
      "Download simple Make.com workflow blueprints for SMEs, then book a Flow Audit if you want Flow2 to customize the automation for your business.": "下載為中小企而設的 Make.com 流程藍圖；如果想 Flow2 按你的業務客製自動化，可以預約流程審核。"
    },
    "placeholder": {
      "e.g. clinic, trading company, agency, retail": "例如：診所、貿易公司、agency、零售"
    },
    "aria-label": {
      "Language switch": "語言切換",
      "Primary navigation": "主要導覽",
      "Open navigation menu": "開啟導覽選單",
      "Close navigation menu": "關閉導覽選單",
      "Three Flow2 pricing entry points": "Flow2 三個價格切入點",
      "Flow2 pricing plans": "Flow2 價格方案",
      "Looping automation workflow preview": "循環自動化流程預覽",
      "Common connected apps": "常見連接工具",
      "Starter automation blueprints": "入門自動化藍圖",
      "How to use the blueprints": "如何使用藍圖",
      "Included blueprint categories": "包含的藍圖類別",
      "Blueprint previews": "藍圖預覽",
      "Flow2 customization services": "Flow2 客製服務"
    },
    "data-message": {
      "Hi Flow2, I want to start with the Flow Audit plan.": "你好 Flow2，我想先了解流程審核方案。",
      "Hi Flow2, I want to discuss building an automation workflow.": "你好 Flow2，我想討論建置一個自動化流程。",
      "Hi Flow2, I want to discuss an advanced AI or operations system project.": "你好 Flow2，我想討論進階 AI 或營運系統專案。"
    }
  };

  var textOriginals = new WeakMap();
  var attrOriginals = new WeakMap();
  var i18nObserver = null;

  function mergePageI18n() {
    if (!window.Flow2PageI18n || window.Flow2PageI18nReady) return;
    Object.keys(window.Flow2PageI18n.text || {}).forEach(function (key) {
      I18N_TEXT[key] = window.Flow2PageI18n.text[key];
    });
    Object.keys(window.Flow2PageI18n.attrs || {}).forEach(function (attr) {
      I18N_ATTRS[attr] = I18N_ATTRS[attr] || {};
      Object.keys(window.Flow2PageI18n.attrs[attr] || {}).forEach(function (key) {
        I18N_ATTRS[attr][key] = window.Flow2PageI18n.attrs[attr][key];
      });
    });
    window.Flow2PageI18nReady = true;
  }

  function initReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]:not([data-revealed])"));
    if (!items.length) return;

    var reduce = false;
    try {
      reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_) {}

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.dataset.revealed = "true"; });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.dataset.revealed = "true";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    items.forEach(function (el) { observer.observe(el); });
  }

  function initNav() {
    var nav = document.getElementById("nav") || document.querySelector(".nav");
    if (!nav || nav.dataset.siteNavReady === "true") return;
    nav.dataset.siteNavReady = "true";

    var toggle = nav.querySelector(".nav-menu-toggle, .menu-button");
    var links = nav.querySelector(".nav-links");

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      nav.classList.toggle("is-menu-open", open);
      if (links) {
        links.style.transition = open ? "none" : "";
        links.style.opacity = open ? "1" : "";
        links.style.pointerEvents = open ? "auto" : "";
        links.style.visibility = open ? "visible" : "";
        links.style.transform = open ? "translateY(0)" : "";
      }
      if (toggle) {
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        var zh = document.body && document.body.getAttribute("data-lang") === "zh";
        toggle.setAttribute("aria-label", open
          ? (zh ? "關閉導覽選單" : "Close navigation menu")
          : (zh ? "開啟導覽選單" : "Open navigation menu"));
      }
    }

    if (toggle) {
      toggle.addEventListener("click", function () {
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });
    }

    if (links) {
      links.addEventListener("click", function (event) {
        if (event.target.closest("a")) setOpen(false);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });

    var anchors = links ? Array.prototype.slice.call(links.querySelectorAll("a[href]")) : [];
    anchors.forEach(function (anchor) {
      try {
        var url = new URL(anchor.getAttribute("href"), window.location.href);
        var samePath = url.pathname === window.location.pathname || url.pathname.endsWith("/" + window.location.pathname.split("/").pop());
        if (samePath && !url.hash) anchor.setAttribute("aria-current", "page");
      } catch (_) {}
    });
  }

  function initLandingNav() {
    var nav = document.querySelector(".nav.is-hidden, .nav[data-nav-mode='landing']");
    if (!nav || nav.dataset.siteLandingNavReady === "true") return;
    nav.dataset.siteLandingNavReady = "true";

    var lastY = window.scrollY || 0;
    var ticking = false;

    function paint() {
      var y = window.scrollY || 0;
      var shouldPin = y > 120;
      var goingDown = y > lastY && y > 360;
      nav.classList.toggle("is-pinned", shouldPin && !goingDown);
      nav.classList.toggle("is-hidden", !shouldPin || goingDown);
      lastY = y;
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(paint);
        ticking = true;
      }
    }, { passive: true });

    paint();
  }

  function normalizeLang(value) {
    return value === "zh" ? "zh" : "en";
  }

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function preserveSpacing(original, translated) {
    var start = (String(original).match(/^\s*/) || [""])[0];
    var end = (String(original).match(/\s*$/) || [""])[0];
    return start + translated + end;
  }

  function shouldSkipTextNode(node) {
    var parent = node.parentElement;
    if (!parent) return true;
    var tag = parent.tagName;
    return tag === "SCRIPT" || tag === "STYLE" || tag === "SVG" || tag === "NOSCRIPT";
  }

  function translateTextNode(node, lang) {
    if (shouldSkipTextNode(node)) return;
    if (!textOriginals.has(node)) textOriginals.set(node, node.nodeValue);
    var original = textOriginals.get(node);
    if (lang !== "zh") {
      if (node.nodeValue !== original) node.nodeValue = original;
      return;
    }
    var translated = I18N_TEXT[normalizeText(original)];
    if (translated) {
      var next = preserveSpacing(original, translated);
      if (node.nodeValue !== next) node.nodeValue = next;
    }
  }

  function translateText(root, lang) {
    var scope = root || document.body;
    if (!scope) return;
    if (scope.nodeType === Node.TEXT_NODE) {
      translateTextNode(scope, lang);
      return;
    }
    var walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    var node = walker.nextNode();
    while (node) {
      translateTextNode(node, lang);
      node = walker.nextNode();
    }
    var title = document.querySelector("title");
    if (title && (!root || root === document.body || root === document.documentElement)) {
      Array.prototype.slice.call(title.childNodes).forEach(function (child) {
        if (child.nodeType === Node.TEXT_NODE) translateTextNode(child, lang);
      });
    }
  }

  function translateAttributes(lang) {
    Object.keys(I18N_ATTRS).forEach(function (attr) {
      var nodes = Array.prototype.slice.call(document.querySelectorAll("[" + attr + "]"));
      nodes.forEach(function (node) {
        var originals = attrOriginals.get(node);
        if (!originals) {
          originals = {};
          attrOriginals.set(node, originals);
        }
        if (!Object.prototype.hasOwnProperty.call(originals, attr)) {
          originals[attr] = node.getAttribute(attr);
        }
        var original = originals[attr];
        if (lang !== "zh") {
          if (original != null) node.setAttribute(attr, original);
          return;
        }
        var translated = I18N_ATTRS[attr][original];
        if (translated && node.getAttribute(attr) !== translated) node.setAttribute(attr, translated);
      });
    });
  }

  function applyTranslations(lang, root) {
    var activeLang = normalizeLang(lang);
    translateText(root || document.body, activeLang);
    if (!root || root === document.body || root === document.documentElement) {
      translateAttributes(activeLang);
    }
  }

  function observeTranslations() {
    if (i18nObserver || !document.body) return;
    i18nObserver = new MutationObserver(function (mutations) {
      if (document.body.getAttribute("data-lang") !== "zh") return;
      mutations.forEach(function (mutation) {
        if (mutation.type === "characterData") translateTextNode(mutation.target, "zh");
        Array.prototype.slice.call(mutation.addedNodes || []).forEach(function (node) {
          translateText(node, "zh");
        });
      });
      translateAttributes("zh");
    });
    i18nObserver.observe(document.body, { childList: true, characterData: true, subtree: true });
  }

  function initLanguageSwitch() {
    mergePageI18n();
    var buttons = Array.prototype.slice.call(document.querySelectorAll("button[data-lang]"));
    if (!buttons.length || document.documentElement.dataset.siteLangReady === "true") return;
    document.documentElement.dataset.siteLangReady = "true";

    function paint(lang) {
      var activeLang = normalizeLang(lang);
      buttons.forEach(function (button) {
        var active = normalizeLang(button.dataset.lang) === activeLang;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", active ? "true" : "false");
      });

      document.documentElement.lang = activeLang === "zh" ? "zh-Hant" : "en";
      document.body.setAttribute("data-lang", activeLang);
      applyTranslations(activeLang);

      try { window.localStorage.setItem("flow2-lang", activeLang); } catch (_) {}
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        paint(button.dataset.lang);
      });
    });

    var saved = "en";
    try { saved = window.localStorage.getItem("flow2-lang") || "en"; } catch (_) {}
    observeTranslations();
    paint(saved);
  }

  function initClienteleSliders() {
    var sliders = Array.prototype.slice.call(document.querySelectorAll("[data-clientele-slider]"));
    sliders.forEach(function (slider) {
      if (slider.dataset.sliderReady === "true") return;
      var track = slider.querySelector(".clientele-track");
      var set = slider.querySelector(".clientele-set");
      if (!track || !set || track.dataset.cloned === "true") return;
      var clone = set.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
      track.dataset.cloned = "true";
      var itemCount = set.querySelectorAll(".clientele-pill").length;
      track.style.setProperty("--clientele-duration", Math.max(34, itemCount * 3.2) + "s");
      slider.dataset.sliderReady = "true";
    });
  }

  function initSharedSite() {
    initNav();
    initLandingNav();
    initLanguageSwitch();
    initReveal();
    initClienteleSliders();
  }

  if (document.body) {
    initSharedSite();
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSharedSite);
  } else {
    initSharedSite();
  }

  window.Flow2Site = {
    init: initSharedSite,
    initNav: initNav,
    initLanguageSwitch: initLanguageSwitch,
    applyTranslations: applyTranslations,
    initReveal: initReveal,
    initClienteleSliders: initClienteleSliders
  };
})();
