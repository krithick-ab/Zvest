interface Quiz {
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
  }[];
}

interface Module {
  id: number;
  title: string;
  content: string;
  hasQuiz: boolean;
  quiz?: Quiz;
  image?: string;
}

export const modules: Module[] = [
  // Module 0: 4.txt - Your money: sleeping or working?
  {
    id: 0,
    title: "Your money: sleeping or working?",
    hasQuiz: true,
    image: "/images/types of investment.png",
    content: `# Your Money: Sleeping or Working?

## First, Let's Think:
When you earn money (salary, pocket money, profits), what do you do with it?
- Keep it in your savings account?
- Store it in a piggy bank?
- Hide it in your drawer?

If so… **Your money is safe, BUT it's sleeping.**

## What Does "Sleeping Money" Mean?
It means your money is **just sitting there**, not **growing** or **doing anything useful** for you.

## Example: Sleeping Money (Lazy Money)
Let's say your friend **Rahul** got ₹5,000 for his birthday.
He:
- Puts ₹4,000 in his savings account
- Buys pizza with ₹1,000
- 1 year later — the ₹4,000 is still ₹4,000 (maybe ₹4,040 if lucky)

His money is **doing nothing**. It's just **sleeping** in the bank like it's on a vacation.

## Now, What is "Working Money"?
**Working money** is money that is put into:
- **Investments** (like stocks, mutual funds, etc.)
- **Businesses**
- **Assets that grow in value**

When your money is working, it **creates more money for you** — even when you're sleeping!

## Example: Working Money (Smart Money)
Now imagine his friend **Priya** also got ₹5,000.
But instead of letting it sleep:
- She invests ₹3,000 in a **mutual fund or stock**
- She leaves ₹1,000 in savings
- She uses ₹1,000 for coffee and a Netflix plan

1 year later, her ₹3,000 investment has become **₹3,600**

Her money is **working part-time**, like a Swiggy delivery guy, and bringing her **extra cash**.

## Final Summary:
> You scroll daily, binge watch daily —
> Now it's time to make your **money hustle daily** too.

Even if you start with ₹100/month, you're telling your money: **"Don't sleep. Go out and earn me more!"**

## What is Savings?
**Definition:** Savings is the money you **keep aside** (not spend) for future use — usually in a bank account or at home.

## How Savings is Affected by Inflation
**Inflation** means prices go up over time. So, the **value of your saved money drops** slowly because you can buy less with it.

**Example:** In 2015, a chocolate bar was ₹10. In 2025, it's ₹20. If you had saved ₹100 in 2015, you could buy 10 bars. But in 2025, with that same ₹100, you get only 5. Your savings **lost value** — even though the number ₹100 didn't change.

## What is Investment?
**Definition:** Investment is when you **use your money to earn more money** — by putting it into stocks, mutual funds, real estate, or businesses.

## Types Of Investments

### 1. Stocks (Equity Shares)
A **stock** represents a **share in the ownership of a company**. When you buy a stock, you become a **partial owner (shareholder)** of that company.

### 2. Mutual Funds
A **mutual fund** is a **pooled investment vehicle** where money from many investors is collected and managed by a professional fund manager.

### 3. Bonds
A **bond** is a **fixed-income instrument** that represents a **loan made by an investor to a borrower**, typically a corporation or government.

### 4. Gold
**Gold** is a **physical or digital asset** that holds intrinsic value and has been used as a store of wealth for centuries.

### 5. Savings Account
The money you are putting in your bank savings account pays you interest at the rate of 6 to 7% annually.

## Price is what you pay.. Value is what you get
*- Warren Buffett*

**The price** is just the amount of money you pay for something.
**The value** is the real worth or benefit you get from it.

## Stock Market Example
Two stocks:
- **Company X**: Stock price = ₹100, Earnings per share (EPS) = ₹2 → High price, **low profit = low value**
- **Company Y**: Stock price = ₹50, EPS = ₹5 → Low price, **high profit = high value**

Company Y gives **better value for money**, even though it's cheaper.

### "Smart investors focus on value, not just price."
Because **real wealth** is built by paying the **right price for maximum benefit**.`,
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

  // Module 1: 1 intro.txt - Introduction to the Stock Market
  {
    id: 1,
    title: "Introduction to the Stock Market",
    hasQuiz: false,
    content: `# Introduction to Stock Market

The stock market is where individuals and institutions can trade equity securities through stock exchanges like NSE or BSE.

## A Brief History of the Stock Market in India
- **1875** – Bombay Stock Exchange (BSE) founded
- **1992** – NSE launched, bringing in electronic trading
- **1992** – SEBI established to regulate the market
- **2000** – Introduction of online trading for retail investors

## What Is a Share?
A **share** represents fractional ownership in a company. When you purchase shares, you become a **shareholder**.

## Why Do Companies Issue Shares?
Companies issue shares for **capital formation** - raising funds for expansion, research and development, or asset acquisition.

## Market Participants
- **Retail Investors**: Individual investors
- **Institutional Investors**: Mutual funds, insurance firms
- **Stock Brokers**: Registered intermediaries
- **SEBI**: The regulatory authority

## How Does Buying/Selling Work?
1. **Opening Accounts**: Demat Account + Trading Account
2. **Placing Orders**: Market orders vs Limit orders
3. **Order Matching**: Exchange matches buy/sell orders
4. **Settlement**: T+1 settlement

## Basic Terms Every Beginner Must Know
- **IPO**: When a private company offers shares to public
- **Sensex/Nifty**: Major stock indices
- **Dividend**: Company's profit shared with shareholders
- **Market Cap**: Total company value
- **Bull/Bear Market**: Rising/Falling market trends
- **P/E Ratio**: Price-to-Earnings ratio
- **Volatility**: Price movement up and down

## Investment vs Trading vs Speculation

### Investment (Long-term: 5+ years)
- Buy quality companies and hold
- Focus on business fundamentals
- Lower risk, steady returns

### Trading (Short-term: Days to months)
- Buy and sell frequently
- Focus on price movements
- Higher risk, potential for quick profits

### Speculation (Very short-term)
- Gambling on price movements
- Very high risk, can lose everything

## Getting Started Checklist
✅ Learn the basics
✅ Open Demat + Trading account
✅ Start with small amounts
✅ Choose 2-3 good companies
✅ Read financial news
✅ Track investments monthly, not daily

Remember: **Time in the market beats timing the market!**`
  },

  // Module 2: 5.txt - What Is Value Investing?
  {
    id: 2,
    title: "What Is Value Investing?",
    hasQuiz: false,
    image: "/images/value investing.png",
    content: `# What is Value Investing?

## Definition
Value investing is a strategy where you buy stocks that are **trading for less than their true worth**. It's like finding a designer jacket on sale for 50% off.

The stock market doesn't always get prices right. Emotions like fear or hype cause **mispricing**. Value investors take advantage by spotting high-quality businesses when they're **on sale**.

## Core Principles of Value Investing

### 1. Intrinsic Value: The True Worth of a Stock
**Definition:** Intrinsic value is the actual value of a company based on its earnings, assets, and future potential — not just the stock price.

### 2. Margin of Safety: Your Safety Net
**Definition:** Margin of Safety means buying with a cushion — invest only when stock is significantly cheaper than its actual value.

**Formula:** Margin of Safety = Intrinsic Value – Market Price

### 3. Buying Businesses, Not Just Stocks
Value investors don't just buy "stocks" — they buy a part of a real business.

**They ask:**
- Is the business profitable?
- Does it have loyal customers?
- Can it grow in the future?

## Warren Buffett's Famous Quote
**"Be fearful when others are greedy, and greedy when others are fearful."**

**What it means:** Buy when everyone is panicking and selling (market crash), and be cautious when everyone is buying (market bubble).

## Famous Value Investors and Their Success Stories

### Warren Buffett - The Oracle of Omaha
**Investment:** Bought Coca-Cola in 1988
**Logic:** Strong brand, global presence, consistent profits
**Result:** Investment worth 20x+ today

### Rakesh Jhunjhunwala - India's Warren Buffett
**Investment:** Bought Titan Company in early 2000s at ₹3-5 per share
**Logic:** Growing middle class, jewelry demand, strong management
**Result:** Stock reached ₹3000+ (600x returns!)

## Value Traps: What to Avoid
Not every "cheap" stock is a good deal. Some are **value traps** — stocks that look cheap but keep falling.

### Common Value Traps:
1. **Declining Industry:** Coal companies during green energy shift
2. **Obsolete Technology:** CD/DVD manufacturers during streaming era
3. **Regulatory Issues:** Companies facing government scrutiny
4. **Management Problems:** Frequent CEO changes

## Value Investing Checklist
✅ **Business Understanding**
- Can I explain what this company does?
- Do I use their products/services?

✅ **Financial Health**
- Consistent profit growth (5+ years)
- Low debt (D/E < 1)
- High ROE (>15%)

✅ **Valuation**
- P/E < Industry average
- P/B < 3
- Dividend yield decent

✅ **Management Quality**
- Honest communication
- Good capital allocation
- Reasonable compensation

✅ **Margin of Safety**
- Buying at 20-30% discount to fair value

**Remember:** Value investing is not about buying cheap stocks, it's about buying good businesses at reasonable prices and holding them for the long term!`
  },

  // Module 3: 8.txt - How to Read a Business?
  {
    id: 3,
    title: "How to Read a Business?",
    hasQuiz: true,
    image: "/images/qualitative analysis.png",
    content: `# How to Read a Business?

## Understanding Business Models

### What is a Business Model?
A business model is how a company makes money. It's the strategy they use to generate revenue and profit.

### Types of Business Models:

#### 1. Product-Based Business
- **Example:** Apple (sells iPhones, MacBooks)
- **Revenue:** One-time sales
- **Pros:** High margins, brand loyalty
- **Cons:** Need constant innovation

#### 2. Service-Based Business
- **Example:** TCS, Infosys (IT services)
- **Revenue:** Project fees, hourly rates
- **Pros:** Recurring revenue, scalable
- **Cons:** People-dependent

#### 3. Subscription-Based Business
- **Example:** Netflix, Spotify
- **Revenue:** Monthly/yearly subscriptions
- **Pros:** Predictable revenue, customer retention
- **Cons:** High customer acquisition cost

#### 4. Platform Business
- **Example:** Amazon, Flipkart (marketplace)
- **Revenue:** Commission on transactions
- **Pros:** Network effects, scalable
- **Cons:** Need critical mass

## Key Questions to Ask About Any Business:

### 1. What Problem Does It Solve?
- Is there a real need for this product/service?
- How big is the market?
- Is the problem growing or shrinking?

### 2. How Does It Make Money?
- What's the revenue model?
- Are revenues growing consistently?
- What are the profit margins?

### 3. What's the Competitive Advantage?
- Why would customers choose this over competitors?
- Is this advantage sustainable?
- How easy is it for competitors to copy?

### 4. Who Are the Customers?
- Who buys their products/services?
- How loyal are the customers?
- Is the customer base growing?

### 5. What Are the Risks?
- What could go wrong?
- How dependent is the business on key factors?
- What are the regulatory risks?

## Reading Annual Reports - The Basics

### Where to Find Annual Reports:
- Company's official website (Investor Relations section)
- BSE/NSE websites
- SEBI website

### Key Sections to Focus On:

#### 1. Management Discussion & Analysis (MD&A)
- Management's view of business performance
- Future outlook and strategy
- Key challenges and opportunities

#### 2. Financial Statements
- **Income Statement:** Revenue, expenses, profit
- **Balance Sheet:** Assets, liabilities, equity
- **Cash Flow Statement:** Cash in and out

#### 3. Notes to Financial Statements
- Accounting policies
- Detailed breakdowns
- Contingent liabilities

### Red Flags to Watch For:
- Frequent changes in auditors
- Qualified audit opinions
- High related party transactions
- Declining cash flows despite profits
- High debt levels
- Frequent one-time charges

## Industry Analysis

### Understanding Industry Dynamics:

#### Growth Industries
- **Examples:** Technology, Healthcare, Renewable Energy
- **Characteristics:** High growth, innovation-driven
- **Risks:** High competition, regulatory changes

#### Mature Industries
- **Examples:** Banking, FMCG, Utilities
- **Characteristics:** Stable growth, established players
- **Risks:** Limited growth, disruption threats

#### Cyclical Industries
- **Examples:** Auto, Steel, Real Estate
- **Characteristics:** Performance tied to economic cycles
- **Risks:** Volatility, timing challenges

### Porter's Five Forces Analysis:

#### 1. Competitive Rivalry
- How intense is competition?
- Are there many players?
- Is it a price war or value war?

#### 2. Supplier Power
- How much control do suppliers have?
- Are there many suppliers or few?
- Can the company switch suppliers easily?

#### 3. Buyer Power
- How much control do customers have?
- Are there many customers or few big ones?
- Can customers easily switch?

#### 4. Threat of New Entrants
- How easy is it for new companies to enter?
- What are the barriers to entry?
- Are there regulatory hurdles?

#### 5. Threat of Substitutes
- Are there alternative products/services?
- How likely are customers to switch?
- What's the cost of switching?

## Management Quality Assessment

### What to Look For:

#### 1. Track Record
- How long have they been with the company?
- What's their past performance?
- Have they delivered on promises?

#### 2. Communication
- Are they transparent in communications?
- Do they explain setbacks honestly?
- Are their forecasts realistic?

#### 3. Capital Allocation
- How do they use company's money?
- Do they invest in growth or return to shareholders?
- Are acquisitions value-creating?

#### 4. Skin in the Game
- Do promoters own significant stake?
- Are they buying or selling shares?
- Is their compensation reasonable?

### Red Flags in Management:
- Frequent management changes
- Overly optimistic guidance
- Poor corporate governance
- High management compensation vs performance
- Related party transactions

## Practical Example: Analyzing Asian Paints

### Business Model:
- **What:** Paint manufacturing and distribution
- **Revenue:** Product sales to dealers and direct customers
- **Advantage:** Strong brand, distribution network, innovation

### Financial Health:
- **Revenue Growth:** Consistent 10-15% annually
- **Profit Margins:** High (15-20% net margin)
- **Debt:** Very low debt levels
- **ROE:** Consistently above 25%

### Industry Position:
- **Market Share:** #1 in decorative paints (~50%)
- **Competition:** Berger Paints, Nerolac, Dulux
- **Moat:** Brand loyalty, distribution reach

### Management:
- **Promoter Holding:** ~53% (stable)
- **Track Record:** Consistent performance over decades
- **Innovation:** Regular new product launches

### Investment Thesis:
- Growing real estate sector
- Increasing per capita paint consumption
- Rural market penetration opportunity
- Strong competitive position

This is how you systematically analyze any business before investing!`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is the main advantage of a subscription-based business model?",
          options: [
            "One-time high revenue",
            "Predictable recurring revenue and customer retention",
            "No customer acquisition costs",
            "Easy to scale without investment"
          ],
          correctAnswer: 1,
          explanation: "Subscription-based businesses have predictable recurring revenue streams and tend to have better customer retention, making financial planning easier and valuations more stable."
        },
        {
          id: 2,
          question: "Which of these is a RED FLAG when reading annual reports?",
          options: [
            "Consistent dividend payments",
            "Growing cash flows with profits",
            "Frequent changes in auditors",
            "Detailed notes to financial statements"
          ],
          correctAnswer: 2,
          explanation: "Frequent changes in auditors is a red flag as it may indicate disagreements over accounting practices, potential issues with financial reporting, or management trying to hide problems."
        },
        {
          id: 3,
          question: "In Porter's Five Forces, what does 'Threat of New Entrants' analyze?",
          options: [
            "How many customers the company has",
            "How easy it is for new companies to enter the industry",
            "How much suppliers can control prices",
            "How intense the current competition is"
          ],
          correctAnswer: 1,
          explanation: "'Threat of New Entrants' analyzes how easy or difficult it is for new companies to enter the industry, considering barriers like capital requirements, regulations, brand loyalty, and economies of scale."
        }
      ]
    }
  },

  // Module 4: 12.txt - Understanding Financial Ratios (Simplified)
  {
    id: 4,
    title: "Understanding Financial Ratios (Simplified)",
    hasQuiz: true,
    image: "/images/price to earning ratio pe ratio.png",
    content: `# Understanding Financial Ratios (Simplified)

## What Are Financial Ratios?

Financial ratios are mathematical calculations that help you understand a company's financial health and performance. Think of them as a company's report card - they tell you how well the business is doing.

## Key Financial Ratios Every Investor Should Know

### 1. Price-to-Earnings Ratio (P/E Ratio)

**What it measures:** How much investors are willing to pay for each rupee of company's earnings.

**Formula:** P/E Ratio = Share Price ÷ Earnings Per Share (EPS)

**Example:**
- Company A: Share price ₹100, EPS ₹10 → P/E = 10
- Company B: Share price ₹200, EPS ₹10 → P/E = 20

**What it means:**
- Lower P/E = Cheaper stock (or company has problems)
- Higher P/E = Expensive stock (or high growth expected)
- Industry average P/E helps compare

**Good P/E Ratios:**
- FMCG companies: 20-30
- IT companies: 15-25
- Banking: 10-20
- Auto: 12-18

### 2. Return on Equity (ROE)

**What it measures:** How efficiently a company uses shareholders' money to generate profits.

**Formula:** ROE = Net Profit ÷ Shareholders' Equity × 100

**Example:**
- Net Profit: ₹100 crores
- Shareholders' Equity: ₹500 crores
- ROE = 100/500 × 100 = 20%

**What it means:**
- ROE > 15% = Good
- ROE > 20% = Excellent
- ROE < 10% = Poor performance

### 3. Debt-to-Equity Ratio (D/E)

**What it measures:** How much debt a company has compared to shareholders' money.

**Formula:** D/E Ratio = Total Debt ÷ Shareholders' Equity

**Example:**
- Total Debt: ₹300 crores
- Shareholders' Equity: ₹600 crores
- D/E = 300/600 = 0.5

**What it means:**
- D/E < 0.5 = Low debt (safer)
- D/E 0.5-1.0 = Moderate debt
- D/E > 1.0 = High debt (risky)

### 4. Current Ratio

**What it measures:** Company's ability to pay short-term debts.

**Formula:** Current Ratio = Current Assets ÷ Current Liabilities

**Example:**
- Current Assets: ₹200 crores
- Current Liabilities: ₹100 crores
- Current Ratio = 200/100 = 2

**What it means:**
- Ratio > 2 = Very good liquidity
- Ratio 1.5-2 = Good liquidity
- Ratio < 1 = Liquidity problems

### 5. Price-to-Book Ratio (P/B)

**What it measures:** How much investors pay for each rupee of company's book value.

**Formula:** P/B Ratio = Share Price ÷ Book Value Per Share

**Example:**
- Share Price: ₹150
- Book Value Per Share: ₹100
- P/B = 150/100 = 1.5

**What it means:**
- P/B < 1 = Trading below book value (cheap or troubled)
- P/B 1-3 = Reasonable valuation
- P/B > 3 = Expensive (or high-quality business)

### 6. Dividend Yield

**What it measures:** How much dividend you get for your investment.

**Formula:** Dividend Yield = Annual Dividend Per Share ÷ Share Price × 100

**Example:**
- Annual Dividend: ₹5 per share
- Share Price: ₹100
- Dividend Yield = 5/100 × 100 = 5%

**What it means:**
- Yield > 4% = Good dividend stock
- Yield 2-4% = Moderate dividend
- Yield < 2% = Low dividend (growth stock)

### 7. Earnings Per Share (EPS)

**What it measures:** Company's profit per share.

**Formula:** EPS = Net Profit ÷ Total Number of Shares

**Example:**
- Net Profit: ₹500 crores
- Total Shares: 100 crore
- EPS = 500/100 = ₹5 per share

**What it means:**
- Growing EPS = Good sign
- Declining EPS = Warning sign
- Compare EPS growth over 3-5 years

### 8. Price-to-Sales Ratio (P/S)

**What it measures:** How much investors pay for each rupee of company's sales.

**Formula:** P/S Ratio = Market Cap ÷ Annual Revenue

**Example:**
- Market Cap: ₹1000 crores
- Annual Revenue: ₹500 crores
- P/S = 1000/500 = 2

**What it means:**
- P/S < 1 = Very cheap
- P/S 1-3 = Reasonable
- P/S > 5 = Expensive

## How to Use These Ratios

### Step 1: Compare with Industry
Don't just look at absolute numbers. Compare with similar companies in the same industry.

### Step 2: Look at Trends
Check if ratios are improving or deteriorating over 3-5 years.

### Step 3: Use Multiple Ratios
Don't rely on just one ratio. Use a combination for better analysis.

### Step 4: Consider Business Context
Understand the business model and industry before making judgments.

## Practical Example: Comparing Two Companies

### Company A (IT Services):
- P/E: 18
- ROE: 22%
- D/E: 0.1
- Current Ratio: 2.5
- EPS Growth: 15% annually

### Company B (IT Services):
- P/E: 25
- ROE: 18%
- D/E: 0.3
- Current Ratio: 1.8
- EPS Growth: 10% annually

**Analysis:**
- Company A has better ROE and EPS growth
- Company A has lower debt
- Company A is cheaper (lower P/E)
- Company A appears to be a better investment

## Red Flags in Financial Ratios

### Warning Signs:
- Declining ROE over multiple years
- Very high D/E ratio (>2)
- Current ratio < 1
- Declining EPS for 2+ years
- P/E much higher than industry average without justification

## Quick Ratio Checklist for Stock Analysis

✅ **P/E Ratio:** Compare with industry average
✅ **ROE:** Should be >15%
✅ **D/E Ratio:** Should be <1 (preferably <0.5)
✅ **Current Ratio:** Should be >1.5
✅ **EPS Growth:** Should be positive and consistent
✅ **Dividend Yield:** Bonus if >3%

## Tools to Find Financial Ratios

### Free Websites:
- **Screener.in** - Best for Indian stocks
- **Moneycontrol.com** - Comprehensive data
- **BSE/NSE websites** - Official data
- **Investing.com** - Global coverage

### What to Look For:
- 5-year historical data
- Peer comparison
- Industry averages
- Quarterly trends

Remember: Ratios are tools, not crystal balls. Use them wisely along with business understanding!`,
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
          question: "What is considered a good Return on Equity (ROE) for most companies?",
          options: [
            "ROE > 5%",
            "ROE > 10%",
            "ROE > 15%",
            "ROE > 30%"
          ],
          correctAnswer: 2,
          explanation: "ROE > 15% is generally considered good, and ROE > 20% is excellent. It shows the company is efficiently using shareholders' money to generate profits."
        }
      ]
    }
  },

  // Module 5: 6.txt - Finding Undervalued Stocks
  {
    id: 5,
    title: "Finding Undervalued Stocks",
    hasQuiz: true,
    image: "/images/pick undervalued stock.png",
    content: `# Finding Undervalued Stocks

## Step 1: Apply Your Basics
Look for companies with:
- **Low P/E ratio** (< 15 for most sectors)
- **High ROE** (> 15%)
- **Low Debt** (D/E < 1)
- **Consistent profits** for 5+ years

## Step 2: Use Screening Tools
**Free Tools:**
- Screener.in
- Moneycontrol Stock Screener
- NSE/BSE websites

**Set filters:**
- Market Cap > ₹1000 Cr (avoid penny stocks)
- P/E < 20
- ROE > 15%
- Debt/Equity < 1
- Sales growth > 10% (3 years)

## Step 3: Spot the Red Flags
Watch out for:
- High debt (D/E > 2)
- Low or falling profits (EPS drop)
- Frequent share dilution
- Poor corporate governance (check promoter holding, resignations, fraud news)

## Step 4: Look for Green Flags
**Quality indicators:**
- Consistent dividend payments
- Strong brand/moat
- Growing market share
- Good management track record
- Reasonable promoter holding (40-70%)

## Real Example: ITC (2020-2021)
**Why it was undervalued:**
- **P/E**: ~13-14 (vs market avg ~25)
- **Dividend Yield**: ~5-6%
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

  // Module 6: 11.txt - The Power of Compounding
  {
    id: 6,
    title: "The Power of Compounding",
    hasQuiz: true,
    image: "/images/compounding.png",
    content: `# The Power of Compounding

### What Is Compounding?

**Definition:**
> Compounding is when you earn returns on your past returns. It's like planting a money tree—your initial investment grows, and that growth itself keeps growing.

**Gen-Z Example:**
Imagine you save ₹500 every month. At the end of the year, you have ₹6,000. Now, imagine this amount earns interest. Next year, not only your new ₹6,000 but also the **interest earned** earns more interest. That's compounding!

---

### SIP vs. Lump Sum: What Works for Whom?

### **SIP (Systematic Investment Plan)**

**Definition:**
> SIP means investing a fixed amount regularly (like ₹500/month), usually in mutual funds or ETFs.

**Best for:**
- Beginners
- Salaried students
- People with limited funds but consistent income

**Example:**
You invest ₹500/month for 20 years. Assuming 12% annual return, it grows to **₹5+ Lakhs** from just ₹1.2 Lakhs invested!

### **Lump Sum Investment**

**Definition:**
> Lump sum means investing a large amount at once (e.g., ₹50,000 in one go).

**Best for:**
- People with saved-up funds
- Investors during market corrections

**Example:**
You invest ₹50,000 in one go. With 12% annual return, it grows to **₹5 Lakhs+** in 20 years.

---

### The Magic of Time

**Albert Einstein called compound interest "The 8th Wonder of the World"**

**Rule of 72:**
To find how long it takes to double your money: 72 ÷ Interest Rate = Years

- At 8% return: 72 ÷ 8 = 9 years to double
- At 12% return: 72 ÷ 12 = 6 years to double
- At 15% return: 72 ÷ 15 = 4.8 years to double

### Real Example: The Coffee Money Strategy

**Rahul's Story:**
Instead of buying expensive coffee daily (₹150 × 30 days = ₹4,500/month), Rahul invests ₹4,000 monthly in a mutual fund earning 12% annually.

**After 5 years:** His coffee money becomes ₹3.2 lakhs!
**After 10 years:** It becomes ₹9+ lakhs!
**After 20 years:** It becomes ₹48+ lakhs!

**Lesson:** Small daily expenses, when invested, can create significant wealth.

---

### Why Starting Early Matters

**Example: Two Friends**

**Priya (starts at 22):**
- Invests ₹5,000/month for 8 years (till age 30)
- Then stops investing (total invested: ₹4.8 lakhs)
- At age 60: Her money grows to ₹2.3 Crores!

**Rahul (starts at 30):**
- Invests ₹5,000/month for 30 years (till age 60)
- Total invested: ₹18 lakhs
- At age 60: His money grows to ₹1.8 Crores!

**Result:** Priya invested ₹13.2 lakhs LESS but ended up with ₹50 lakhs MORE!

**Moral:** Time is more powerful than money. Start early, even with small amounts.`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "According to the Rule of 72, how long will it take to double your money at 12% annual return?",
          options: [
            "5 years",
            "6 years",
            "8 years",
            "10 years"
          ],
          correctAnswer: 1,
          explanation: "Using the Rule of 72: 72 ÷ 12 = 6 years. This rule gives a quick estimate of how long it takes for an investment to double at a given annual rate of return."
        },
        {
          id: 2,
          question: "In the Priya vs Rahul example, why did Priya end up with more money despite investing less?",
          options: [
            "She had better investment returns",
            "She started investing 8 years earlier, giving compound interest more time to work",
            "She invested in riskier assets",
            "She had professional investment advice"
          ],
          correctAnswer: 1,
          explanation: "Priya started investing 8 years earlier than Rahul. This extra time allowed compound interest to work longer on her investments, demonstrating that time in the market is often more important than the amount invested."
        },
        {
          id: 3,
          question: "What is the main advantage of SIP over lump sum investment for beginners?",
          options: [
            "SIP always gives higher returns",
            "SIP requires less money upfront and helps build discipline",
            "SIP is only for mutual funds",
            "SIP eliminates all investment risks"
          ],
          correctAnswer: 1,
          explanation: "SIP allows beginners to start with small amounts regularly, making it accessible and helping build investment discipline. It also provides rupee cost averaging, which can reduce the impact of market volatility."
        }
      ]
    }
  },

  // Module 7: 2.txt - Common Mistakes to Avoid
  {
    id: 7,
    title: "Common Mistakes to Avoid",
    hasQuiz: true,
    image: "/images/commo mistakes.png",
    content: `# Common Mistakes to Avoid as a Beginner

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

**Remember:** Every expert was once a beginner. Learn from mistakes, stay consistent, and keep improving!`,
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

  // Module 8: 3.txt - How to Get Started
  {
    id: 8,
    title: "How to Get Started",
    hasQuiz: true,
    image: "/images/how to get started.png",
    content: `# How to Get Started

This is where it all begins. You've learned the basics, now let's take action!

## Step 1: Build Your Foundation

### Emergency Fund First
Before investing, save 3-6 months of expenses in a savings account. This prevents you from selling investments during emergencies.

**Example:** If your monthly expenses are ₹15,000, keep ₹45,000-90,000 in savings.

### Clear High-Interest Debt
Pay off credit card debt (18-24% interest) before investing. No investment consistently beats 20% returns!

## Step 2: Choose Your Investment Account

### Demat + Trading Account
**What it is:** Digital account to hold and trade stocks/mutual funds.

**Best Brokers for Beginners:**
- **Zerodha:** Low fees, good research tools
- **Groww:** User-friendly app, great for beginners
- **Upstox:** Low brokerage, decent platform
- **Angel One:** Good research, multiple products

### Documents Needed:
- PAN Card
- Aadhaar Card
- Bank account details
- Income proof (salary slip/ITR)

## Step 3: Start Small and Learn

### Your First ₹1,000 Investment
**Option 1: Index Fund**
- Invest in Nifty 50 Index Fund
- Diversified, low risk, low cost
- Good for absolute beginners

**Option 2: Blue-chip Stock**
- Choose from: TCS, Infosys, HDFC Bank, ITC, Asian Paints
- Large, stable companies
- Less volatile than small companies

### Monthly SIP Strategy
Start with ₹500-1,000/month SIP in:
- 50% Large-cap mutual fund
- 30% Mid-cap mutual fund
- 20% International fund (US/Global)

## Step 4: Learn Continuously

### Essential Learning Resources

**Free YouTube Channels:**
- CA Rachana Ranade (Hindi/English basics)
- Pranjal Kamra (Hindi, practical advice)
- Akshat Shrivastava (market insights)

**Books to Read:**
- "The Intelligent Investor" by Benjamin Graham
- "One Up On Wall Street" by Peter Lynch
- "Coffee Can Investing" by Saurabh Mukherjea

**Websites/Apps:**
- Moneycontrol.com (news & analysis)
- Screener.in (stock analysis)
- Economic Times (financial news)

## Step 5: Track and Review

### Monthly Review Checklist:
✅ Check portfolio performance
✅ Read about your invested companies
✅ Add money to SIP if possible
✅ Learn one new financial concept

### Don't Do This:
❌ Check portfolio daily
❌ Panic sell during market falls
❌ Follow random tips from social media
❌ Invest borrowed money

## Step 6: Gradually Increase Knowledge

### After 6 Months:
- Learn to read annual reports
- Understand P/E, ROE, debt ratios
- Start analyzing individual stocks

### After 1 Year:
- Increase investment amount
- Diversify across sectors
- Consider direct equity (individual stocks)

### After 2 Years:
- Build concentrated portfolio of 8-10 stocks
- Understand business models deeply
- Consider advanced strategies

## Tax Planning

### Understanding Investment Taxes:

**Short-Term Capital Gains (STCG)**
- Stocks held for less than 1 year
- Tax rate: 15% on profits
- Example: Buy at ₹100, sell at ₹150 in 6 months = ₹7.5 tax on ₹50 profit

**Long-Term Capital Gains (LTCG)**
- Stocks held for more than 1 year
- Tax rate: 10% on profits above ₹1 lakh per year
- Example: ₹2 lakh profit in 2 years = ₹10,000 tax (on ₹1 lakh excess)

**Dividend Tax**
- Dividends are taxable as per your income tax slab
- TDS deducted if dividend > ₹5,000 per year

## Recommended First Investments

### For Conservative Beginners:
- **HDFC Bank** - Banking leader
- **TCS** - IT services giant
- **ITC** - FMCG + cigarettes
- **Asian Paints** - Paint market leader

### Why these are good for beginners:
- Established businesses
- Regular profits
- Less volatile than small-caps
- Good corporate governance

## Final Beginner Tips

### Start Today, Not Tomorrow
- Even ₹100/month is better than waiting for "perfect" amount
- Time in market > Timing the market
- Consistency beats perfection

### Build Good Habits
1. **Automate investments** (SIP)
2. **Read financial news** (15 min daily)
3. **Track expenses** (know where money goes)
4. **Increase income** (skills, side hustles)
5. **Stay patient** (wealth building takes time)
6. **Keep learning** (never stop educating yourself)

**Remember:** Start small, learn continuously, and be patient. Rome wasn't built in a day, and neither is wealth!`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What should you do BEFORE starting to invest in stocks?",
          options: [
            "Buy the most expensive stocks",
            "Build an emergency fund and clear high-interest debt",
            "Invest all your savings immediately",
            "Follow social media tips"
          ],
          correctAnswer: 1,
          explanation: "Before investing, you should build an emergency fund (3-6 months expenses) and clear high-interest debt like credit cards. This provides financial stability and prevents you from selling investments during emergencies."
        },
        {
          id: 2,
          question: "For absolute beginners, which is the safest first investment option?",
          options: [
            "Penny stocks with high growth potential",
            "Cryptocurrency",
            "Nifty 50 Index Fund or blue-chip stocks",
            "Options and derivatives"
          ],
          correctAnswer: 2,
          explanation: "Nifty 50 Index Fund or blue-chip stocks (like TCS, HDFC Bank) are safest for beginners as they are diversified, less volatile, and represent established businesses with good track records."
        },
        {
          id: 3,
          question: "What is the tax rate on Long-Term Capital Gains (LTCG) for stocks held more than 1 year?",
          options: [
            "15% on all profits",
            "10% on profits above ₹1 lakh per year",
            "No tax on long-term gains",
            "30% as per income tax slab"
          ],
          correctAnswer: 1,
          explanation: "LTCG tax on stocks held for more than 1 year is 10% on profits above ₹1 lakh per year. The first ₹1 lakh of long-term capital gains is tax-free."
        }
      ]
    }
  },

  // Module 9: 9.txt - All about Mutual fund Investing
  {
    id: 9,
    title: "All about Mutual fund Investing",
    hasQuiz: true,
    image: "/images/mutual funds.png",
    content: `# All about Mutual funds

## Mutual Funds for Beginners

### 1. What is a Mutual Fund?
A mutual fund is like a **big basket** where many people put their money together. A professional fund manager then uses this pooled money to buy stocks, bonds, or other investments.

**Simple Example:**
- 1,000 people contribute ₹1,000 each = ₹10 lakh pool
- Fund manager invests this ₹10 lakh in 50 different stocks
- Each person owns a small piece of all 50 stocks
- When stocks go up, everyone benefits proportionally

### 2. Why Mutual Funds?

#### **Advantages:**
- **Professional Management:** Experts manage your money
- **Diversification:** Your money is spread across many stocks
- **Small Investment:** Start with just ₹500/month
- **Liquidity:** Can sell anytime (except ELSS)
- **Regulated:** SEBI oversight ensures transparency

#### **Disadvantages:**
- **Fees:** Annual charges (expense ratio)
- **No Control:** Can't choose individual stocks
- **Market Risk:** Value can go down
- **Tax:** Capital gains tax applicable

### 3. Types of Mutual Funds

#### **By Asset Class:**

##### **Equity Funds (Stock Funds)**
- **What:** Invest primarily in stocks
- **Risk:** High
- **Returns:** 10-15% annually (long-term)
- **Best for:** Long-term goals (5+ years)
- **Example:** HDFC Top 100 Fund

##### **Debt Funds (Bond Funds)**
- **What:** Invest in bonds, government securities
- **Risk:** Low to Medium
- **Returns:** 6-9% annually
- **Best for:** Short to medium-term goals
- **Example:** HDFC Short Term Debt Fund

##### **Hybrid Funds (Balanced Funds)**
- **What:** Mix of stocks and bonds
- **Risk:** Medium
- **Returns:** 8-12% annually
- **Best for:** Moderate risk investors
- **Example:** HDFC Balanced Advantage Fund

#### **By Market Cap:**

##### **Large Cap Funds**
- **What:** Invest in top 100 companies
- **Risk:** Lower (among equity funds)
- **Returns:** 10-12% annually
- **Companies:** TCS, Reliance, HDFC Bank
- **Best for:** Conservative equity investors

##### **Mid Cap Funds**
- **What:** Invest in companies ranked 101-250
- **Risk:** Higher than large cap
- **Returns:** 12-15% annually (more volatile)
- **Best for:** Aggressive investors with 5+ year horizon

##### **Small Cap Funds**
- **What:** Invest in companies ranked 251+
- **Risk:** Highest
- **Returns:** 15-18% annually (very volatile)
- **Best for:** Very aggressive investors, 7+ year horizon

#### **Special Categories:**

##### **Index Funds**
- **What:** Copy a market index (like Nifty 50)
- **Management:** Passive (no fund manager decisions)
- **Fees:** Very low (0.1-0.5%)
- **Returns:** Same as market index
- **Best for:** Long-term, low-cost investing

##### **ELSS Funds (Tax Saving)**
- **What:** Equity funds with 3-year lock-in
- **Tax Benefit:** ₹1.5 lakh deduction under 80C
- **Risk:** High (equity-based)
- **Returns:** 10-15% annually
- **Best for:** Tax saving + wealth creation

##### **Sectoral/Thematic Funds**
- **What:** Focus on specific sectors (IT, Pharma, Banking)
- **Risk:** Very High (concentrated)
- **Returns:** Highly volatile
- **Best for:** Experts only, not beginners

### 4. How to Choose the Right Mutual Fund

#### **Step 1: Define Your Goal**
- **Short-term (1-3 years):** Debt funds, liquid funds
- **Medium-term (3-5 years):** Hybrid funds, conservative equity
- **Long-term (5+ years):** Equity funds, ELSS

#### **Step 2: Assess Risk Tolerance**
- **Conservative:** Large cap, debt funds
- **Moderate:** Hybrid, large cap + mid cap mix
- **Aggressive:** Mid cap, small cap, sectoral

#### **Step 3: Check Fund Performance**
- **Look at 3, 5, 10-year returns**
- **Compare with benchmark and peers**
- **Check consistency (not just best year)**

#### **Step 4: Analyze Fund Manager**
- **Experience:** How long managing funds?
- **Track Record:** Performance across market cycles
- **Investment Philosophy:** Value, growth, or blend?

#### **Step 5: Check Costs**
- **Expense Ratio:** Annual fee (should be <2% for equity, <1% for debt)
- **Exit Load:** Fee for early withdrawal
- **Direct vs Regular:** Direct plans have lower costs

### 5. SIP vs Lump Sum in Mutual Funds

#### **SIP (Systematic Investment Plan)**
- **What:** Invest fixed amount monthly
- **Advantage:** Rupee cost averaging, disciplined investing
- **Best for:** Salaried individuals, beginners
- **Example:** ₹5,000/month for 10 years

#### **Lump Sum**
- **What:** Invest large amount at once
- **Advantage:** Full market exposure immediately
- **Best for:** Market corrections, windfall money
- **Example:** ₹5 lakh investment at once

#### **Which is Better?**
- **SIP:** Better for volatile markets, reduces timing risk
- **Lump Sum:** Better in consistently rising markets
- **Reality:** Most people should do SIP for discipline

### 6. Taxation of Mutual Funds

#### **Equity Funds:**
- **Short-term (< 1 year):** 15% tax
- **Long-term (> 1 year):** 10% tax on gains above ₹1 lakh

#### **Debt Funds:**
- **Short-term (< 3 years):** As per income tax slab
- **Long-term (> 3 years):** 20% with indexation benefit

#### **ELSS Funds:**
- **Investment:** Tax deduction up to ₹1.5 lakh
- **Gains:** Same as equity funds taxation

### 7. Common Mistakes to Avoid

#### **Mistake 1: Chasing Past Performance**
- Don't buy funds just because they gave 30% last year
- Look at long-term consistency

#### **Mistake 2: Over-Diversification**
- Don't buy 15 different funds
- 4-6 funds across categories are enough

#### **Mistake 3: Frequent Switching**
- Don't change funds every 6 months
- Give funds 3-5 years to perform

#### **Mistake 4: Ignoring Costs**
- High expense ratios eat into returns
- Choose direct plans over regular plans

#### **Mistake 5: Panic Selling**
- Don't sell during market crashes
- SIPs work best when continued through volatility

### 8. Building Your First Mutual Fund Portfolio

#### **Conservative Portfolio (Low Risk):**
- 40% Large Cap Fund
- 30% Debt Fund
- 20% Hybrid Fund
- 10% Liquid Fund

#### **Moderate Portfolio (Medium Risk):**
- 30% Large Cap Fund
- 25% Mid Cap Fund
- 25% Debt Fund
- 20% International Fund

#### **Aggressive Portfolio (High Risk):**
- 25% Large Cap Fund
- 30% Mid Cap Fund
- 20% Small Cap Fund
- 15% International Fund
- 10% ELSS Fund

### 9. How to Invest in Mutual Funds

#### **Online Platforms:**
- **Groww:** User-friendly, good for beginners
- **Zerodha Coin:** Low cost, direct plans
- **Paytm Money:** Simple interface
- **ET Money:** Comprehensive features

#### **Direct vs Regular Plans:**
- **Direct:** Buy directly from AMC, lower costs
- **Regular:** Buy through distributor, higher costs
- **Recommendation:** Always choose Direct plans

#### **KYC Requirements:**
- PAN Card
- Aadhaar Card
- Bank account details
- Address proof

### 10. Monitoring Your Mutual Fund Investments

#### **Monthly Review:**
- Check portfolio value
- Ensure SIPs are running
- Read fund manager commentary

#### **Quarterly Review:**
- Compare performance with benchmark
- Rebalance if needed
- Add new SIPs if income increased

#### **Annual Review:**
- Comprehensive portfolio analysis
- Tax planning and harvesting
- Goal-based adjustments

### Key Takeaways:
1. **Start Early:** Time is your biggest advantage
2. **Stay Consistent:** Continue SIPs through market cycles
3. **Keep it Simple:** Don't over-complicate with too many funds
4. **Focus on Goals:** Invest based on your financial objectives
5. **Be Patient:** Mutual funds work best over long periods

**Remember:** Mutual funds are a marathon, not a sprint. Stay invested, stay disciplined!`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is the main advantage of investing in mutual funds over individual stocks for beginners?",
          options: [
            "Guaranteed returns with no risk",
            "Professional management and instant diversification",
            "No fees or charges involved",
            "Can only go up in value"
          ],
          correctAnswer: 1,
          explanation: "Mutual funds offer professional management by experts and instant diversification across many stocks, which reduces risk compared to buying individual stocks. This is especially beneficial for beginners who may lack the expertise to pick individual stocks."
        },
        {
          id: 2,
          question: "Which type of mutual fund is most suitable for long-term goals (5+ years) with higher risk tolerance?",
          options: [
            "Debt funds",
            "Liquid funds",
            "Equity funds (Large cap, Mid cap, Small cap)",
            "Fixed deposits"
          ],
          correctAnswer: 2,
          explanation: "Equity funds are most suitable for long-term goals as they have the potential to generate higher returns (10-15% annually) over 5+ years, though they come with higher risk and volatility."
        },
        {
          id: 3,
          question: "What is the tax treatment for equity mutual funds held for more than 1 year?",
          options: [
            "15% tax on all gains",
            "10% tax on gains above ₹1 lakh per year",
            "No tax on long-term gains",
            "Tax as per income tax slab"
          ],
          correctAnswer: 1,
          explanation: "Equity mutual funds held for more than 1 year are subject to Long-Term Capital Gains (LTCG) tax of 10% on gains above ₹1 lakh per year. The first ₹1 lakh of gains is tax-free."
        }
      ]
    }
  },

  // Module 10: 10.txt - Financial Independence and Early Retirement
  {
    id: 10,
    title: "Financial Independence and Early Retirement",
    hasQuiz: true,
    image: "/images/financial freedom.png",
    content: `# Financial Freedom and Insights of Early retirement

### **Definition:**

Financial freedom means having **enough passive income** (from investments, not job salary) to cover your living expenses—so you don't have to **work for money**, unless you want to.

Early retirement doesn't mean sitting idle. It means having the **choice** to work on what you love, without worrying about money.

---

## **The FIRE Movement**

**FIRE = Financial Independence, Retire Early**

### **Types of FIRE:**

#### **1. Lean FIRE**
- **Target:** ₹1-2 Crores corpus
- **Lifestyle:** Minimalist, frugal living
- **Monthly Expenses:** ₹25,000-50,000
- **Best for:** Simple lifestyle, small cities

#### **2. Fat FIRE**
- **Target:** ₹5-10 Crores corpus
- **Lifestyle:** Comfortable, no major compromises
- **Monthly Expenses:** ₹1-2 lakhs
- **Best for:** Maintaining current lifestyle

#### **3. Coast FIRE**
- **Target:** Enough invested that compound growth will fund retirement at 60
- **Strategy:** Stop active investing, let compounding work
- **Best for:** Those who want to reduce work stress early

---

## **The 25x Rule**

### **Formula:**
**FIRE Number = Annual Expenses × 25**

### **Logic:**
If you withdraw 4% annually from your corpus, it should last forever (historically proven in US markets).

### **Example:**
- Monthly expenses: ₹50,000
- Annual expenses: ₹6 lakhs
- FIRE number: ₹6 lakhs × 25 = **₹1.5 Crores**

### **Indian Context Adjustment:**
Given inflation and market volatility, many suggest **30x rule** for India:
- FIRE number: ₹6 lakhs × 30 = **₹1.8 Crores**

---

## **Building Your FIRE Plan**

### **Step 1: Calculate Your FIRE Number**

#### **Current Expenses Method:**
1. Track expenses for 3-6 months
2. Calculate monthly average
3. Multiply by 12 for annual
4. Multiply by 25-30 for FIRE number

#### **Future Expenses Method:**
1. Estimate expenses at retirement age
2. Account for inflation
3. Consider lifestyle changes
4. Apply 25-30x multiplier

### **Step 2: Increase Income**

#### **Career Growth:**
- Skill development and certifications
- Job switches for salary hikes
- Performance bonuses and promotions
- Side consulting in your expertise area

#### **Side Hustles:**
- Freelancing (writing, design, coding)
- Online tutoring or courses
- E-commerce or dropshipping
- Content creation (YouTube, blogging)

#### **Passive Income Streams:**
- Rental income from real estate
- Dividend income from stocks
- Interest from debt instruments
- Royalties from intellectual property

### **Step 3: Optimize Expenses**

#### **The 50/30/20 Rule:**
- **50%** Needs (rent, food, utilities)
- **30%** Wants (entertainment, dining out)
- **20%** Savings and investments

#### **For FIRE, aim for 50/20/30:**
- **50%** Needs
- **20%** Wants
- **30%** Savings and investments

#### **Expense Optimization Tips:**
- Cook at home more often
- Use public transport or carpool
- Cancel unused subscriptions
- Buy generic brands for commodities
- Negotiate bills (insurance, phone, internet)

### **Step 4: Invest Strategically**

#### **Asset Allocation for FIRE:**

##### **Aggressive Phase (20s-30s):**
- **70%** Equity (stocks, equity mutual funds)
- **20%** Debt (bonds, debt funds)
- **10%** Alternative (REITs, gold)

##### **Moderate Phase (30s-40s):**
- **60%** Equity
- **30%** Debt
- **10%** Alternative

##### **Conservative Phase (40s-50s):**
- **50%** Equity
- **40%** Debt
- **10%** Alternative

#### **Investment Vehicles:**
- **Equity Mutual Funds:** For long-term growth
- **Index Funds:** Low-cost diversification
- **Direct Stocks:** For higher returns (if skilled)
- **PPF/EPF:** Tax-free debt component
- **Real Estate:** Rental income + appreciation
- **International Funds:** Geographic diversification

---

## **FIRE Timeline Examples**

### **Example 1: Software Engineer (Age 25)**
- **Salary:** ₹15 lakhs/year
- **Expenses:** ₹6 lakhs/year
- **Savings Rate:** 60% (₹9 lakhs/year)
- **FIRE Target:** ₹1.8 Crores (30x of ₹6 lakhs)
- **Timeline:** 12-15 years (by age 37-40)

### **Example 2: Marketing Manager (Age 30)**
- **Salary:** ₹20 lakhs/year
- **Expenses:** ₹10 lakhs/year
- **Savings Rate:** 50% (₹10 lakhs/year)
- **FIRE Target:** ₹3 Crores (30x of ₹10 lakhs)
- **Timeline:** 15-18 years (by age 45-48)

### **Example 3: Entrepreneur (Age 35)**
- **Income:** ₹50 lakhs/year (variable)
- **Expenses:** ₹15 lakhs/year
- **Savings Rate:** 70% (₹35 lakhs/year)
- **FIRE Target:** ₹4.5 Crores (30x of ₹15 lakhs)
- **Timeline:** 8-10 years (by age 43-45)

---

## **Challenges and Solutions**

### **Challenge 1: Healthcare Costs**
- **Solution:** Comprehensive health insurance
- **Tip:** Factor ₹2-5 lakhs annually for health expenses

### **Challenge 2: Inflation**
- **Solution:** Invest in assets that beat inflation
- **Tip:** Review and adjust FIRE number every 5 years

### **Challenge 3: Market Volatility**
- **Solution:** Diversified portfolio + emergency fund
- **Tip:** Have 2-3 years expenses in liquid funds

### **Challenge 4: Social Pressure**
- **Solution:** Find like-minded community
- **Tip:** Don't reveal FIRE plans to everyone

### **Challenge 5: Lifestyle Inflation**
- **Solution:** Automate investments first
- **Tip:** Increase savings rate with salary hikes

---

## **Life After FIRE**

### **What to Do:**
- Pursue passion projects
- Travel and explore
- Volunteer for causes you care about
- Spend quality time with family
- Learn new skills or hobbies
- Start a social enterprise

### **Income Options:**
- Part-time consulting
- Teaching or mentoring
- Creative pursuits (writing, art)
- Small business ventures
- Investment management

---

## **FIRE Mistakes to Avoid**

### **1. Underestimating Expenses**
- Don't forget inflation
- Account for lifestyle changes
- Include healthcare costs

### **2. Over-Optimistic Returns**
- Don't assume 15% returns forever
- Plan for 8-10% real returns
- Factor in taxes and fees

### **3. Ignoring Insurance**
- Life insurance for dependents
- Health insurance for medical costs
- Disability insurance for income protection

### **4. Not Having Emergency Fund**
- Keep 6-12 months expenses liquid
- Don't invest emergency fund in equity
- Separate from FIRE corpus

### **5. Extreme Frugality**
- Don't sacrifice health for savings
- Maintain relationships and social life
- Invest in skills and education

---

## **FIRE Calculator**

### **Simple Formula:**
**Years to FIRE = log(1 + (FIRE Number × Investment Return Rate) / Annual Investment) / log(1 + Investment Return Rate)**

### **Assumptions:**
- Investment return: 10% annually
- Inflation: 6% annually
- Real return: 4% annually

### **Quick Estimation:**
- **50% savings rate:** 17 years to FIRE
- **60% savings rate:** 12.5 years to FIRE
- **70% savings rate:** 8.5 years to FIRE

---

## **Getting Started Today**

### **Week 1:**
- Calculate current expenses
- Determine FIRE number
- Open investment accounts

### **Month 1:**
- Start SIPs in mutual funds
- Optimize major expenses
- Increase income sources

### **Year 1:**
- Build emergency fund
- Establish investment routine
- Track progress monthly

**Remember:** FIRE is not about retiring to do nothing. It's about having the freedom to choose how you spend your time and energy!

The journey to financial independence is as important as the destination. Start today, stay consistent, and enjoy the process of building wealth and freedom.`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is the '25x Rule' in FIRE planning?",
          options: [
            "Save 25% of your income every year",
            "Your FIRE corpus should be 25 times your annual expenses",
            "Retire at age 25",
            "Invest for 25 years minimum"
          ],
          correctAnswer: 1,
          explanation: "The 25x Rule states that your FIRE corpus should be 25 times your annual expenses. This is based on the 4% withdrawal rule - if you withdraw 4% annually from your corpus, it should theoretically last forever."
        },
        {
          id: 2,
          question: "What is the recommended savings rate to achieve FIRE quickly?",
          options: [
            "20-30% of income",
            "40-50% of income",
            "50-70% of income",
            "10-20% of income"
          ],
          correctAnswer: 2,
          explanation: "To achieve FIRE quickly, a savings rate of 50-70% is recommended. Higher savings rates dramatically reduce the time needed to reach financial independence - 50% savings rate takes about 17 years, while 70% takes only 8.5 years."
        },
        {
          id: 3,
          question: "Which asset allocation is recommended for someone in their 20s-30s pursuing FIRE?",
          options: [
            "90% debt, 10% equity",
            "50% equity, 50% debt",
            "70% equity, 20% debt, 10% alternatives",
            "100% equity"
          ],
          correctAnswer: 2,
          explanation: "For aggressive phase (20s-30s) FIRE planning, 70% equity, 20% debt, and 10% alternatives is recommended. This provides growth potential while maintaining some stability and diversification."
        }
      ]
    }
  },

  // Module 11: Additional content from remaining files
  {
    id: 11,
    title: "Investment Psychology & Behavioral Finance",
    hasQuiz: true,
    image: "/images/basic terms that investors hsould know.png",
    content: `# Investment Psychology & Behavioral Finance

## Understanding Your Investment Mind

### What is Behavioral Finance?
Behavioral finance studies how psychological factors and emotions affect financial decisions. Even the smartest people make irrational investment choices due to cognitive biases.

## Common Psychological Biases

### 1. Loss Aversion
**What it is:** People feel the pain of losing money twice as strongly as the pleasure of gaining it.
**Example:** Holding losing stocks too long while selling winning stocks too early.
**Solution:** Set stop-losses and profit targets before investing.

### 2. Confirmation Bias
**What it is:** Seeking information that confirms what you already believe.
**Example:** Only reading positive news about stocks you own.
**Solution:** Actively seek contrarian viewpoints and criticism.

### 3. Herd Mentality
**What it is:** Following what everyone else is doing.
**Example:** Buying stocks during market peaks because "everyone is making money."
**Solution:** Think independently and do your own research.

### 4. Overconfidence Bias
**What it is:** Believing you're better at investing than you actually are.
**Example:** Day trading after a few lucky wins.
**Solution:** Track your performance honestly and stay humble.

### 5. Anchoring Bias
**What it is:** Relying too heavily on the first piece of information.
**Example:** Thinking a stock at ₹100 is cheap because it was once ₹200.
**Solution:** Focus on current fundamentals, not historical prices.

## Emotional Cycles in Investing

### The Market Emotion Cycle:
1. **Optimism** → "Markets will keep rising"
2. **Excitement** → "I'm making money!"
3. **Thrill** → "I'm a genius investor!"
4. **Euphoria** → "I can't lose!" (Market Peak)
5. **Anxiety** → "Maybe I should sell?"
6. **Denial** → "It's just a temporary dip"
7. **Fear** → "I'm losing money!"
8. **Desperation** → "I need to sell everything!"
9. **Panic** → "Get me out!" (Market Bottom)
10. **Capitulation** → "I'll never invest again"
11. **Despondency** → "Markets are rigged"
12. **Depression** → "I've lost everything"
13. **Hope** → "Maybe it's getting better"
14. **Relief** → "I didn't lose as much as I thought"
15. **Optimism** → Cycle repeats

### Key Insight:
Most people buy at euphoria (high prices) and sell at panic (low prices). Successful investors do the opposite.

## Building Mental Discipline

### 1. Create Investment Rules
- Set clear entry and exit criteria
- Decide position sizes before investing
- Write down your investment thesis
- Review and stick to your rules

### 2. Automate Decisions
- Use SIPs to remove timing decisions
- Set automatic rebalancing
- Use stop-losses and target prices
- Automate emergency fund contributions

### 3. Keep Learning
- Read books on behavioral finance
- Study your past investment mistakes
- Learn from successful investors
- Join investment communities for diverse perspectives

### 4. Practice Patience
- Think in years, not months
- Focus on business fundamentals
- Ignore daily market noise
- Remember that wealth building takes time

## Practical Tips for Better Investment Psychology

### Before Investing:
- Sleep on major investment decisions
- Discuss with trusted advisors
- Write down your reasons for investing
- Set realistic expectations

### During Market Volatility:
- Avoid checking portfolio daily
- Focus on long-term goals
- Continue SIPs during downturns
- Remember that volatility is normal

### When Making Profits:
- Don't get overconfident
- Stick to your asset allocation
- Consider booking some profits
- Reinvest systematically

### When Facing Losses:
- Don't panic sell
- Review your investment thesis
- Consider if fundamentals have changed
- Use losses for tax harvesting

## The Psychology of Successful Investors

### Warren Buffett's Mental Models:
- **Circle of Competence:** Only invest in what you understand
- **Margin of Safety:** Buy with a cushion for errors
- **Long-term Thinking:** Hold great businesses forever
- **Emotional Control:** Be greedy when others are fearful

### Peter Lynch's Approach:
- **Invest in What You Know:** Use your professional knowledge
- **Do Your Homework:** Research before investing
- **Ignore the Noise:** Don't follow market predictions
- **Stay Patient:** Let compound interest work

## Common Investment Mistakes Due to Psychology

### 1. Chasing Performance
**Mistake:** Buying last year's best-performing funds
**Psychology:** Recency bias and FOMO
**Solution:** Focus on consistent long-term performance

### 2. Panic Selling
**Mistake:** Selling during market crashes
**Psychology:** Loss aversion and fear
**Solution:** Have a long-term plan and stick to it

### 3. Analysis Paralysis
**Mistake:** Over-researching and never investing
**Psychology:** Perfectionism and fear of mistakes
**Solution:** Start small and learn by doing

### 4. Overtrading
**Mistake:** Buying and selling too frequently
**Psychology:** Overconfidence and action bias
**Solution:** Set trading limits and focus on long-term

## Building Your Investment Mindset

### Daily Habits:
- Read financial news for 15 minutes
- Avoid checking portfolio prices
- Practice gratitude for what you have
- Learn one new financial concept

### Weekly Habits:
- Review your financial goals
- Read investment books or articles
- Discuss investments with knowledgeable friends
- Plan your next investment moves

### Monthly Habits:
- Review portfolio performance
- Rebalance if needed
- Track your expenses and savings rate
- Celebrate small wins and learn from mistakes

### Annual Habits:
- Comprehensive portfolio review
- Tax planning and optimization
- Goal setting for the next year
- Investment strategy refinement

## Remember:
The biggest enemy of investment success is often yourself. By understanding your psychological biases and building mental discipline, you can make better investment decisions and achieve your financial goals.

**Key Takeaway:** Successful investing is 80% psychology and 20% strategy. Master your mind, and you'll master your money.`,
    quiz: {
      questions: [
        {
          id: 1,
          question: "What is 'Loss Aversion' in behavioral finance?",
          options: [
            "The tendency to avoid all risky investments",
            "Feeling the pain of losing money twice as strongly as the pleasure of gaining it",
            "The fear of missing out on investment opportunities",
            "The tendency to sell winning stocks too early"
          ],
          correctAnswer: 1,
          explanation: "Loss aversion is the psychological tendency where people feel the pain of losing money about twice as strongly as they feel the pleasure of gaining the same amount. This often leads to holding losing investments too long and selling winners too early."
        },
        {
          id: 2,
          question: "At which point in the market emotion cycle do most people typically buy stocks?",
          options: [
            "During panic and desperation",
            "During euphoria and thrill (market peaks)",
            "During depression and despondency",
            "During hope and relief"
          ],
          correctAnswer: 1,
          explanation: "Most people buy stocks during euphoria and thrill phases when markets are at or near peaks, driven by FOMO and overconfidence. This is exactly the wrong time to buy, as prices are typically overvalued."
        },
        {
          id: 3,
          question: "What is the best way to overcome emotional decision-making in investing?",
          options: [
            "Check your portfolio multiple times daily",
            "Follow market predictions and tips",
            "Create investment rules and automate decisions through SIPs",
            "Only invest when you feel confident about the market"
          ],
          correctAnswer: 2,
          explanation: "Creating clear investment rules and automating decisions through SIPs helps remove emotions from investing. This systematic approach prevents impulsive decisions based on market volatility or psychological biases."
        }
      ]
    }
  }
];
