import React, { useState } from 'react';
import './App.css';

// Module data structure
interface Module {
  id: number;
  title: string;
  content: string;
  hasQuiz: boolean;
  quiz?: Quiz;
}

interface Quiz {
  questions: Question[];
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'register' | 'modules' | 'completion'>('home');
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [completedModules, setCompletedModules] = useState<number[]>([]);

  // Modules data with content and quizzes
  const modules: Module[] = [
    {
      id: 1,
      title: "Introduction to Stock Market",
      hasQuiz: false,
      content: `# Introduction to Stock Market

The stock market is a structured and regulated environment where individuals and institutions can trade equity securities, typically through stock exchanges such as the National Stock Exchange (NSE) or the Bombay Stock Exchange (BSE).

## A Brief History of the Stock Market in India

The roots of the Indian stock market trace back to the 19th century. The first organized stock trading in India began in Mumbai (then Bombay) in the 1850s when a group of 22 brokers started trading under a banyan tree in front of the Town Hall.

Key historical milestones:
- **1875** – Bombay Stock Exchange (BSE) founded
- **1992** – NSE launched, bringing in electronic trading
- **1992** – SEBI established to regulate the market
- **2000** – Introduction of online trading for retail investors

## What Is a Share?

A **share** or **stock** represents fractional ownership in a company. When you purchase shares, you become a **shareholder** and obtain rights such as receiving **dividends** and voting in general meetings.

## Why Do Companies Issue Shares?

Companies issue shares primarily for **capital formation** - raising funds without incurring debt for expansion, research and development, or asset acquisition.

## Market Participants

- **Retail Investors**: Individual investors who trade with personal funds
- **Institutional Investors**: Mutual funds, insurance firms, pension funds
- **Stock Brokers**: Registered intermediaries facilitating transactions
- **SEBI**: The regulatory authority overseeing market operations

## How Does Buying/Selling Work?

1. **Opening Accounts**: Demat Account (holds shares) + Trading Account (place orders)
2. **Placing Orders**: Market orders (immediate) vs Limit orders (specific price)
3. **Order Matching**: Exchange matches buy/sell orders automatically
4. **Settlement**: T+1 settlement - you get shares/money next working day

## What Makes Stock Prices Move?

- Company Performance (profits, news, product launches)
- Investor Sentiment
- Macroeconomic News (interest rates, inflation)
- Demand & Supply dynamics

## Types of Investors

- **Long-Term Investors**: Buy and hold for years
- **Short-Term Traders**: Focus on short-term price movements
- **Retail vs Institutional**: Individual vs professional investors

## Risk vs Reward

Higher returns usually mean higher risk. Diversification and long-term perspective help reduce risk.

## Basic Terms Every Beginner Must Know

- **IPO (Initial Public Offering)**: When a private company offers its shares to the public for the first time
- **Sensex/Nifty**: Major stock indices that track the performance of top companies
- **Dividend**: Company's profit shared with shareholders as cash payments
- **Market Cap**: Total company value (Share Price × Total Shares)
- **Bull/Bear Market**: Bull = Rising prices (optimistic), Bear = Falling prices (pessimistic)
- **Volume**: Number of shares traded in a day - indicates market interest
- **Volatility**: How much stock prices move up and down - higher volatility = higher risk
- **P/E Ratio**: Price-to-Earnings ratio - shows if stock is expensive or cheap
- **52-Week High/Low**: Highest and lowest price in the past year
- **Circuit Breaker**: Trading halt when stock moves too much in one day

## Stock Exchanges in India

### Bombay Stock Exchange (BSE)
- Established in 1875, Asia's oldest stock exchange
- Home to over 5,000 listed companies
- Sensex is its benchmark index (30 companies)

### National Stock Exchange (NSE)
- Established in 1992, fully electronic trading
- More liquid and modern than BSE
- Nifty 50 is its benchmark index (50 companies)

## How to Read Stock Prices

When you see a stock quote, you'll notice:
- **Current Price (CMP)**: Last traded price
- **Open**: Price when market opened today
- **High/Low**: Highest and lowest price today
- **Previous Close**: Yesterday's closing price
- **Change**: Difference from yesterday (in ₹ and %)

## Investment vs Trading vs Speculation

### Investment (Long-term: 5+ years)
- Buy quality companies and hold
- Focus on business fundamentals
- Lower risk, steady returns

### Trading (Short-term: Days to months)
- Buy and sell frequently
- Focus on price movements
- Higher risk, potential for quick profits

### Speculation (Very short-term: Minutes to days)
- Gambling on price movements
- No fundamental analysis
- Very high risk, can lose everything

## Getting Started Checklist

✅ **Learn the basics** (you're doing this now!)
✅ **Open Demat + Trading account**
✅ **Start with small amounts** (₹500-1000)
✅ **Choose 2-3 good companies** to begin with
✅ **Read company annual reports**
✅ **Follow financial news** (Economic Times, Moneycontrol)
✅ **Join investment communities** (Reddit, Discord groups)
✅ **Track your investments** monthly, not daily

Remember: **Time in the market beats timing the market!**`
    },
    {
      id: 2,
      title: "Common Mistakes to Avoid",
      hasQuiz: false,
      content: `# Common Mistakes to Avoid as a Beginner

## 1. Chasing Trends (FOMO)

**Definition:** Jumping into stocks just because everyone is talking about it - Fear Of Missing Out.

**Why it's risky:** You're investing based on emotion, not research. Once hype fades, prices usually crash.

**Example:** Buying Dogecoin at ₹60 after Elon Musk tweets, only to see it crash to ₹5 a week later.

**Lesson:** Don't buy just because it's trending. Trends don't always mean long-term value.

## 2. Over-Diversifying

**Definition:** Spreading money across too many stocks thinking it reduces risk.

**Why it's bad:** Makes it hard to track investments or build conviction in any company.

**Example:** Investing ₹500 each in 20 random companies from different sectors without understanding what they do.

**Better strategy:** Choose 5–10 good businesses you understand and track them well.

## 3. Ignoring Red Flags

**Definition:** Overlooking warning signs just because a stock looks attractive.

**Why it's dangerous:** Red flags like high debt, bad management, or legal issues signal deeper problems.

**Example:** Ignoring that a promoter has pledged 80% of shares and the company has zero profits, leading to eventual collapse.

**Always check:** Fundamentals, promoter behavior, and news.

## 4. Trying to Time the Market

**Definition:** Trying to guess the perfect time to buy low and sell high.

**Why it's unrealistic:** Even professionals can't consistently time the market.

**Example:** Waiting for Sensex to crash to 50,000 but it never comes down, missing opportunities.

**Better strategy:** Follow SIP or regular investing with discipline.

## 5. Selling Too Early

**Definition:** Selling investments for small profit without letting them grow.

**Why it's costly:** You miss out on compound growth and multibagger returns.

**Example:** Someone sold Infosys after it doubled in 1 year in the 1990s, missing 10,000%+ returns over 10-20 years.

**Tip:** Hold on to fundamentally strong companies for the long term.

## 6. Not Having an Emergency Fund

**Definition:** Investing all your money without keeping cash for emergencies.

**Why it's dangerous:** You might be forced to sell investments at a loss during emergencies.

**Example:** College student invests entire ₹10,000 savings. When laptop breaks, has to sell stocks at 20% loss to buy new one.

**Better strategy:** Keep 3-6 months expenses in savings before investing.

## 7. Following Tips from Social Media

**Definition:** Buying stocks based on Instagram/YouTube "tips" without research.

**Why it's risky:** These "experts" often have hidden agendas or are just lucky.

**Example:** YouTuber promotes "next Tesla" stock. Followers buy, stock crashes 50%. YouTuber was paid to promote it.

**Lesson:** Do your own research. No shortcuts to wealth.

## 8. Not Understanding What You're Buying

**Definition:** Investing in companies/sectors you don't understand.

**Why it's bad:** You can't make informed decisions about when to buy/sell.

**Example:** Buying pharma stocks without understanding drug approval process, regulatory risks, or patent expiry.

**Warren Buffett's rule:** "Never invest in a business you cannot understand."

## 9. Panic Selling During Market Crashes

**Definition:** Selling everything when market falls, locking in losses.

**Why it's costly:** Markets always recover eventually. Panic selling means buying high, selling low.

**Example:** March 2020 COVID crash - many sold at 30% loss. Those who held recovered by December 2020.

**Better approach:** Market crashes are buying opportunities, not selling signals.

## 10. Not Learning from Mistakes

**Definition:** Repeating the same investment mistakes without reflection.

**Why it's harmful:** You never improve your investment skills.

**Solution:** Keep an investment journal. Note why you bought/sold, what went right/wrong.

## Red Flags to Always Avoid

🚩 **Company Red Flags:**
- Promoter pledging >75% shares
- Frequent management changes
- Declining revenue for 3+ years
- High debt-to-equity ratio (>2)
- No clear business model

🚩 **Investment Red Flags:**
- "Guaranteed returns" promises
- Pressure to invest immediately
- Tips from unknown sources
- Investments you don't understand
- Putting all money in one stock

## Golden Rules for Beginners

1. **Start small** - Begin with amounts you can afford to lose
2. **Diversify wisely** - 5-10 stocks across different sectors
3. **Think long-term** - Minimum 5-year investment horizon
4. **Keep learning** - Read books, follow credible sources
5. **Stay disciplined** - Stick to your investment plan
6. **Review regularly** - Monthly review, not daily checking
7. **Have patience** - Wealth building takes time

**Remember:** Every expert was once a beginner. Learn from mistakes, stay consistent, and keep improving!`
    },
    {
      id: 3,
      title: "How to Get Started",
      hasQuiz: false,
      content: `# How to Get Started

This is where it all begins. You've learned the basics, now let's take action!

## 1. Open a DEMAT Account

**Definition:** A DEMAT account is like a digital wallet for holding shares in electronic format. You can't invest without it.

**What you need:**
- PAN Card
- Aadhaar Card
- Bank account
- Mobile number linked with Aadhaar

**Popular Apps for Gen Z:**
- **Zerodha (Kite)** – Clean interface
- **Groww** – Super beginner-friendly
- **Upstox**, **Angel One**, **Dhan** – Also great for students

**Pro Tip:** Start with basic account (no margin or F&O). You can always upgrade later.

## 2. Use Bucket-Style Investing

**Definition:** Divide investments into "buckets" based on goals, time horizon, and risk.

**The Buckets:**
- 🚨 **Emergency** (Low risk): Bank FD, Liquid Fund
- 🎯 **Short-term** (Medium risk): Hybrid Mutual Fund
- 🚀 **Long-term** (High risk): Stocks, ETFs

**Example:** College student investing ₹500/month:
- ₹100 to Liquid Fund (emergency)
- ₹150 to Mutual Fund (short-term)
- ₹250 to Stocks (long-term wealth)

## 3. Build Your First Value Portfolio

**Definition:** A value portfolio is stocks picked based on fundamentals, quality, and fair price.

**What to include:**
- 3–5 quality businesses (start small)
- Apply qualitative + quantitative filters
- Focus on companies with strong promoters & clean management

**Example portfolio:**
- **ITC** – Strong cash flows, high dividend
- **IRCTC** – Monopoly, government-backed
- **Tata Consumer** – Trusted brand, long-term growth
- **SBI Life** – Financial sector exposure

**Rule:** Invest in what you understand (Warren Buffett rule).

## 4. Keep Track with Portfolio Tracker

**Tools You Can Use:**
- **Tickertape**
- **INDmoney**
- **Zerodha Console**
- **Google Sheets (DIY)**

**Monthly routine:**
- Update investment amount
- Track growth
- Note why you bought each stock (helps avoid panic selling)

## 5. Mindset and Discipline

- Don't check prices daily
- Focus on business performance, not stock performance
- Review every 3–6 months
- Have an "investor journal" – note why you bought something

**Remember:** Investing is not about IQ, it's about EQ (emotional intelligence).

## 6. Learn the Tax Implications

**Understanding Investment Taxes:**

### Short-Term Capital Gains (STCG)
- Stocks held for less than 1 year
- Tax rate: 15% on profits
- Example: Buy at ₹100, sell at ₹150 in 6 months = ₹7.5 tax on ₹50 profit

### Long-Term Capital Gains (LTCG)
- Stocks held for more than 1 year
- Tax rate: 10% on profits above ₹1 lakh per year
- Example: ₹2 lakh profit in 2 years = ₹10,000 tax (on ₹1 lakh excess)

### Dividend Tax
- Dividends are taxable as per your income tax slab
- TDS deducted if dividend > ₹5,000 per year

## 7. Common Beginner-Friendly Stocks

**Large-Cap Stocks (Safer for beginners):**
- **Reliance Industries** - Oil, telecom, retail giant
- **TCS** - IT services leader
- **HDFC Bank** - Top private bank
- **ITC** - FMCG and cigarettes
- **Infosys** - IT services

**Mid-Cap Options:**
- **Asian Paints** - Paint market leader
- **Bajaj Finance** - NBFC leader
- **Pidilite** - Adhesives (Fevicol)

**Why these are good for beginners:**
- Established businesses
- Regular profits
- Less volatile than small-caps
- Good corporate governance

## 8. Investment Apps Comparison

| App | Brokerage | Best For | Pros | Cons |
|-----|-----------|----------|------|------|
| **Zerodha** | ₹20/trade | Serious investors | Low cost, good tools | Complex for beginners |
| **Groww** | ₹20/trade | Beginners | Simple UI, educational content | Limited advanced features |
| **Upstox** | ₹20/trade | Active traders | Fast execution | Occasional technical issues |
| **Angel One** | ₹20/trade | All-in-one | Research reports included | Higher charges for some services |

## 9. Building Your First ₹1000 Portfolio

**Conservative Approach (Lower Risk):**
- ₹400 in Nifty 50 ETF (diversified)
- ₹300 in HDFC Bank (stable large-cap)
- ₹300 in ITC (dividend-paying stock)

**Balanced Approach (Medium Risk):**
- ₹300 in TCS (IT sector)
- ₹300 in Asian Paints (consumer goods)
- ₹200 in Bajaj Finance (financial services)
- ₹200 in Reliance (energy/telecom)

**Growth Approach (Higher Risk):**
- ₹250 each in 4 different mid-cap stocks
- Focus on companies with 15%+ annual growth

## 10. Monthly Investment Routine

**Week 1:** Research and shortlist 2-3 stocks
**Week 2:** Read their annual reports and news
**Week 3:** Check technical charts and entry points
**Week 4:** Make investment and update portfolio tracker

**Monthly Review Questions:**
- Are my companies performing as expected?
- Any major news affecting my stocks?
- Should I add more to winning positions?
- Any red flags requiring exit?

## 11. Resources to Follow

**Websites:**
- Screener.in (stock analysis)
- Tickertape.in (portfolio tracking)
- Moneycontrol.com (news and data)
- Economic Times (financial news)

**YouTube Channels:**
- CA Rachana Ranade (basics)
- Pranjal Kamra (stock analysis)
- Akshat Shrivastava (market insights)

**Books to Read:**
- "The Intelligent Investor" by Benjamin Graham
- "One Up On Wall Street" by Peter Lynch
- "Coffee Can Investing" by Saurabh Mukherjea

**Remember:** Start small, learn continuously, and be patient. Rome wasn't built in a day, and neither is wealth!`
    },
    {
      id: 4,
      title: "Your Money: Sleeping or Working?",
      hasQuiz: true,
      content: `# Your Money: Sleeping or Working?

## What Does "Sleeping Money" Mean?

It means your money is just sitting there, not growing or doing anything useful for you. It's not helping you make more money.

**Example - Sleeping Money:**
Rahul got ₹5,000 for his birthday. He puts ₹4,000 in savings account and buys pizza with ₹1,000. 1 year later — the ₹4,000 is still ₹4,000 (maybe ₹4,040 if lucky). His money is doing nothing.

## What is "Working Money"?

Working money is money put into investments, businesses, or assets that grow in value. When your money is working, it creates more money for you — even when you're sleeping!

**Example - Working Money:**
Priya also got ₹5,000. She invests ₹3,000 in mutual fund/stock, leaves ₹1,000 in savings, uses ₹1,000 for expenses. 1 year later, her ₹3,000 investment became ₹3,600. Her money worked and earned extra cash!

## What is Savings?

Savings is money you keep aside (not spend) for future use — usually in a bank account. It's the first step to building wealth, but doesn't grow much on its own.

## How Savings is Affected by Inflation

**Inflation** means prices go up over time, so the value of your saved money drops because you can buy less with it.

**Example:** In 2015, chocolate bar was ₹10. In 2025, it's ₹20. If you saved ₹100 in 2015, you could buy 10 bars. In 2025, same ₹100 gets only 5 bars. Your savings lost value even though the number didn't change.

**Key Point:** If savings don't grow faster than inflation, you're actually losing money silently.

## What is Investment?

Investment is when you use your money to earn more money by putting it into stocks, mutual funds, real estate, or businesses.

**Example:** You invest ₹1,000 in company stock. After 1 year, its value becomes ₹1,300. That extra ₹300 = your money worked and earned for you!

## Types of Investments

### 1. Stocks (Equity Shares)
A stock represents share in company ownership. You earn through capital appreciation (price increase) and dividends (profit sharing).

### 2. Mutual Funds
Pooled investment where money from many investors is managed by professional fund manager. Offers diversification and professional management.

### 3. Bonds
Fixed-income instrument representing loan to borrower (corporation/government). Safer than stocks, offers predictable income.

### 4. Gold
Physical or digital asset that holds intrinsic value. Safe haven during market volatility, protects against inflation.

### 5. Savings Account
Money in bank savings account pays 6-7% interest annually. Safe but low returns that often can't keep up with inflation.

## Price vs Value - Warren Buffett

"Price is what you pay, Value is what you get"

**The price** is just the amount of money you pay for something.
**The value** is the real worth or benefit you get from it.

**Example:** You buy Sneaker A for ₹5,000 but it wears out in 3 months. Friend buys Sneaker B for ₹2,500, lasts 2 years. You paid more but got less value. Smart investors focus on value, not just price.

## Real-Life Examples of Money Working

### Example 1: The Coffee Shop Investment
**Rahul's Story:** Instead of buying expensive coffee daily (₹150 × 30 days = ₹4,500/month), Rahul invests ₹4,000 monthly in a mutual fund earning 12% annually. After 5 years, his coffee money becomes ₹3.2 lakhs!

**Lesson:** Small daily expenses, when invested, can create significant wealth.

### Example 2: The Birthday Money Strategy
**Priya's Approach:** Every birthday, she gets ₹10,000. Instead of shopping, she invests in quality stocks:
- Age 18: ₹10,000 in TCS → Worth ₹45,000 at age 25
- Age 19: ₹10,000 in HDFC Bank → Worth ₹38,000 at age 25
- Age 20: ₹10,000 in Asian Paints → Worth ₹42,000 at age 25

**Total:** ₹30,000 invested became ₹1.25 lakhs in 7 years!

## The Compound Interest Magic

**Albert Einstein called it "The 8th Wonder of the World"**

### Simple vs Compound Interest Example:
**Simple Interest:** ₹10,000 at 10% for 10 years = ₹20,000 (₹1,000 interest each year)
**Compound Interest:** ₹10,000 at 10% for 10 years = ₹25,937 (interest earns interest!)

### The Rule of 72
**Quick Formula:** 72 ÷ Interest Rate = Years to double your money
- At 8% return: 72 ÷ 8 = 9 years to double
- At 12% return: 72 ÷ 12 = 6 years to double
- At 15% return: 72 ÷ 15 = 4.8 years to double

## Investment Vehicles Comparison

| Investment Type | Risk Level | Expected Returns | Time Horizon | Best For |
|----------------|------------|------------------|--------------|----------|
| **Savings Account** | Very Low | 3-4% | Any | Emergency fund |
| **Fixed Deposits** | Low | 5-7% | 1-5 years | Short-term goals |
| **Mutual Funds** | Medium | 10-15% | 3+ years | Diversified growth |
| **Individual Stocks** | High | 15-25% | 5+ years | Active investors |
| **Gold** | Medium | 8-12% | 5+ years | Inflation hedge |

## The Psychology of Money

### Why People Keep Money "Sleeping"
1. **Fear of Loss:** "What if I lose money?"
2. **Lack of Knowledge:** "I don't understand investing"
3. **Procrastination:** "I'll start next month"
4. **Small Amount Thinking:** "₹1,000 won't make a difference"

### Overcoming These Mental Barriers
1. **Start Small:** Begin with ₹500-1,000
2. **Educate Yourself:** Read, watch, learn (you're doing this now!)
3. **Set Goals:** "I want ₹1 lakh in 3 years"
4. **Automate:** Set up SIPs (Systematic Investment Plans)

## Practical Action Steps

### Week 1: Assessment
- Calculate your monthly income and expenses
- Identify how much you can invest (start with 10-20% of income)
- List your financial goals (short-term and long-term)

### Week 2: Account Setup
- Research and choose a broker (Zerodha, Groww, Upstox)
- Open Demat and Trading accounts
- Complete KYC process

### Week 3: First Investment
- Start with a diversified mutual fund or ETF
- Invest a small amount (₹1,000-5,000)
- Set up monthly SIP

### Week 4: Learning & Tracking
- Read company annual reports
- Follow financial news
- Track your investments (but don't check daily!)

## Common Myths Busted

**Myth 1:** "You need lakhs to start investing"
**Reality:** You can start with as little as ₹100 in mutual funds

**Myth 2:** "Investing is gambling"
**Reality:** Informed investing based on research is wealth building, not gambling

**Myth 3:** "Only rich people invest in stocks"
**Reality:** Many millionaires started with small amounts and consistent investing

**Myth 4:** "I'm too young to invest"
**Reality:** Starting young is the biggest advantage due to compound interest

## Your Money Personality Quiz

**Question:** You have ₹10,000. What do you do?

**A) Keep it in savings account** → Conservative (Start with mutual funds)
**B) Buy the latest gadget** → Spender (Learn budgeting first)
**C) Invest in trending stock** → Risk-taker (Learn analysis first)
**D) Research and invest wisely** → Smart investor (You're ready!)

**Remember:** The best time to plant a tree was 20 years ago. The second-best time is NOW. Start making your money work for you today!`,
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the main difference between 'sleeping money' and 'working money'?",
            options: [
              "Sleeping money is in a bank, working money is in cash",
              "Sleeping money doesn't grow, working money generates returns through investments",
              "Sleeping money is for emergencies, working money is for daily expenses",
              "There is no difference between them"
            ],
            correctAnswer: 1,
            explanation: "Sleeping money just sits idle without growing, while working money is invested to generate returns and create more wealth over time."
          },
          {
            id: 2,
            question: "How does inflation affect your savings?",
            options: [
              "It increases the value of your savings",
              "It has no effect on savings",
              "It decreases the purchasing power of your savings over time",
              "It only affects investments, not savings"
            ],
            correctAnswer: 2,
            explanation: "Inflation reduces the purchasing power of money over time. Even if your savings amount stays the same, you can buy fewer goods with it as prices increase."
          },
          {
            id: 3,
            question: "According to Warren Buffett's principle, what should smart investors focus on?",
            options: [
              "Buying the cheapest stocks available",
              "Following market trends and popular stocks",
              "Getting value for money, not just low prices",
              "Only investing in expensive, premium stocks"
            ],
            correctAnswer: 2,
            explanation: "Warren Buffett's principle 'Price is what you pay, Value is what you get' emphasizes focusing on the actual worth and benefit you receive, not just the price you pay."
          }
        ]
      }
    },
    {
      id: 5,
      title: "What is Value Investing?",
      hasQuiz: true,
      content: `# What is Value Investing?

## Definition

Value investing is a strategy where investors look for undervalued companies — stocks trading for less than their true worth — and buy them believing their price will rise as the market corrects itself.

You're not buying just because it's popular. You're buying because it's **worth more than it's selling for**.

## The Big Idea

The stock market doesn't always get prices right. Emotions like fear or hype cause **mispricing**. Value investors take advantage by spotting high-quality businesses when they're **on sale**.

It's like buying an iPhone worth ₹80,000 for just ₹50,000, or investing in a strong company that's temporarily cheap due to bad news or market panic.

## Core Principles of Value Investing

### 1. Intrinsic Value: The True Worth of a Stock

**Definition:** Intrinsic value is the actual value of a company based on its earnings, assets, and future potential — not just the stock price shown on screen.

Just because something is expensive doesn't mean it's valuable. And just because something is cheap doesn't mean it's worthless.

**How it's found:**
- Analysts use models like Discounted Cash Flow (DCF)
- Use key data: Earnings, growth rate, risk, debt

**Example:** A second-hand iPhone 13 being sold for ₹25,000 in mint condition with warranty. You know it's worth at least ₹35,000. That ₹35,000 is the **intrinsic value** — you spotted a great deal.

### 2. Margin of Safety: Your Safety Net

**Definition:** Margin of Safety means buying with a cushion — invest only when stock is significantly cheaper than its actual value.

**Formula:** Margin of Safety = Intrinsic Value – Market Price

**Why it matters:** It's like having a helmet before riding a bike — you're protected if things go wrong.

**Example:** You think a concert ticket is worth ₹2,000, but someone's selling it for ₹1,000. Even if the seat isn't perfect, you got a great deal — you had a **margin of safety**!

### 3. Buying Businesses, Not Just Stocks

Value investors don't just buy "stocks" — they buy a part of a real business.

**They ask:**
- Is the business profitable?
- Does it have loyal customers?
- Can it grow in the future?

**Key metrics to use:**
- Earnings per Share (EPS)
- Return on Equity (ROE)
- Debt-to-Equity (D/E)

**Example:** Would you rather buy a trending T-shirt brand or one with real loyal fans, steady profits, and no debt? A value investor picks the **reliable brand** — not just the flashy one!

## Warren Buffett's Famous Quote

**"Be fearful when others are greedy, and greedy when others are fearful."**

**Meaning:** Don't follow the crowd. Buy good companies when everyone is panicking and prices drop.

**Youth Take:** It's like shopping during clearance sales — you get the best deals when others aren't looking.

## Famous Value Investors and Their Success Stories

### Warren Buffett - The Oracle of Omaha
**Investment:** Bought Coca-Cola in 1988 when it was "expensive"
**Logic:** Strong brand, global presence, consistent profits
**Result:** Investment worth 20x+ today, receives $700M+ in dividends annually

**Key Lesson:** Sometimes paying fair price for excellent business beats buying poor business cheap

### Rakesh Jhunjhunwala - India's Warren Buffett
**Investment:** Bought Titan at ₹3 in 2002-2003
**Logic:** Growing middle class, jewelry demand, strong management
**Result:** Stock reached ₹3,000+ (1000x returns!)

**Key Lesson:** Identify long-term trends and bet on quality companies

## Value Investing Strategies for Beginners

### 1. The Benjamin Graham Approach (Classic Value)
**Criteria:**
- P/E ratio < 15
- P/B ratio < 1.5
- Debt-to-Equity < 0.5
- Consistent earnings growth

**Example Stocks (Historical):** ITC, ONGC, Coal India (when undervalued)

### 2. The Peter Lynch Approach (Growth at Reasonable Price)
**Criteria:**
- PEG ratio < 1 (P/E ÷ Growth Rate)
- Understand the business
- Strong competitive advantage

**Example:** Asian Paints - Growing market, strong brand, reasonable valuation

### 3. The Quality Value Approach
**Criteria:**
- High ROE (>15%)
- Low debt
- Consistent dividend payments
- Strong management

**Example:** HDFC Bank, TCS, Infosys (during market downturns)

## How to Spot Value Traps

**Value Trap:** Stock looks cheap but business is declining

### Red Flags to Avoid:
1. **Declining Industry:** Coal companies during green energy shift
2. **Obsolete Technology:** CD/DVD manufacturers during streaming era
3. **Regulatory Issues:** Companies facing government scrutiny
4. **Management Problems:** Frequent CEO changes, corporate governance issues

### Example of Value Trap:
**Vodafone Idea:** Looked cheap at ₹10 (from ₹150 high)
**Reality:** Massive debt, losing customers, spectrum payment issues
**Outcome:** Stock fell to ₹3-4, massive losses for "value" investors

## Building Your Value Portfolio

### Step 1: Screening (Use Screener.in)
**Filters to Apply:**
- Market Cap > ₹1,000 crores (avoid very small companies)
- P/E < 20
- ROE > 15%
- Debt-to-Equity < 1
- Sales growth > 10% (5-year average)

### Step 2: Fundamental Analysis
**Questions to Ask:**
- What does the company do? (Can you explain it to a friend?)
- Who are the competitors?
- What's the competitive advantage?
- Is the industry growing?
- Is management trustworthy?

### Step 3: Valuation
**Methods:**
- **P/E Comparison:** Compare with industry average
- **DCF Model:** Calculate intrinsic value (advanced)
- **Asset Value:** What are company's assets worth?

### Step 4: Portfolio Construction
**Diversification Rules:**
- Maximum 20% in any single stock
- Spread across 3-4 different sectors
- Mix of large-cap and mid-cap stocks
- Keep some cash for opportunities

## Value Investing Mistakes to Avoid

### 1. Falling Knife Syndrome
**Mistake:** Buying stock just because it's falling
**Example:** Buying Yes Bank at ₹100, ₹50, ₹20... it went to ₹5
**Lesson:** Understand WHY it's falling

### 2. Analysis Paralysis
**Mistake:** Over-analyzing and never buying
**Solution:** Set criteria and stick to them

### 3. Impatience
**Mistake:** Expecting quick results
**Reality:** Value investing requires 3-5 years minimum

### 4. Ignoring Quality
**Mistake:** Buying cheap junk
**Better:** Pay reasonable price for quality business

## Practical Value Investing Checklist

**Before Buying Any Stock:**

✅ **Business Understanding**
- Can I explain what this company does?
- Do I use their products/services?
- Is the industry growing?

✅ **Financial Health**
- Consistent profit growth (5+ years)
- Low debt (D/E < 1)
- High ROE (>15%)
- Strong cash flows

✅ **Valuation**
- P/E lower than industry average
- P/B ratio reasonable (<3)
- Dividend yield attractive (>2%)

✅ **Management Quality**
- Promoter holding >50%
- No major scandals
- Clear communication in annual reports

✅ **Market Position**
- Strong brand or competitive advantage
- Market leader or strong #2
- Difficult for competitors to replicate

## Value Investing Resources

### Books to Read:
- "The Intelligent Investor" by Benjamin Graham
- "One Up On Wall Street" by Peter Lynch
- "The Little Book of Value Investing" by Christopher Browne

### Indian Value Investors to Follow:
- Sanjay Bakshi (Professor, MDI Gurgaon)
- Basant Maheshwari (Marathon Trends PMS)
- Ramdeo Agarwal (Motilal Oswal)

### Websites for Research:
- Screener.in (Stock screening)
- Tijori Finance (Analysis)
- ValuePickr (Community discussions)

**Remember:** Value investing is not about buying cheap stocks, it's about buying good businesses at reasonable prices and holding them for the long term!`,
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the main principle of value investing?",
            options: [
              "Buying popular stocks that everyone is talking about",
              "Buying stocks that are trading for less than their true worth",
              "Buying the most expensive stocks in the market",
              "Following market trends and momentum"
            ],
            correctAnswer: 1,
            explanation: "Value investing focuses on finding undervalued companies - stocks trading below their intrinsic value - and buying them with the belief that the market will eventually recognize their true worth."
          },
          {
            id: 2,
            question: "What does 'Margin of Safety' mean in value investing?",
            options: [
              "The profit margin of a company",
              "The difference between intrinsic value and market price",
              "The safety rating of a stock",
              "The dividend yield of a stock"
            ],
            correctAnswer: 1,
            explanation: "Margin of Safety is the cushion between a stock's intrinsic value and its market price. It provides protection against errors in valuation and market volatility."
          },
          {
            id: 3,
            question: "According to Warren Buffett's quote, when should you be 'greedy' (buy more)?",
            options: [
              "When everyone else is buying and prices are rising",
              "When the market is at all-time highs",
              "When others are fearful and selling",
              "When stocks are trending on social media"
            ],
            correctAnswer: 2,
            explanation: "Buffett's principle suggests being contrarian - buy when others are fearful and selling (creating opportunities), and be cautious when others are greedy and buying everything."
          }
        ]
      }
    },
    {
      id: 6,
      title: "Finding Undervalued Stocks",
      hasQuiz: true,
      content: `# Finding Undervalued Stocks

## Step 1: Apply Your Basics

Use what you've learned:
- Understand terms like **P/E ratio, EPS, Market Cap, Book Value, D/E ratio, ROI**
- Recognize how **qualitative factors** (leadership, brand, business model) impact company value

## Step 2: Where to Look

### Use Stock Screener Tools:
- **Screener.in** (India-specific)
- **Tickertape**, **Simply Wall Street**, **Trendlyne**

**Use filters to find:**
- Low P/E stocks
- High ROE stocks
- Low D/E (debt) companies
- High EPS growth

### Read Investor Reports:
- **Annual Reports (AR)**: Management talks, revenue trends, risks
- **Investor Presentations** for future goals
- Follow expert investors (ValuePickr, Smartkarma, etc.)

## Step 3: Spot the Red Flags

Watch out for:
- High debt (D/E > 2)
- Low or falling profits (EPS drop)
- Frequent share dilution
- Poor corporate governance (check promoter holding, resignations, fraud news)

## Step 4: Look for Green Flags

Search for:
- Strong and consistent EPS growth
- Low P/E compared to peers (but not extremely low)
- High Return on Equity (ROE > 15%)
- Promoter holding > 50%
- Consistent dividend pay-outs

## Step 5: Use a Checklist

Create your own checklist before picking a stock:

| Criteria | Threshold | Met? |
|----------|-----------|------|
| P/E Ratio | < 20 (or less than industry avg) | ✅ |
| ROE | > 15% | ✅ |
| D/E Ratio | < 1 | ✅ |
| Promoter Holding | > 50% | ✅ |
| EPS Growth (5 Yrs) | Positive | ✅ |
| Dividend History | Consistent | ✅ |

## Step 6: Compare with Peers

Compare similar companies:
- ITC vs Godfrey Philips
- IRCTC vs Indian Hotels
- Infosys vs Wipro

Check P/E, EPS, ROE, and price growth over years.

## Step 7: Apply Qualitative Filters

Ask:
- Is this company easy to understand?
- Do they have a **brand moat** (e.g., IRCTC's monopoly)?
- Are they solving a long-term problem?
- Is the leadership trustworthy and visionary?

## Example: ITC (during early 2020–2021)

**Market Sentiment:** People joked "ITC never moves".

**But smart investors saw:**
- **P/E Ratio**: Very low (~13–14) vs Nifty avg (~25)
- **Dividend Yield**: High (~5–6%)
- **ROE**: ~23%
- **Diversified Business**: Cigarettes, FMCG, Hotels, Paper
- **Zero Debt**
- **Strong Promoter Holding**

**Result:** Stock went from ₹160 to ₹450+ in 3 years. That's the power of spotting **value before the hype**.`,
      quiz: {
        questions: [
          {
            id: 1,
            question: "Which of the following is considered a RED FLAG when analyzing stocks?",
            options: [
              "High Return on Equity (ROE > 15%)",
              "Consistent dividend payments",
              "High debt-to-equity ratio (D/E > 2)",
              "Strong promoter holding (> 50%)"
            ],
            correctAnswer: 2,
            explanation: "High debt-to-equity ratio (D/E > 2) is a red flag as it indicates the company is heavily leveraged and may face financial difficulties if profits decline."
          },
          {
            id: 2,
            question: "What is a good threshold for Return on Equity (ROE) when looking for quality stocks?",
            options: [
              "ROE > 5%",
              "ROE > 10%",
              "ROE > 15%",
              "ROE > 25%"
            ],
            correctAnswer: 2,
            explanation: "ROE > 15% is generally considered a good threshold as it indicates the company is efficiently generating profits from shareholders' equity."
          },
          {
            id: 3,
            question: "In the ITC example, what made it an attractive value investment in 2020-2021?",
            options: [
              "It was trending on social media",
              "It had very high P/E ratio compared to market",
              "It had low P/E, high dividend yield, zero debt, and strong fundamentals",
              "It was a new IPO with high growth potential"
            ],
            correctAnswer: 2,
            explanation: "ITC was attractive because it had low P/E ratio (~13-14 vs market avg ~25), high dividend yield (~5-6%), zero debt, strong ROE (~23%), and diversified business - classic value investing criteria."
          }
        ]
      }
    },
    {
      id: 7,
      title: "Advanced Mistakes to Avoid",
      hasQuiz: true,
      content: `# Advanced Mistakes to Avoid in Stock Market

## 1. Chasing Trends (FOMO)

**Definition:** Jumping into stocks just because everyone is talking about it - Fear Of Missing Out.

**Why it's risky:** You're investing based on emotion, not research. Once hype fades, prices usually crash.

**Example:** Buying Dogecoin at ₹60 after Elon Musk tweets, only to see it crash to ₹5 a week later.

**Lesson:** Don't buy just because it's trending. Do your own research (DYOR).

## 2. Over-Diversifying

**Definition:** Spreading money across too many stocks thinking it reduces risk.

**Why it's bad:** Makes it hard to track investments or build conviction in any company.

**Example:** Investing ₹500 each in 20 random companies from different sectors without understanding what they do.

**Better strategy:** Focus on 5–10 strong businesses you understand.

## 3. Ignoring Red Flags

**Definition:** Overlooking warning signs just because stock is going up.

**Why it's dangerous:** Red flags like high debt, bad management, fake profits signal deeper problems.

**Example:** Company gives bumper returns in 6 months, but you ignore that promoter pledged 80% shares and company has zero profits. Later it collapses.

**Always check:** Financials, promoter behavior, and news.

## 4. Trying to Time the Market

**Definition:** Trying to guess perfect time to buy low and sell high.

**Why it's unrealistic:** Even professionals can't consistently time the market.

**Example:** Waiting for Sensex to crash to 50,000 but it never comes down. Meanwhile, money sits idle.

**Better strategy:** Stick to SIPs and disciplined investing.

## 5. Selling Too Early

**Definition:** Selling investments for small profit without letting them grow.

**Why it's costly:** You miss out on compound growth and multibagger returns.

**Example:** Someone invested in Infosys in 1990s and sold after it doubled in 1 year. If held for 10-20 years, returns could've been 10,000%+ due to compounding.

**Tip:** Be patient and think long-term with fundamentally strong companies.

## Summary of Pro Tips

| ❌ Mistake | ⚠️ Why It's Bad | ✅ Pro Tip |
|------------|-----------------|------------|
| Chasing trends | Buy at peak prices | Do your own research |
| Over-diversifying | No focus = no gains | Focus on 5–10 strong bets |
| Ignoring red flags | Risk of fraud/failure | Read financials & news |
| Timing the market | Miss opportunities | Stick to SIPs/strategy |
| Selling too early | Miss compounding | Be patient & think long-term |`,
      quiz: {
        questions: [
          {
            id: 1,
            question: "What is the main problem with 'over-diversifying' your portfolio?",
            options: [
              "It increases your risk significantly",
              "It makes it hard to track investments and build conviction",
              "It guarantees losses in the market",
              "It's only suitable for professional investors"
            ],
            correctAnswer: 1,
            explanation: "Over-diversifying makes it difficult to track your investments properly and build conviction in any particular company. It also dilutes the impact of your best-performing stocks."
          },
          {
            id: 2,
            question: "Why is 'trying to time the market' considered a mistake?",
            options: [
              "It's only for day traders",
              "It requires too much money",
              "Even professionals can't consistently predict market timing",
              "It's illegal in most countries"
            ],
            correctAnswer: 2,
            explanation: "Market timing is extremely difficult and even professional investors struggle to consistently predict market movements. It often leads to missed opportunities and emotional decision-making."
          },
          {
            id: 3,
            question: "What lesson does the Infosys example teach about selling too early?",
            options: [
              "Always sell when you double your money",
              "Technology stocks are too risky",
              "Patience and long-term holding can lead to massive compound returns",
              "It's better to invest in mutual funds than individual stocks"
            ],
            correctAnswer: 2,
            explanation: "The Infosys example shows that selling after a quick double (100% return) meant missing out on potential 10,000%+ returns over 10-20 years due to the power of compounding in quality businesses."
          }
        ]
      }
    },
    {
      id: 8,
      title: "Quantitative Analysis",
      hasQuiz: true,
      content: `# Quantitative Analysis

Quantitative Analysis is a method used in finance that relies on math and statistics to understand and predict the value of assets like stocks and mutual funds.

## These analysis helps decide:

1. When to Buy?
2. When to Sell?
3. How risky a Trade is?
4. How much profit they might make?

## Key Financial Ratios

### 1. P/E Ratio: Price to Earnings Ratio

**Definition:** Measure of how much an investor is willing to pay for a share compared to the profitability of underlying business.

**Formula:** P/E ratio = Price of one share (CMP) / Earnings per share (EPS)

**Example:** Shop A costs ₹10 lakhs with ₹2 lakhs yearly profit = P/E of 5. Shop B costs ₹20 lakhs with ₹2 lakhs profit = P/E of 10. Lower P/E = cheaper deal, Higher P/E = market expects more growth.

### 2. Earnings per Share (EPS)

**Definition:** EPS tells you how much profit a company makes for every single share.

**Formula:** EPS = Total Net Profit / Total Number of Shares

**Example:** Donut Co. made ₹10,00,000 profit with 1,00,000 shares. EPS = ₹10. Each share earned ₹10 profit this year.

### 3. Market Capitalization

**Definition:** Total market value of all company's outstanding shares.

**Formula:** Market Cap = Total shares × Current market price per share

**Example:** Burger Bros has 10,00,000 shares at ₹200 each = Market Cap of ₹20 Crores.

### 4. Book Value

**Definition:** Total value of company's assets minus its liabilities.

**Formula:** Book Value = Total Assets – Total Liabilities

**Example:** Company has ₹100 Crores assets and ₹20 Crores debt = Book Value of ₹80 Crores.

### 5. Debt-to-Equity Ratio (D/E)

**Definition:** Shows how much money company borrowed compared to shareholders' investment.

**Formula:** D/E Ratio = Total Debt / Shareholder's Equity

**Example:** Food truck with ₹5 lakhs loan and ₹2 lakhs own money = D/E of 2.5.

### 6. Return on Investment (ROI)

**Definition:** Shows how much profit you made compared to how much you spent.

**Formula:** ROI = (Gain – Cost) ÷ Cost × 100

**Example:** Invest ₹10,000 in burger stall, earn ₹13,000 total = 30% ROI.

### 7. Promoter Holding

**Definition:** Percentage of shares owned by company's founders/promoters.

**Example:** Pizza Boss Ltd has 1,00,000 shares, promoter owns 60,000 = 60% promoter holding.

### 8. Dividend Yield

**Definition:** How much dividend company pays yearly compared to stock price.

**Formula:** Dividend Yield = (Annual Dividend ÷ Share Price) × 100

**Example:** Orange Ltd share at ₹200 pays ₹10 dividend = 5% dividend yield.

## Summary

These ratios help you analyze whether a stock is:
- Fairly priced (P/E, P/B ratios)
- Profitable (EPS, ROI)
- Financially stable (D/E ratio, Book Value)
- Well-managed (Promoter Holding)
- Income-generating (Dividend Yield)`,
      quiz: {
        questions: [
          {
            id: 1,
            question: "If a company has a P/E ratio of 15 and another has a P/E ratio of 25, what does this generally indicate?",
            options: [
              "The company with P/E 25 is definitely better",
              "The company with P/E 15 is cheaper relative to its earnings",
              "Both companies have the same value",
              "P/E ratio doesn't matter for investment decisions"
            ],
            correctAnswer: 1,
            explanation: "A lower P/E ratio generally indicates that you're paying less for each rupee of the company's earnings, making it relatively cheaper. However, higher P/E might indicate higher growth expectations."
          },
          {
            id: 2,
            question: "What does a Debt-to-Equity ratio of 2.5 mean?",
            options: [
              "The company has 2.5 times more equity than debt",
              "The company is using ₹2.5 of borrowed money for every ₹1 of own money",
              "The company's profit margin is 2.5%",
              "The company pays 2.5% dividend"
            ],
            correctAnswer: 1,
            explanation: "A D/E ratio of 2.5 means the company is using ₹2.5 of debt (borrowed money) for every ₹1 of equity (shareholders' money), indicating high leverage."
          },
          {
            id: 3,
            question: "If you invest ₹5,000 and after one year your investment is worth ₹6,500, what is your ROI?",
            options: [
              "15%",
              "25%",
              "30%",
              "35%"
            ],
            correctAnswer: 2,
            explanation: "ROI = (Gain - Cost) ÷ Cost × 100 = (6,500 - 5,000) ÷ 5,000 × 100 = 1,500 ÷ 5,000 × 100 = 30%"
          }
        ]
      }
    }
  ];

  const showRegister = () => setCurrentPage('register');
  const showHome = () => setCurrentPage('home');
  const showModules = () => setCurrentPage('modules');

  const nextModule = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
      setShowQuiz(false);
      // Scroll to top when moving to next module
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const startQuiz = () => {
    setShowQuiz(true);
    // Scroll to top when starting quiz
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const completeModule = () => {
    if (!completedModules.includes(modules[currentModuleIndex].id)) {
      setCompletedModules([...completedModules, modules[currentModuleIndex].id]);
    }
    if (currentModuleIndex < modules.length - 1) {
      nextModule();
    } else {
      // All modules completed - show completion page
      setCurrentPage('completion');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Function to format text with bold
  const formatTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.substring(2, part.length - 2)}</strong>;
      }
      return part;
    });
  };

// Course Completion Component
const CompletionPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  return (
    <div className="completion-container">
      <div className="completion-card">
        <div className="completion-trophy">🏆</div>

        <h1 className="completion-title">Congratulations!</h1>
        <p className="completion-subtitle">
          You've successfully completed the Zvestors Financial Literacy Course!
        </p>

        <div className="completion-stats">
          <div className="completion-stat">
            <div className="completion-stat-number">8</div>
            <div className="completion-stat-label">Modules Completed</div>
          </div>
          <div className="completion-stat">
            <div className="completion-stat-number">5</div>
            <div className="completion-stat-label">Quizzes Passed</div>
          </div>
          <div className="completion-stat">
            <div className="completion-stat-number">100%</div>
            <div className="completion-stat-label">Course Progress</div>
          </div>
        </div>

        <div className="completion-message">
          <p>
            🎉 You've taken the first major step towards financial independence!
            You now have the foundational knowledge to start your investment journey
            and make informed financial decisions.
          </p>
        </div>

        <div className="completion-next-steps">
          <h4>🚀 What's Next?</h4>
          <ul>
            <li>Open your first Demat account and start investing</li>
            <li>Apply the value investing principles you've learned</li>
            <li>Start building your emergency fund</li>
            <li>Continue learning with advanced modules (coming soon!)</li>
            <li>Join our community of young investors</li>
          </ul>
        </div>

        <div className="completion-message" style={{background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', marginTop: '30px'}}>
          <p>
            📚 <strong>More Advanced Modules Coming Soon!</strong><br/>
            • Technical Analysis & Chart Reading<br/>
            • Mutual Funds & ETFs Deep Dive<br/>
            • Cryptocurrency Basics<br/>
            • Tax Planning Strategies<br/>
            • Real Estate Investment
          </p>
        </div>

        <div className="completion-actions">
          <button className="primary-button" onClick={onBackToHome}>
            🏠 Back to Home
          </button>
          <button className="secondary-button" onClick={() => window.open('https://github.com/krithick-ab/Zvest', '_blank')}>
            ⭐ Star on GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

// Quiz Component
const QuizComponent: React.FC<{
  quiz: Quiz;
  onComplete: () => void;
  onBack: () => void;
}> = ({ quiz, onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowExplanation(false);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleSubmitAnswer = () => {
    setShowExplanation(true);
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === quiz.questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / quiz.questions.length) * 100);
    const isExcellent = score === quiz.questions.length;
    const isGood = score >= quiz.questions.length * 0.7;

    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="quiz-results">
            <h2>
              {isExcellent ? '🎉' : isGood ? '👏' : '💪'} Quiz Complete!
            </h2>

            <div className="score-display">
              <div className="score-number">{score}/{quiz.questions.length}</div>
              <p>You scored {percentage}%</p>
            </div>

            <div className="encouragement">
              <p>
                {isExcellent ?
                  "🌟 Outstanding! You've completely mastered this module! Your understanding of financial concepts is excellent." :
                  isGood ?
                  "🎯 Great job! You have a solid grasp of the concepts. Keep up the excellent work!" :
                  "📚 Good effort! Learning is a journey. You're building your financial knowledge step by step!"}
              </p>
            </div>

            {!isExcellent && (
              <div className="next-module-preview">
                <h4>💡 Quick Tip:</h4>
                <p>Consider reviewing the key concepts from this module. The upcoming modules will build on these foundations!</p>
              </div>
            )}
          </div>

          <button className="primary-button" onClick={onComplete}>
            {isExcellent ? '🚀 Continue to Next Module' : '➡️ Proceed to Next Module'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <h2>Quiz - Question {currentQuestionIndex + 1} of {quiz.questions.length}</h2>
          <button className="back-button" onClick={onBack}>← Back to Module</button>
        </div>

        <div className="question-section">
          <h3>{currentQuestion.question}</h3>

          <div className="options-list">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`option ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
                onClick={() => handleAnswerSelect(index)}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </div>
            ))}
          </div>

          {showExplanation && (
            <div className={`explanation ${selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? 'correct' : 'incorrect'}`}>
              <h4>
                {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ?
                  '✅ Correct!' : '❌ Incorrect'}
              </h4>
              <p><strong>Correct Answer:</strong> {String.fromCharCode(65 + currentQuestion.correctAnswer)}) {currentQuestion.options[currentQuestion.correctAnswer]}</p>
              <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            {!showExplanation ? (
              <button
                className="primary-button"
                onClick={handleSubmitAnswer}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
              >
                Submit Answer
              </button>
            ) : (
              <button className="primary-button" onClick={handleNext}>
                {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

  return (
    <div className="App">
      {/* Navigation */}
      {currentPage === 'home' && (
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <h2>Zvestors</h2>
            </div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#contact">Contact</a>
              <button className="cta-button" onClick={showRegister}>Get Started</button>
            </div>
          </div>
        </nav>
      )}

      {/* Home Page Content */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-container">
              <div className="hero-content">
                <h1>Master Your Financial Future</h1>
                <p className="hero-subtitle">
                  Empowering Gen Z students with essential financial literacy through
                  interactive modules and practical learning experiences.
                </p>
                <div className="hero-buttons">
                  <button className="primary-button" onClick={showModules}>Start Learning</button>
                  <button className="secondary-button">Learn More</button>
                </div>
              </div>
              <div className="hero-image">
                <div className="placeholder-chart">
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                  <div className="chart-bar" style={{height: '45%'}}></div>
                  <div className="chart-bar" style={{height: '90%'}}></div>
                  <div className="chart-bar" style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="features">
            <div className="container">
              <h2>Why Choose Zvestors?</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">📚</div>
                  <h3>Interactive Modules</h3>
                  <p>Engaging content designed specifically for Gen Z learning preferences</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🎯</div>
                  <h3>Practical Skills</h3>
                  <p>Real-world financial scenarios and hands-on learning experiences</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📈</div>
                  <h3>Track Progress</h3>
                  <p>Monitor your learning journey and celebrate achievements</p>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="about">
            <div className="container">
              <div className="about-content">
                <div className="about-text">
                  <h2>Building Financial Confidence</h2>
                  <p>
                    Zvestors is a comprehensive financial literacy platform designed to bridge
                    the knowledge gap for Gen Z students. Our carefully crafted modules cover
                    everything from basic budgeting to investment strategies.
                  </p>
                  <ul className="about-features">
                    <li>✓ Comprehensive curriculum covering all financial basics</li>
                    <li>✓ Interactive quizzes and practical exercises</li>
                    <li>✓ Progress tracking and achievement system</li>
                    <li>✓ Mobile-friendly design for learning on the go</li>
                  </ul>
                </div>
                <div className="about-stats">
                  <div className="stat">
                    <h3>10+</h3>
                    <p>Learning Modules</p>
                  </div>
                  <div className="stat">
                    <h3>100%</h3>
                    <p>Free Access</p>
                  </div>
                  <div className="stat">
                    <h3>24/7</h3>
                    <p>Available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <div className="container">
              <h2>Ready to Start Your Financial Journey?</h2>
              <p>Join thousands of students already building their financial future</p>
              <button className="primary-button large" onClick={showModules}>Get Started Today</button>
            </div>
          </section>

          {/* Footer */}
          <footer className="footer">
            <div className="container">
              <div className="footer-content">
                <div className="footer-brand">
                  <h3>Zvestors</h3>
                  <p>Empowering financial literacy for the next generation</p>
                </div>
                <div className="footer-links">
                  <div className="footer-column">
                    <h4>Platform</h4>
                    <a href="#modules">Modules</a>
                    <a href="#progress">Progress</a>
                    <a href="#resources">Resources</a>
                  </div>
                  <div className="footer-column">
                    <h4>Support</h4>
                    <a href="#help">Help Center</a>
                    <a href="#contact">Contact</a>
                    <a href="#faq">FAQ</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; 2024 Zvestors. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Modules Page Content */}
      {currentPage === 'modules' && (
        <div className="modules-container">
          {!showQuiz ? (
            <div className="module-content">
              <div className="module-header">
                <button className="back-button" onClick={showHome}>← Back to Home</button>
                <h1>Module {modules[currentModuleIndex].id}: {modules[currentModuleIndex].title}</h1>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: `${((currentModuleIndex + 1) / modules.length) * 100}%`}}></div>
                </div>
                <p>Module {currentModuleIndex + 1} of {modules.length}</p>
              </div>

              <div className="module-text">
                {modules[currentModuleIndex].content.split('\n').map((line, index) => {
                  if (line.startsWith('# ')) {
                    return <h1 key={index}>{line.substring(2)}</h1>;
                  } else if (line.startsWith('## ')) {
                    return <h2 key={index}>{line.substring(3)}</h2>;
                  } else if (line.startsWith('### ')) {
                    return <h3 key={index}>{line.substring(4)}</h3>;
                  } else if (line.startsWith('- ')) {
                    return <li key={index}>{formatTextWithBold(line.substring(2))}</li>;
                  } else if (line.trim() === '') {
                    return <br key={index} />;
                  } else {
                    return <p key={index}>{formatTextWithBold(line)}</p>;
                  }
                })}
              </div>

              <div className="module-actions">
                {modules[currentModuleIndex].hasQuiz ? (
                  <button className="primary-button" onClick={startQuiz}>
                    Take Quiz
                  </button>
                ) : (
                  <button className="primary-button" onClick={completeModule}>
                    {currentModuleIndex < modules.length - 1 ? 'Next Module' : 'Complete Course'}
                  </button>
                )}
              </div>
            </div>
          ) : (
            <QuizComponent
              quiz={modules[currentModuleIndex].quiz!}
              onComplete={completeModule}
              onBack={() => setShowQuiz(false)}
            />
          )}
        </div>
      )}

      {/* Register Page Content */}
      {currentPage === 'register' && (
        <RegisterPage onBackToHome={showHome} />
      )}

      {/* Course Completion Page */}
      {currentPage === 'completion' && (
        <CompletionPage onBackToHome={showHome} />
      )}
    </div>
  );
}

// Register Page Component (inline to avoid import issues)
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC<{ onBackToHome: () => void }> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      console.log('Registration data:', {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        onBackToHome();
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="register-container">
        <div className="register-card">
          <div className="success-message">
            <div className="success-icon">✅</div>
            <h2>Registration Successful!</h2>
            <p>Welcome to Zvestors, {formData.name}!</p>
            <p>You can now start your financial literacy journey.</p>
            <button className="primary-button" onClick={onBackToHome}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>Join Zvestors</h1>
          <p>Start your financial literacy journey today</p>
        </div>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="Enter your email address"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? 'error' : ''}
              placeholder="Create a password (min. 6 characters)"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={errors.confirmPassword ? 'error' : ''}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          </div>

          <button type="submit" className="register-button">
            Create Account
          </button>
        </form>

        <div className="register-footer">
          <p>Already have an account? <button onClick={onBackToHome} style={{background: 'none', border: 'none', color: '#22c55e', textDecoration: 'underline', cursor: 'pointer'}}>Back to Home</button></p>
        </div>
      </div>
    </div>
  );
};

export default App;
