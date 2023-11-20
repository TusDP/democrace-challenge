/**
 * Time stamp regex that AlphaVantage uses.
 */
export const timestamp = /[0-9]{4}-[0-9]{2}-[0-9]{2}( [0-9]{2}:[0-9]{2}:[0-9]{2})?/g

/**
 * Price regex for target markets in target currency.
 */
export const cryptoMarketPrice = /1a\. price \(.*\)/g

/**
 * Price open regex for target markets in target currency.
 */
export const cryptoMarketOpen = /1a\. open \(.*\)/g

/**
 * Price high regex for target markets in target currency.
 */
export const cryptoMarketHigh = /2a\. high \(.*\)/g

/**
 * Price low regex for target markets in target currency.
 */
export const cryptoMarketLow = /3a\. low \(.*\)/g

/**
 * Price close regex for target markets in target currency.
 */
export const cryptoMarketClose = /4a\. close \(.*\)/g

/**
 * The data keys to replace from the AlphaVantage API.
 */
export const keys = {
    '01. symbol': 'symbol',
    '02. open': 'open',
    '03. high': 'high',
    '04. low': 'low',
    '05. price': 'price',
    '06. volume': 'volume',
    '07. latest trading day': 'latest_trading_day',
    '08. previous close': 'prev_close',
    '09. change': 'change',
    '1: Symbol': 'symbol',
    '1. From_Currency Code': 'from_currency',
    '1. Information': 'information',
    '1. open': 'open',
    '10. change percent': 'change_percent',
    '1b. open (USD)': 'usd_open',
    '1b. price (USD)': 'usd',
    '2: Indicator': 'indicator',
    '2. Digital Currency Code': 'coin',
    '2. From_Currency Name': 'from_currency_name',
    '2. high': 'high',
    '2. price': 'price',
    '2. Symbol': 'symbol',
    '2. volume': 'volume',
    '2b. high (USD)': 'usd_high',
    '3. Digital Currency Name': 'coin_name',
    '3. Last Refreshed': 'updated',
    '3. low': 'low',
    '3. market cap (USD)': 'cap',
    '3. To_Currency Code': 'to_currency',
    '3. volume': 'volume',
    '3b. low (USD)': 'usd_low',
    '4. close': 'close',
    '4. Interval': 'interval',
    '4. Market Code': 'market',
    '4. Output Size': 'size',
    '4. Time Zone': 'zone',
    '4. timestamp': 'updated',
    '4. To_Currency Name': 'to_currency_name',
    '4b. close (USD)': 'usd_close',
    '5: Series Type': 'series',
    '5: Time Period': 'period',
    '5. adjusted close': 'adjusted',
    '5. Exchange Rate': 'value',
    '5. Market Name': 'market_name',
    '5. Output Size': 'size',
    '5. Time Zone': 'zone',
    '5. volume': 'volume',
    '5.1: Acceleration': 'acceleration',
    '5.1: Fast Limit': 'fastlimit',
    '5.1: Fast Period': 'fastperiod',
    '5.1: FastK Period': 'fastkperiod',
    '5.1: Time Period 1': 'timeperiod1',
    '5.2: FastD Period': 'fastdperiod',
    '5.2: Maximum': 'maximum',
    '5.2: Slow Limit': 'slowlimit',
    '5.2: Slow Period': 'slowperiod',
    '5.2: SlowK Period': 'slowkperiod',
    '5.2: Time Period 2': 'timeperiod2',
    '5.3: FastD MA Type': 'fastdmatype',
    '5.3: MA Type': 'matype',
    '5.3: Signal Period': 'signalperiod',
    '5.3: SlowK MA Type': 'slowkmatype',
    '5.3: Time Period 3': 'timeperiod3',
    '5.4: Fast MA Type': 'fastmatype',
    '5.4: SlowD Period': 'slowdperiod',
    '5.5: Slow MA Type': 'slowmatype',
    '5.5: SlowD MA Type': 'slowdmatype',
    '5.6: Signal MA Type': 'signalmatype',
    '6: Series Type': 'series',
    '6: Volume Factor (vFactor)': 'volume',
    '6. Interval': 'interval',
    '6. Last Refreshed': 'updated',
    '6. market cap (USD)': 'cap',
    '6. Time Zone': 'zone',
    '6. volume': 'volume',
    '6.1: Deviation multiplier for upper band': 'nbdevup',
    '6.1: FastK Period': 'fastkperiod',
    '6.2: Deviation multiplier for lower band': 'nbdevdn',
    '6.2: FastD Period': 'fastdperiod',
    '6.3: FastD MA Type': 'fastdmatype',
    '6.3: MA Type': 'matype',
    '7: Series Type': 'series',
    '7. dividend amount': 'dividend',
    '7. Last Refreshed': 'updated',
    '7. Time Zone': 'zone',
    '8. Bid Price': 'bid_price',
    '8. split coefficient': 'split',
    '8. Time Zone': 'zone',
    '9. Ask Price': 'ask_price',
    'Aroon Down': 'down',
    'Aroon Up': 'up',
    'Global Quote': 'data',
    'Information': 'information',
    'Last Refreshed': 'updated',
    'Meta Data': 'meta',
    'Monthly Adjusted Time Series': 'data',
    'Monthly Time Series': 'data',
    'Rank A: Real-Time Performance': 'real',
    'Rank B: 1 Day Performance': '1day',
    'Rank C: 5 Day Performance': '5day',
    'Rank D: 1 Month Performance': '1month',
    'Rank E: 3 Month Performance': '3month',
    'Rank F: Year-to-Date (YTD) Performance': 'ytd',
    'Rank G: 1 Year Performance': '1year',
    'Rank H: 3 Year Performance': '3year',
    'Rank I: 5 Year Performance': '5year',
    'Rank J: 10 Year Performance': '10year',
    'Realtime Currency Exchange Rate': 'rate',
    'Stock Quotes': 'data',
    'Technical Analysis: ADOSC': 'data',
    'Technical Analysis: ADX': 'data',
    'Technical Analysis: ADXR': 'data',
    'Technical Analysis: APO': 'data',
    'Technical Analysis: AROON': 'data',
    'Technical Analysis: AROONOSC': 'data',
    'Technical Analysis: ATR': 'data',
    'Technical Analysis: BBANDS': 'data',
    'Technical Analysis: BOP': 'data',
    'Technical Analysis: CCI': 'data',
    'Technical Analysis: Chaikin A/D': 'data',
    'Technical Analysis: CMO': 'data',
    'Technical Analysis: DEMA': 'data',
    'Technical Analysis: DX': 'data',
    'Technical Analysis: EMA': 'data',
    'Technical Analysis: HT_DCPERIOD': 'data',
    'Technical Analysis: HT_DCPHASE': 'data',
    'Technical Analysis: HT_PHASOR': 'data',
    'Technical Analysis: HT_SINE': 'data',
    'Technical Analysis: HT_TRENDLINE': 'data',
    'Technical Analysis: HT_TRENDMODE': 'data',
    'Technical Analysis: KAMA': 'data',
    'Technical Analysis: MACD': 'data',
    'Technical Analysis: MACDEXT': 'data',
    'Technical Analysis: MAMA': 'data',
    'Technical Analysis: MFI': 'data',
    'Technical Analysis: MIDPOINT': 'data',
    'Technical Analysis: MIDPRICE': 'data',
    'Technical Analysis: MINUS_DI': 'data',
    'Technical Analysis: MINUS_DM': 'data',
    'Technical Analysis: MOM': 'data',
    'Technical Analysis: NATR': 'data',
    'Technical Analysis: OBV': 'data',
    'Technical Analysis: PLUS_DI': 'data',
    'Technical Analysis: PLUS_DM': 'data',
    'Technical Analysis: PPO': 'data',
    'Technical Analysis: ROC': 'data',
    'Technical Analysis: ROCR': 'data',
    'Technical Analysis: RSI': 'data',
    'Technical Analysis: SAR': 'data',
    'Technical Analysis: SMA': 'data',
    'Technical Analysis: STOCH': 'data',
    'Technical Analysis: STOCHF': 'data',
    'Technical Analysis: STOCHRSI': 'data',
    'Technical Analysis: T3': 'data',
    'Technical Analysis: TEMA': 'data',
    'Technical Analysis: TRANGE': 'data',
    'Technical Analysis: TRIMA': 'data',
    'Technical Analysis: TRIX': 'data',
    'Technical Analysis: ULTOSC': 'data',
    'Technical Analysis: WILLR': 'data',
    'Technical Analysis: WMA': 'data',
    'Time Series (1min)': 'data',
    'Time Series (Daily)': 'data',
    'Time Series (Digital Currency Daily)': 'data',
    'Time Series (Digital Currency Intraday)': 'data',
    'Time Series (Digital Currency Monthly)': 'data',
    'Time Series (Digital Currency Weekly)': 'data',
    'Weekly Adjusted Time Series': 'data',
    'Weekly Time Series': 'data',
} as const
