import styles from './Covers.module.css';

type TokenKind = 'kw' | 'fn' | 'num' | 'plain';

interface CodeLine {
  n: number;
  parts: [string, TokenKind][];
}

const LINES: CodeLine[] = [
  { n: 1, parts: [['void ', 'kw'], ['bms_balance', 'fn'], ['(Cell *c) {', 'plain']] },
  { n: 2, parts: [['\u00A0\u00A0if (c->v > ', 'plain'], ['4.20', 'num'], [') {', 'plain']] },
  { n: 3, parts: [['\u00A0\u00A0\u00A0\u00A0', 'plain'], ['bleed_enable', 'fn'], ['(c->id);', 'plain']] },
  { n: 4, parts: [['\u00A0\u00A0}', 'plain']] },
  { n: 5, parts: [['}', 'plain']] },
];

const TOKEN_CLASS: Record<TokenKind, string | undefined> = {
  kw: styles['tok-kw'],
  fn: styles['tok-fn'],
  num: styles['tok-num'],
  plain: undefined,
};

export default function CodeCover() {
  return (
    <div className={styles.codeWindow}>
      <div className={styles.dots}>
        <span /><span /><span />
      </div>
      {LINES.map((line) => (
        <div key={line.n} className={styles.codeLine}>
          <span className={styles.ln}>{line.n}</span>
          <span className={styles.code}>
            {line.parts.map(([text, kind], i) => (
              <span key={i} className={TOKEN_CLASS[kind]}>
                {text}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}
