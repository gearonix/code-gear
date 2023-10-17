import Q, { createContext as Iu, useRef as To, useEffect as en, useMemo as Nu, useContext as mi, createElement as ff, useState as yu } from "react";
import { jsx as fe, jsxs as Ei, Fragment as Ti } from "react/jsx-runtime";
import { message as df, theme as _f, ConfigProvider as hf } from "antd";
const pf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKsAAADcCAYAAAAPz1FgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABPFSURBVHgB7Z2/b1tXlsfPvaRjJSlWwcSD7YbqFrNFZGCr/YFQf4E1G7vYJhKLxPQ2ooDNKJ2kYgHbs4ClygqmeKSmjGPL3XZigN2pBpBTzXSmu0xkwBpgMGNF4jtzziOfTNF85Ptx3+N9fOdT2BJ/WLb11bnf+733nguQNZ85i1B3qiAINqPrv9lU9dZzEIQYlCEL6k5FKf0E0V1EcGsgCDFQkDL6dmsNAbboK83Tpx3cW1kAQYhBqpVV39l/gIgN/3OqqtsgCDFJR6wXwz4uDj3TBkGIiXkbwEIFfUgfVYaeEQsgJEKDSSiWChAq0OTqOxCEBJizASxU7Ql1fuTzCp6BICTAjFh56EcSqgoQao8OCEICktsA36OOFyqACycgCAlIJtbgydSoryRiFRKRSKwKSg6EESrjTqi8gjCB2GLV9dYmzfGr4d8gYhWSEU+sdafqLaFGowKCkIDoYm048+RTHYgKwiIIQgIii1Wflmj4j14lKYP9GAQhAdGWW3uz/9j7URHcJdirtUEQYhCpsmrwqmpsVML3C8UmfGWlSVU/U02EVFchLqErK1XVFTCAVFchLuEqa0Kv+tYXRbXjfvXpOghCBEJVVm24GqLCBtxpGanUQnEIJVaMslIVEoXQFMEKUZgs1s+dZUhp9YkFy8ezQRBCMFGsWpduQIpQOrCl6/sOr4yBIIxholjTsAAjvsaqeq2PpFOLMI7xacB/OovKJRFliALVdKG7TVlsBwRhgPGV1c1+84lXZSkm87wsRWYgCH30+CdLU9t8wl6WV8y4UYaIVmDGihWnvwe1wh1depWWJmEi2kIz1rOq261XEw8CZo5qo+ruwsPaAQiFIlisq868mtOvwF46Xu+svVoThEIQLNYpJAEx6VCC0JYEYfYJ9qz5OY1aeZMgeL62CsJMMm6CVYGc0RftobrT4gWGVRBmimAbQN/sWAcD7aLT7wnbFouQf8x2EbQP3ofrSPQ1G8y6WC/wfa2q7x/CHW8nmZAzsrkAwyqwqlBXod7qWYQ5OICdmvThygGFqawj6FmE1/pILEI+GBddFaXaSPSVE4LFWi5e81+JvuxmXHRl9ERrTukorXdc9/ypRF/TZ/xGlnoLQfCQTeHTZ/wEC+XSCh+JvqbP+GMtdadJ3yA5Lj0aib4yZtKxFqmswUj0BdkyqbLKJCsCfV/bksZz6TCx1xVNslisFRCiIBvDU2ByY7a6s0PVdQ2EOEj0ZZAwy61y1ik+FXTdHdn1ZYZQLS+9uCaDzizFQLWx52ubIEQibH/WWdiIbRsSfUUkdJt2mWilhhx4DEnoLYL94yGCeWTXV0giXS2kbreO6B1y+Vr6SPQ1gqj3YFVN3NgihEairwGiiZWR3HUqyK6vOGLltkJXqbqKHZgSxY2+oouV4T0DqI/sa9pWKArXEyGeWBnxr7ZQmOgrvliZO06DKuwDEKxg1nd9JRMrU3e2qMLK9UB2MZPRV3KxMiJYWyGLoKnanrdmwSKYESsjlsBqZiH6MidW5jNnUZX0E5A9BBaT3+jLrFiZ3lEYTgkqINhM7qIv82L1kZWufIBwopQ6yINFSE+sTG8fLE+8KiBYj+3RV7piZbyjHJrSApD+A/nByugrfbH6SJXNIx3PImB31waLkJ1YfTiTRfKysq8gV9gQfWUvVkasQY6ZXvQ1HbH6iGjzTOa+drpi9RHR5pnMRGuHWH1EtHmGRbuUpqe1S6w+LFoXlpX2FhUqIOSGNCdidop1EO7tj2qNIhQ5RpMfOqjcXXhY2wGD2C9WH+88vV4Vi5AnvOSgZqrK5kesPm987ccgFsF+FJx4EzADVTZ/Yh1EVsVyg0K1475LXjZBX6/MxfrTTzYc1ABnZ2r75OBuB0zAFqHna+ViCrtJlBhkKtaf3vzlJoLaGniorRB3f/jmvpkesL5FQLghy7nWEluwmYn12s0NPvLSgNF/iw503e0z9+zg5GAnefvHXtPeqlgES2Efe06C/XUt0gUrqYv1w5v/RaIpsVAnR0/Ku4KzbdgirNIfvEL5XxUEq0AFq/BwpRX29amJdX65MX+lfJUrWyPO++lv1kTstl4++p82mEBWx6ykbwnaYV6biliv3fpiEVz9hP70CiTnGbju7vHjXzXBBLI6ZhcRLIFxsV67tbGGCFzBzE5wLnxtqW3UIsjqmA2EmnQZEysP+++Urj7wfEjakEUwHn3J6th0UfAMr5Jgx+SwRsQ6v/xl5UoZuV9A1hUqnehLVsemgrdw8NWn64HPQ0I8oZbw0JA/jUffIhjztYysjk2FcROuRGLliRSiPjTuT+OSTvRVFYuQKR2cc6+PsgOxxcoVtVzGI2uEOkx60ZdYhJRBgG3YW9kafjyWWK0Y+sPTpuirZTT6ktWxdOE4C6m6DqUDkcWaM6G+Ia3oS1bHUsE7cbD3ae3yYxGhNX5uulaFPGM++qrI6ph5yLt+MOhdI4l1xK6pvMM72bfN+lqxCKYY9q6hxdrPUp/DLJJS9CUWISHsXa+6C351DS3Wa59sPM+dT41KGtHXZ84ilHRDLEI8BnPXUGKlPJXW0At2hTv5WgB39/jrX0XacxlIzyKQaPUNEIsQGgRswt6qN9GaKNbczv7NYTb6YmR1LDxsBR6ufND7cAKFrKqjSCf6qsrq2GR8K6AnvtKVK4M8kKqg1g5PMq/d2nB4xIGksBfbW1mlb8YCzXx5x3wHhLfp3xM8trJKVR2PUnDw49lpzci5MabhzMNrWBaLcBlazXoKX9WWy+NfpWV4CoJsgYtq15hQmV5E06Qq24TPnWXQak2iLy4K+iOEMZV1pnPVBNB/GgkKaSHhvtE+ToHI6pgHr2YFetYrV7pVEC6DsHt+frqQmVAZ3sxx4WtdjnA6UETO3vm7wMr64a2NJwpBOpyAV03bNAhRNb3bBhvg6Kt3L0Nhzo5xIhAs1psbr6zdq5oV5EuVi+vGjs0YRt3efwIKC1FQeFQZaQPmb32xWGShsi9FqqRnZ6fXbRUqg6fdGt8QCAVhZBpQclUl/hmCfMNDfvlc1b43FfynSZPSg/o+LQdjFQpAQHRVwLiEhnxEVbPGl4YEofuCclkoAiP/lVrBR1AkaJbPQ37ehFo0RlZWBJxXBfAB7E01Ys1mXzoJBaWfef+SAhBkAyow47BQlXKXfnhkaAvgNPAWDIrhV8GFk5FiLUISoFy1fvw4x0IFr6o6RamqZFhP3vKsf29iN5Ht0GTq+PHdJuQYXd93ClNVmW5AZZ11aGXuO8grDWde/bXk0LyiWKuL70OnGJnHEKjgFeSRulNVr/VRUVatLlC08LFTOymkWMnmLXOLTsgLVE31nf0HlKdyz4YKFAzKv725RTHFShPIfgt5++FNK1RNETFeu/uZAD3bVlSxMg1u2gG2wkN+ff+Qqimf1KhAkXHdNv9WZLECd5exTrBvRHpYqNn+ON7jLZoBJwWu3dwoSHjXJ42OLFGhgF9DaZNm+asgXEAFpQ17ny7xx+WAV3QK1Segf3L12q2NTfr44Oycz1ZltOuKJ0+vy2uIbgMVyq2Iw6ju04sPRz0vpwTAfEeWYQZEKld3BsPHefw+rSM9K7rwAooOAh9DP+IWn9f+/YtVMM1raNA3YkuEGkzPArxpKDx6i6B2c71mbphq3yI8Z9HOm1qO3qttSXOLSXRbg5+NtAG8P6Arx7BH0tutRb7WZKdBRvpfDdPBvZWFwQcCN60WosVlQli0LnZ3jTUjZrz+V2qz6M0tvGPne7Xm4GOBYv3JJxs7WsEaCJNJpxlxpcDNLd6qqsyYo9hfVhXgIQjhSecergoUrPU7KvcX8LD21umNsWdXpHdAAtKIvgrQ+n2wefAwpXFvfO/n//KuNAaLzSIJq/7+z/+1+v4//LP6y+9/m1y0v3v6DH530IJ/uvEtO2YFM9eRpUNyrdG/c2QvhLGVlbfRlctXn0t1NUA6zYgrs3Tr4bh7W5mJR1g/vPlL+s9Q0lDYJKbv4WJyHn0FXYE5SIg7BaS6pojZe7iYHPZ1JaHuklAn7tcN1RxAqmvKFDj68lbw9lZWw7xW7sGyiYJFX1GEyoQWq+SuGWP6CnqGoy8ki6DU1FOEqEJlIvUIIjvQIDvwAIQsSeMeruo0rzQK61GHidzQaiZuxc4jMxJ90erUOq1OxWpzH1msnA5cKV09Ev86RUxHX9lcadTpb05pQ0xitQr0thAW+4pMW2grxF2jXRBTiL4Q8QDepZWp/u3WcYklVkYEaxG2Rl8IJ6jd7bjD/jCxxcqIYC0jrejLJYugNW8XrYR9m7chZQ7Xk1bTQRKJlRHBWsr0oq/E3jSIxGJlRLBW84yir90soi8S6TafLYOUMCJWppcSvLMDShVxZ7v9pBh90QzqI9C4PWrDtEmMidWHVrrIlKPsI7CZNHZ9ZYBxsTJiC3KD+egrRVIRKyO2IEdcWISzA6NX0hsmNbH6XLv15Sq4ZAukytpPGtGXQVIXq4942ZyRRvSVkMzEyvS8LPd3EmuQI8xHXzHJVKw+3t5YREesQY7g6+wRmz+e69a0LMJUxOojfjanTCn6mqpYfUS0uWUny8bLVojVh+0BLdptKtncnR/IHmjKav/46L6RnVXjv5SFyEQsh3ixl/uL1DqFg6Vi9WHRnpWwoQFuiEXICSn6WavFOoj42hxBVRZR1V4+utsGg+RGrD7ia/MDLQJt/fDo/jYYIndi9RFfmw+4O/iPZ2rdhC3IrVh9WLTnZXdZoVoTi2ApZAvIxy4lFez0xcrHgA2d0xFfazEG0oKpilXfbq0hwBbfJ+8dieDuIwP3HsWlt5zrropFsI4TUO5SXMFOR6x8mS6UNt+6SBf52h514EJ324RofV+LSt2Qlp3WEFuw2YqVr4A8LW0iYohenKrp8qVdBk5JeqK9QumBWARbOKFl2utRPWxmYh0Y8qNVOAXPEN3d4TuR4sK+ln5YViT6mjIxJl3pizVoyI9OR3ztzNE+fnRvKeyL0xNrhCE/Ih2yCG3Tvpb+Kz4WizAVdkiw62FemIpYYw/5EfF8bbe7C7+uJd484R1wvDK3LL42exDUUpilWbNiNTfkR0TxRRIt8bU5xfOvp9cnnaw1I1Ye8l+XHiDgKkyXnq+dgwMTCw2ypJsdpJ3tl4/ub417TWKxZjXkR8S4r5WtiqkzMc6KL1Ye8pV+QD8SVl/J2M9rjYiWkSXdFFHQPP76Xi346ajUnYrC0gNQuAy5wqyvla2K6XB2fvpBkHeNJFZd/w1FUW7DsiE/Kp1+a8YmGEB8rVnGeddwYvVm+doBmKmhr+PtQ8DurilfK1sVjUDe9XRhVHUdL9bcDvnREF9rF0G562ixelFUeW0GhvyIkK9VVGkNNcWVJd2YBEy03hbrbA75UUnF18pWxdCc0BLsB8MPvhErD/lQcrJffbIayms1WYTzlrF9CLJVMRSjrIAq7pAfjTR8rSzpBkOpwPrLoS4vStVbz6HYQ340UB14vtbQ1Tnia0dDP8RPf3h079LEXqnbrVdSUWORTl4rWxV7KOjQJGvh0kMkVr402OolU8vpKK13XPf8qQmLIFsV30CTrEsBgFJ39p8AznaOmhXia81y5pYrJ4//+4X/uUbsvgDBCC7gn2AOjN12cvz13ebLR/eWSudqgQpKCwpGWXcv2QBN/8NtEBJBM9c2dt3rsLfSMHmxrs/3B3c7x9/cX2XRugi79AU7UAA0upfmUmX4kcQ6B0IcDF9RPonve3s9+UxbowhLul3ES2LV0ORKoNogRIK85AG+6y5kJdRh2CIcf3NvgcNzhGKMjmX+BaH7La3UVEEIQ++K8q/MX1Eeh/4qT7sIWxV1//cmCBPhXBXn2JvaIdRBBn2tNxmbAV+rtKpc+vzig/r+oewLGA1PoMhArZs48p0Vs7C/dngjdvnNE91tsQJDZDyBMkl/MsZ/751ZmYzpi496Q1sHBA/6qW5OcwJlEn8yRn62ljN7cCkG1IOf9HtJFR2eQC3B3motjcx0muRNtOhisFh7mzKKG2PZPIEyyaBobY69lC51Bj8vD7+giN7Vm0AB1kyt6ecFFi391rT1WLlS3UuVdfQZrLqzQ4Jdg1knxxOoNLBNtMO7rvTIV72GLZjxyRYNf7uzMoEyBS8w8MYZS1bF3ooJg49ie8ew9dEMbszurUDNuC81Qe8UAzpTibxGnHDVgS8m/4bo1mBWwN6NMEWYQJmCK+3U0oOu+nb4ockdWe44DaqwDyDHFHUCZZosFxd42fj7oY6CYdsHbdGEaxPyBldT5a6bOicl9CB7sEX2YCVF0T6jydX14Qd1qLfu1bbytmBwMYESoRqH7MFWqauW0jq9QCPhyD83WsvLz51lpbRj+aRLJlAZ0tswg47JuGuUBWCiiZXxOrfoQ7Ct10BvyOfz/FsgZI4pP8uR2cuA64bC2YBBOCXYW1mwxhb4s/zekL8FwlTg1bCz7ul1ymgT6UIj7gY9F72yDjLNKutX0jnYmbUNJ3mnd2oBDyNX2RGNLS4/bYK6s9pPCyqQNiLS3OClBrR8G/oNrqodP/b2K4zEjFh96k4VUK0ppYw3zfCyUhefwnvQFJHmhwhVdmRcNYhZsfqQPQBvdqhWFKrFuOlBP8znlYymBPr5ZlKVDUoABklHrMNwxXVhEbSuUDb3s554VeXyi7ADvHnGxe+839+DtlTQ2SKoyvKkjLPbSe/PRqyCMMBPPtnY0Qr8LagTh3+fEghCxvz19///v+//47+9oEx1vnyu/uPPf/g/GUGF2eJvhls9piH+sCEAAAAASUVORK5CYII=", mf = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAxNyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0Ljk4OTcgMTUuNDA5NEwxNC40MjE2IDE1Ljc3NTJDMTQuNzcxMiAxNS40NTUxIDE1LjAzMzQgMTQuOTk3OCAxNS4wMzM0IDE0LjU0MDZDMTUuMDMzNCAxMy43NjMzIDE0LjY4MzggMTMuMTIzMSAxMy41NDc1IDEyLjU3NDRMMy44NDU3NSA4LjEzOTA3QzEuODc5MTcgNy4yMjQ1NiAwLjY1NTUxOCA2LjA4MTQ0IDAuNjU1NTE4IDQuMDIzODFDMC42NTU1MTggMi4xNDkwOCAxLjU3MzI1IDAuOTE0NTAyIDIuOTcxNzEgMEMyLjc1MzIgMC4zMjAwNzYgMi42MjIxIDAuNzMxNjAyIDIuNjIyMSAxLjIzNDU4QzIuNjIyMSAyLjM3NzcgMy41Mzk4NCAyLjg4MDY4IDQuNDU3NTcgMy4yOTIyMUwxMy44OTcyIDcuNjM2MDlDMTUuNjAxNSA4LjQxMzQyIDE3IDkuNjQ3OTkgMTcgMTEuNzk3MUMxNyAxMy41MzQ2IDE2LjIxMzQgMTQuNjMyIDE0Ljk4OTcgMTUuNDA5NFoiIGZpbGw9IiMwMTY4QTIiLz4KPHBhdGggZD0iTTEwLjU5MzMgMTEuMTM1OUwxMy42NTI0IDEyLjU1MzRDMTQuNzg4NyAxMy4xMDIxIDE1LjEzODMgMTMuNjk2NSAxNS4xMzgzIDE0LjUxOTZDMTUuMTM4MyAxNC45NzY4IDE0Ljg3NjEgMTUuNDM0MSAxNC41MjY0IDE1Ljc1NDJMOS4zNjk2MyAxMy4zNzY1TDEwLjI0MzcgMTIuODczNUMxMC45ODY2IDEyLjQ2MiAxMS4yMDUxIDEyLjE4NzYgMTEuMjA1MSAxMS45MTMzQzExLjI0ODggMTEuNTkzMiAxMS4wNzQgMTEuMzY0NiAxMC41OTMzIDExLjEzNTlaIiBmaWxsPSIjMDE2OEExIi8+CjxwYXRoIGQ9Ik01LjE1NjgxIDIyLjA4NTRDNC40NTc1OCAyMi40OTcgMy44NDU3NiAyMi43NzEzIDMuMTkwMjMgMjIuNzcxM0MxLjQ4NTg2IDIyLjc3MTMgMC4wODc0MDM1IDIxLjMwODEgMCAxOS41NzA1TDMuMjc3NjMgMTcuNTEyOUw4LjQzNDQ0IDE5LjkzNjNMNS4xNTY4MSAyMi4wODU0WiIgZmlsbD0iIzAxNjhBMSIvPgo8cGF0aCBkPSJNNi45MzI1NiAxMy4yODAxTDQuNDg1MjYgMTIuMTM3QzMuMzkyNzEgMTEuNjM0IDIuMzg3NTcgMTEuMjIyNSAyLjM4NzU3IDkuOTQyMTZDMi4zODc1NyA5LjMwMiAyLjU2MjM4IDguOTM2MiAyLjg2ODI5IDguNjE2MTNMOC4wMjUxIDEwLjk5MzhMNi43NTc3NSAxMS43NzEyQzYuNDA4MTQgMTEuOTk5OCA2LjE0NTkzIDEyLjE4MjcgNi4xNDU5MyAxMi41MDI4QzYuMTQ1OTMgMTIuNzc3MSA2LjQ5NTU0IDEzLjA1MTUgNi45MzI1NiAxMy4yODAxWiIgZmlsbD0iIzE1NTQ3NyIvPgo8cGF0aCBkPSJNMTUuOTA3NCAyM0MxNC41OTY0IDIxLjk0ODMgMTMuMTk3OSAyMS4yNjI0IDExLjUzNzMgMjAuNDM5NEwzLjc1ODM1IDE2LjgyNzFDMS43OTE3NyAxNS45MTI2IDAuNDgwNzEzIDE0LjY3OCAwLjQ4MDcxMyAxMi42NjYxQzAuNDgwNzEzIDEwLjY1NDIgMS4zOTg0NSA5LjY5Mzk5IDIuNTc4NCA4LjkxNjY2TDMuMDE1NDIgOC42NDIzMUMyLjcwOTUgOC45NjIzOSAyLjUzNDcgOS4zMjgxOSAyLjUzNDcgOS45NjgzNEMyLjUzNDcgMTEuMjAyOSAzLjU4MzU0IDExLjY2MDIgNC42MzIzOCAxMi4xNjMxTDEzLjY3ODcgMTYuMzI0MUMxNS4yNTE5IDE3LjAxIDE2LjY5NDEgMTguMjQ0NiAxNi42OTQxIDIwLjM0NzlDMTYuNzgxNSAyMS40OTExIDE2LjM0NDUgMjIuNDk3IDE1LjkwNzQgMjNaIiBmaWxsPSIjMTU1NDc3Ii8+Cjwvc3ZnPgo=", dg = {
  logo: pf,
  svgLogo: mf
};
var Oo = function(e, r) {
  return Oo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, Oo(e, r);
};
function ve(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  Oo(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
var E = function() {
  return E = Object.assign || function(r) {
    for (var t, n = 1, o = arguments.length; n < o; n++) {
      t = arguments[n];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, E.apply(this, arguments);
};
function ye(e, r) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
}
function Me(e, r, t, n) {
  function o(i) {
    return i instanceof t ? i : new t(function(a) {
      a(i);
    });
  }
  return new (t || (t = Promise))(function(i, a) {
    function s(l) {
      try {
        c(n.next(l));
      } catch (f) {
        a(f);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (f) {
        a(f);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(s, u);
    }
    c((n = n.apply(e, r || [])).next());
  });
}
function ke(e, r) {
  var t = { label: 0, sent: function() {
    if (i[0] & 1)
      throw i[1];
    return i[1];
  }, trys: [], ops: [] }, n, o, i, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (t = 0)), t; )
      try {
        if (n = 1, o && (i = c[0] & 2 ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done)
          return i;
        switch (o = 0, i && (c = [c[0] & 2, i.value]), c[0]) {
          case 0:
          case 1:
            i = c;
            break;
          case 4:
            return t.label++, { value: c[1], done: !1 };
          case 5:
            t.label++, o = c[1], c = [0];
            continue;
          case 7:
            c = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (i = t.trys, !(i = i.length > 0 && i[i.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              t = 0;
              continue;
            }
            if (c[0] === 3 && (!i || c[1] > i[0] && c[1] < i[3])) {
              t.label = c[1];
              break;
            }
            if (c[0] === 6 && t.label < i[1]) {
              t.label = i[1], i = c;
              break;
            }
            if (i && t.label < i[2]) {
              t.label = i[2], t.ops.push(c);
              break;
            }
            i[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        c = r.call(e, t);
      } catch (l) {
        c = [6, l], o = 0;
      } finally {
        n = i = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function ne(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, i; n < o; n++)
      (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
var bn = "Invariant Violation", la = Object.setPrototypeOf, Ef = la === void 0 ? function(e, r) {
  return e.__proto__ = r, e;
} : la, Au = (
  /** @class */
  function(e) {
    ve(r, e);
    function r(t) {
      t === void 0 && (t = bn);
      var n = e.call(this, typeof t == "number" ? bn + ": " + t + " (see https://github.com/apollographql/invariant-packages)" : t) || this;
      return n.framesToPop = 1, n.name = bn, Ef(n, r.prototype), n;
    }
    return r;
  }(Error)
);
function Qe(e, r) {
  if (!e)
    throw new Au(r);
}
var Su = ["debug", "log", "warn", "error", "silent"], Tf = Su.indexOf("log");
function pt(e) {
  return function() {
    if (Su.indexOf(e) >= Tf) {
      var r = console[e] || console.log;
      return r.apply(console, arguments);
    }
  };
}
(function(e) {
  e.debug = pt("debug"), e.log = pt("log"), e.warn = pt("warn"), e.error = pt("error");
})(Qe || (Qe = {}));
var Oi = "3.8.5";
function ue(e) {
  try {
    return e();
  } catch {
  }
}
const fa = ue(function() {
  return globalThis;
}) || ue(function() {
  return window;
}) || ue(function() {
  return self;
}) || ue(function() {
  return global;
}) || ue(function() {
  return ue.constructor("return this")();
});
var da = /* @__PURE__ */ new Map();
function vo(e) {
  var r = da.get(e) || 1;
  return da.set(e, r + 1), "".concat(e, ":").concat(r, ":").concat(Math.random().toString(36).slice(2));
}
function Du(e, r) {
  r === void 0 && (r = 0);
  var t = vo("stringifyForDisplay");
  return JSON.stringify(e, function(n, o) {
    return o === void 0 ? t : o;
  }, r).split(JSON.stringify(t)).join("<undefined>");
}
function mt(e) {
  return function(r) {
    for (var t = [], n = 1; n < arguments.length; n++)
      t[n - 1] = arguments[n];
    if (typeof r == "number") {
      var o = r;
      r = vi(o), r || (r = Ri(o, t), t = []);
    }
    e.apply(void 0, [r].concat(t));
  };
}
var S = Object.assign(function(r, t) {
  for (var n = [], o = 2; o < arguments.length; o++)
    n[o - 2] = arguments[o];
  r || Qe(r, vi(t, n) || Ri(t, n));
}, {
  debug: mt(Qe.debug),
  log: mt(Qe.log),
  warn: mt(Qe.warn),
  error: mt(Qe.error)
});
function Z(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return new Au(vi(e, r) || Ri(e, r));
}
var _a = Symbol.for("ApolloErrorMessageHandler_" + Oi);
function Uu(e) {
  return typeof e == "string" ? e : Du(e, 2).slice(0, 1e3);
}
function vi(e, r) {
  if (r === void 0 && (r = []), !!e)
    return fa[_a] && fa[_a](e, r.map(Uu));
}
function Ri(e, r) {
  if (r === void 0 && (r = []), !!e)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: Oi,
      message: e,
      args: r.map(Uu)
    })));
}
function Of(e, r) {
  if (!!!e)
    throw new Error(r);
}
const Pu = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: [
    "name",
    "variableDefinitions",
    "directives",
    "selectionSet"
  ],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: [
    "description",
    "name",
    "type",
    "defaultValue",
    "directives"
  ],
  InterfaceTypeDefinition: [
    "description",
    "name",
    "interfaces",
    "directives",
    "fields"
  ],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, vf = new Set(Object.keys(Pu));
function ha(e) {
  const r = e == null ? void 0 : e.kind;
  return typeof r == "string" && vf.has(r);
}
var pa;
(function(e) {
  e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription";
})(pa || (pa = {}));
var $;
(function(e) {
  e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension";
})($ || ($ = {}));
function ma(e) {
  return e === 9 || e === 32;
}
function Rf(e, r) {
  const t = e.replace(/"""/g, '\\"""'), n = t.split(/\r\n|[\n\r]/g), o = n.length === 1, i = n.length > 1 && n.slice(1).every((_) => _.length === 0 || ma(_.charCodeAt(0))), a = t.endsWith('\\"""'), s = e.endsWith('"') && !a, u = e.endsWith("\\"), c = s || u, l = !(r != null && r.minimize) && // add leading and trailing new lines only if it improves readability
  (!o || e.length > 70 || c || i || a);
  let f = "";
  const d = o && ma(e.charCodeAt(0));
  return (l && !d || i) && (f += `
`), f += t, (l || c) && (f += `
`), '"""' + f + '"""';
}
const gf = 10, wu = 2;
function bf(e) {
  return rn(e, []);
}
function rn(e, r) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return If(e, r);
    default:
      return String(e);
  }
}
function If(e, r) {
  if (e === null)
    return "null";
  if (r.includes(e))
    return "[Circular]";
  const t = [...r, e];
  if (Nf(e)) {
    const n = e.toJSON();
    if (n !== e)
      return typeof n == "string" ? n : rn(n, t);
  } else if (Array.isArray(e))
    return Af(e, t);
  return yf(e, t);
}
function Nf(e) {
  return typeof e.toJSON == "function";
}
function yf(e, r) {
  const t = Object.entries(e);
  return t.length === 0 ? "{}" : r.length > wu ? "[" + Sf(e) + "]" : "{ " + t.map(
    ([o, i]) => o + ": " + rn(i, r)
  ).join(", ") + " }";
}
function Af(e, r) {
  if (e.length === 0)
    return "[]";
  if (r.length > wu)
    return "[Array]";
  const t = Math.min(gf, e.length), n = e.length - t, o = [];
  for (let i = 0; i < t; ++i)
    o.push(rn(e[i], r));
  return n === 1 ? o.push("... 1 more item") : n > 1 && o.push(`... ${n} more items`), "[" + o.join(", ") + "]";
}
function Sf(e) {
  const r = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
  if (r === "Object" && typeof e.constructor == "function") {
    const t = e.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return r;
}
function Df(e) {
  return `"${e.replace(Uf, Pf)}"`;
}
const Uf = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function Pf(e) {
  return wf[e.charCodeAt(0)];
}
const wf = [
  "\\u0000",
  "\\u0001",
  "\\u0002",
  "\\u0003",
  "\\u0004",
  "\\u0005",
  "\\u0006",
  "\\u0007",
  "\\b",
  "\\t",
  "\\n",
  "\\u000B",
  "\\f",
  "\\r",
  "\\u000E",
  "\\u000F",
  "\\u0010",
  "\\u0011",
  "\\u0012",
  "\\u0013",
  "\\u0014",
  "\\u0015",
  "\\u0016",
  "\\u0017",
  "\\u0018",
  "\\u0019",
  "\\u001A",
  "\\u001B",
  "\\u001C",
  "\\u001D",
  "\\u001E",
  "\\u001F",
  "",
  "",
  '\\"',
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 2F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 3F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 4F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\\\",
  "",
  "",
  "",
  // 5F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  // 6F
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\\u007F",
  "\\u0080",
  "\\u0081",
  "\\u0082",
  "\\u0083",
  "\\u0084",
  "\\u0085",
  "\\u0086",
  "\\u0087",
  "\\u0088",
  "\\u0089",
  "\\u008A",
  "\\u008B",
  "\\u008C",
  "\\u008D",
  "\\u008E",
  "\\u008F",
  "\\u0090",
  "\\u0091",
  "\\u0092",
  "\\u0093",
  "\\u0094",
  "\\u0095",
  "\\u0096",
  "\\u0097",
  "\\u0098",
  "\\u0099",
  "\\u009A",
  "\\u009B",
  "\\u009C",
  "\\u009D",
  "\\u009E",
  "\\u009F"
], gi = Object.freeze({});
function Ae(e, r, t = Pu) {
  const n = /* @__PURE__ */ new Map();
  for (const p of Object.values($))
    n.set(p, Hf(r, p));
  let o, i = Array.isArray(e), a = [e], s = -1, u = [], c = e, l, f;
  const d = [], _ = [];
  do {
    s++;
    const p = s === a.length, v = p && u.length !== 0;
    if (p) {
      if (l = _.length === 0 ? void 0 : d[d.length - 1], c = f, f = _.pop(), v)
        if (i) {
          c = c.slice();
          let b = 0;
          for (const [N, g] of u) {
            const I = N - b;
            g === null ? (c.splice(I, 1), b++) : c[I] = g;
          }
        } else {
          c = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(c)
          );
          for (const [b, N] of u)
            c[b] = N;
        }
      s = o.index, a = o.keys, u = o.edits, i = o.inArray, o = o.prev;
    } else if (f) {
      if (l = i ? s : a[s], c = f[l], c == null)
        continue;
      d.push(l);
    }
    let O;
    if (!Array.isArray(c)) {
      var h, m;
      ha(c) || Of(!1, `Invalid AST Node: ${bf(c)}.`);
      const b = p ? (h = n.get(c.kind)) === null || h === void 0 ? void 0 : h.leave : (m = n.get(c.kind)) === null || m === void 0 ? void 0 : m.enter;
      if (O = b == null ? void 0 : b.call(r, c, l, f, d, _), O === gi)
        break;
      if (O === !1) {
        if (!p) {
          d.pop();
          continue;
        }
      } else if (O !== void 0 && (u.push([l, O]), !p))
        if (ha(O))
          c = O;
        else {
          d.pop();
          continue;
        }
    }
    if (O === void 0 && v && u.push([l, c]), p)
      d.pop();
    else {
      var T;
      o = {
        inArray: i,
        index: s,
        keys: a,
        edits: u,
        prev: o
      }, i = Array.isArray(c), a = i ? c : (T = t[c.kind]) !== null && T !== void 0 ? T : [], s = -1, u = [], f && _.push(f), f = c;
    }
  } while (o !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function Hf(e, r) {
  const t = e[r];
  return typeof t == "object" ? t : typeof t == "function" ? {
    enter: t,
    leave: void 0
  } : {
    enter: e.enter,
    leave: e.leave
  };
}
function Gf(e) {
  return Ae(e, Lf);
}
const Cf = 80, Lf = {
  Name: {
    leave: (e) => e.value
  },
  Variable: {
    leave: (e) => "$" + e.name
  },
  // Document
  Document: {
    leave: (e) => y(e.definitions, `

`)
  },
  OperationDefinition: {
    leave(e) {
      const r = U("(", y(e.variableDefinitions, ", "), ")"), t = y(
        [
          e.operation,
          y([e.name, r]),
          y(e.directives, " ")
        ],
        " "
      );
      return (t === "query" ? "" : t + " ") + e.selectionSet;
    }
  },
  VariableDefinition: {
    leave: ({ variable: e, type: r, defaultValue: t, directives: n }) => e + ": " + r + U(" = ", t) + U(" ", y(n, " "))
  },
  SelectionSet: {
    leave: ({ selections: e }) => se(e)
  },
  Field: {
    leave({ alias: e, name: r, arguments: t, directives: n, selectionSet: o }) {
      const i = U("", e, ": ") + r;
      let a = i + U("(", y(t, ", "), ")");
      return a.length > Cf && (a = i + U(`(
`, yt(y(t, `
`)), `
)`)), y([a, y(n, " "), o], " ");
    }
  },
  Argument: {
    leave: ({ name: e, value: r }) => e + ": " + r
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name: e, directives: r }) => "..." + e + U(" ", y(r, " "))
  },
  InlineFragment: {
    leave: ({ typeCondition: e, directives: r, selectionSet: t }) => y(
      [
        "...",
        U("on ", e),
        y(r, " "),
        t
      ],
      " "
    )
  },
  FragmentDefinition: {
    leave: ({ name: e, typeCondition: r, variableDefinitions: t, directives: n, selectionSet: o }) => (
      // or removed in the future.
      `fragment ${e}${U("(", y(t, ", "), ")")} on ${r} ${U("", y(n, " "), " ")}` + o
    )
  },
  // Value
  IntValue: {
    leave: ({ value: e }) => e
  },
  FloatValue: {
    leave: ({ value: e }) => e
  },
  StringValue: {
    leave: ({ value: e, block: r }) => r ? Rf(e) : Df(e)
  },
  BooleanValue: {
    leave: ({ value: e }) => e ? "true" : "false"
  },
  NullValue: {
    leave: () => "null"
  },
  EnumValue: {
    leave: ({ value: e }) => e
  },
  ListValue: {
    leave: ({ values: e }) => "[" + y(e, ", ") + "]"
  },
  ObjectValue: {
    leave: ({ fields: e }) => "{" + y(e, ", ") + "}"
  },
  ObjectField: {
    leave: ({ name: e, value: r }) => e + ": " + r
  },
  // Directive
  Directive: {
    leave: ({ name: e, arguments: r }) => "@" + e + U("(", y(r, ", "), ")")
  },
  // Type
  NamedType: {
    leave: ({ name: e }) => e
  },
  ListType: {
    leave: ({ type: e }) => "[" + e + "]"
  },
  NonNullType: {
    leave: ({ type: e }) => e + "!"
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description: e, directives: r, operationTypes: t }) => U("", e, `
`) + y(["schema", y(r, " "), se(t)], " ")
  },
  OperationTypeDefinition: {
    leave: ({ operation: e, type: r }) => e + ": " + r
  },
  ScalarTypeDefinition: {
    leave: ({ description: e, name: r, directives: t }) => U("", e, `
`) + y(["scalar", r, y(t, " ")], " ")
  },
  ObjectTypeDefinition: {
    leave: ({ description: e, name: r, interfaces: t, directives: n, fields: o }) => U("", e, `
`) + y(
      [
        "type",
        r,
        U("implements ", y(t, " & ")),
        y(n, " "),
        se(o)
      ],
      " "
    )
  },
  FieldDefinition: {
    leave: ({ description: e, name: r, arguments: t, type: n, directives: o }) => U("", e, `
`) + r + (Ea(t) ? U(`(
`, yt(y(t, `
`)), `
)`) : U("(", y(t, ", "), ")")) + ": " + n + U(" ", y(o, " "))
  },
  InputValueDefinition: {
    leave: ({ description: e, name: r, type: t, defaultValue: n, directives: o }) => U("", e, `
`) + y(
      [r + ": " + t, U("= ", n), y(o, " ")],
      " "
    )
  },
  InterfaceTypeDefinition: {
    leave: ({ description: e, name: r, interfaces: t, directives: n, fields: o }) => U("", e, `
`) + y(
      [
        "interface",
        r,
        U("implements ", y(t, " & ")),
        y(n, " "),
        se(o)
      ],
      " "
    )
  },
  UnionTypeDefinition: {
    leave: ({ description: e, name: r, directives: t, types: n }) => U("", e, `
`) + y(
      ["union", r, y(t, " "), U("= ", y(n, " | "))],
      " "
    )
  },
  EnumTypeDefinition: {
    leave: ({ description: e, name: r, directives: t, values: n }) => U("", e, `
`) + y(["enum", r, y(t, " "), se(n)], " ")
  },
  EnumValueDefinition: {
    leave: ({ description: e, name: r, directives: t }) => U("", e, `
`) + y([r, y(t, " ")], " ")
  },
  InputObjectTypeDefinition: {
    leave: ({ description: e, name: r, directives: t, fields: n }) => U("", e, `
`) + y(["input", r, y(t, " "), se(n)], " ")
  },
  DirectiveDefinition: {
    leave: ({ description: e, name: r, arguments: t, repeatable: n, locations: o }) => U("", e, `
`) + "directive @" + r + (Ea(t) ? U(`(
`, yt(y(t, `
`)), `
)`) : U("(", y(t, ", "), ")")) + (n ? " repeatable" : "") + " on " + y(o, " | ")
  },
  SchemaExtension: {
    leave: ({ directives: e, operationTypes: r }) => y(
      ["extend schema", y(e, " "), se(r)],
      " "
    )
  },
  ScalarTypeExtension: {
    leave: ({ name: e, directives: r }) => y(["extend scalar", e, y(r, " ")], " ")
  },
  ObjectTypeExtension: {
    leave: ({ name: e, interfaces: r, directives: t, fields: n }) => y(
      [
        "extend type",
        e,
        U("implements ", y(r, " & ")),
        y(t, " "),
        se(n)
      ],
      " "
    )
  },
  InterfaceTypeExtension: {
    leave: ({ name: e, interfaces: r, directives: t, fields: n }) => y(
      [
        "extend interface",
        e,
        U("implements ", y(r, " & ")),
        y(t, " "),
        se(n)
      ],
      " "
    )
  },
  UnionTypeExtension: {
    leave: ({ name: e, directives: r, types: t }) => y(
      [
        "extend union",
        e,
        y(r, " "),
        U("= ", y(t, " | "))
      ],
      " "
    )
  },
  EnumTypeExtension: {
    leave: ({ name: e, directives: r, values: t }) => y(["extend enum", e, y(r, " "), se(t)], " ")
  },
  InputObjectTypeExtension: {
    leave: ({ name: e, directives: r, fields: t }) => y(["extend input", e, y(r, " "), se(t)], " ")
  }
};
function y(e, r = "") {
  var t;
  return (t = e == null ? void 0 : e.filter((n) => n).join(r)) !== null && t !== void 0 ? t : "";
}
function se(e) {
  return U(`{
`, yt(y(e, `
`)), `
}`);
}
function U(e, r, t = "") {
  return r != null && r !== "" ? e + r + t : "";
}
function yt(e) {
  return U("  ", e.replace(/\n/g, `
  `));
}
function Ea(e) {
  var r;
  return (r = e == null ? void 0 : e.some((t) => t.includes(`
`))) !== null && r !== void 0 ? r : !1;
}
function Ta(e) {
  return e.kind === $.FIELD || e.kind === $.FRAGMENT_SPREAD || e.kind === $.INLINE_FRAGMENT;
}
function ot(e, r) {
  var t = e.directives;
  return !t || !t.length ? !0 : Bf(t).every(function(n) {
    var o = n.directive, i = n.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = r && r[i.value.name.value], S(a !== void 0, 64, o.name.value)) : a = i.value.value, o.name.value === "skip" ? !a : a;
  });
}
function $r(e, r, t) {
  var n = new Set(e), o = n.size;
  return Ae(r, {
    Directive: function(i) {
      if (n.delete(i.name.value) && (!t || !n.size))
        return gi;
    }
  }), t ? !n.size : n.size < o;
}
function Mf(e) {
  return e && $r(["client", "export"], e, !0);
}
function kf(e) {
  var r = e.name.value;
  return r === "skip" || r === "include";
}
function Bf(e) {
  var r = [];
  return e && e.length && e.forEach(function(t) {
    if (kf(t)) {
      var n = t.arguments, o = t.name.value;
      S(n && n.length === 1, 65, o);
      var i = n[0];
      S(i.name && i.name.value === "if", 66, o);
      var a = i.value;
      S(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 67, o), r.push({ directive: t, ifArgument: i });
    }
  }), r;
}
const xf = () => /* @__PURE__ */ Object.create(null), { forEach: Ff, slice: jf } = Array.prototype, { hasOwnProperty: Vf } = Object.prototype;
class Ke {
  constructor(r = !0, t = xf) {
    this.weakness = r, this.makeData = t;
  }
  lookup(...r) {
    return this.lookupArray(r);
  }
  lookupArray(r) {
    let t = this;
    return Ff.call(r, (n) => t = t.getChildTrie(n)), Vf.call(t, "data") ? t.data : t.data = this.makeData(jf.call(r));
  }
  peek(...r) {
    return this.peekArray(r);
  }
  peekArray(r) {
    let t = this;
    for (let n = 0, o = r.length; t && n < o; ++n) {
      const i = this.weakness && Oa(r[n]) ? t.weak : t.strong;
      t = i && i.get(r[n]);
    }
    return t && t.data;
  }
  getChildTrie(r) {
    const t = this.weakness && Oa(r) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let n = t.get(r);
    return n || t.set(r, n = new Ke(this.weakness, this.makeData)), n;
  }
}
function Oa(e) {
  switch (typeof e) {
    case "object":
      if (e === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var Se = typeof WeakMap == "function" && ue(function() {
  return navigator.product;
}) !== "ReactNative", Hu = typeof WeakSet == "function", Gu = typeof Symbol == "function" && typeof Symbol.for == "function", tn = Gu && Symbol.asyncIterator;
ue(function() {
  return window.document.createElement;
});
ue(function() {
  return navigator.userAgent.indexOf("jsdom") >= 0;
});
function M(e) {
  return e !== null && typeof e == "object";
}
function Wf(e, r) {
  var t = r, n = [];
  e.definitions.forEach(function(i) {
    if (i.kind === "OperationDefinition")
      throw Z(
        68,
        i.operation,
        i.name ? " named '".concat(i.name.value, "'") : ""
      );
    i.kind === "FragmentDefinition" && n.push(i);
  }), typeof t > "u" && (S(n.length === 1, 69, n.length), t = n[0].name.value);
  var o = E(E({}, e), { definitions: ne([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: t
            }
          }
        ]
      }
    }
  ], e.definitions, !0) });
  return o;
}
function nn(e) {
  e === void 0 && (e = []);
  var r = {};
  return e.forEach(function(t) {
    r[t.name.value] = t;
  }), r;
}
function on(e, r) {
  switch (e.kind) {
    case "InlineFragment":
      return e;
    case "FragmentSpread": {
      var t = e.name.value;
      if (typeof r == "function")
        return r(t);
      var n = r && r[t];
      return S(n, 70, t), n || null;
    }
    default:
      return null;
  }
}
function pr(e) {
  return { __ref: String(e) };
}
function G(e) {
  return !!(e && typeof e == "object" && typeof e.__ref == "string");
}
function Xf(e) {
  return M(e) && e.kind === "Document" && Array.isArray(e.definitions);
}
function Kf(e) {
  return e.kind === "StringValue";
}
function Yf(e) {
  return e.kind === "BooleanValue";
}
function qf(e) {
  return e.kind === "IntValue";
}
function zf(e) {
  return e.kind === "FloatValue";
}
function $f(e) {
  return e.kind === "Variable";
}
function Qf(e) {
  return e.kind === "ObjectValue";
}
function Jf(e) {
  return e.kind === "ListValue";
}
function Zf(e) {
  return e.kind === "EnumValue";
}
function ed(e) {
  return e.kind === "NullValue";
}
function Tr(e, r, t, n) {
  if (qf(t) || zf(t))
    e[r.value] = Number(t.value);
  else if (Yf(t) || Kf(t))
    e[r.value] = t.value;
  else if (Qf(t)) {
    var o = {};
    t.fields.map(function(a) {
      return Tr(o, a.name, a.value, n);
    }), e[r.value] = o;
  } else if ($f(t)) {
    var i = (n || {})[t.name.value];
    e[r.value] = i;
  } else if (Jf(t))
    e[r.value] = t.values.map(function(a) {
      var s = {};
      return Tr(s, r, a, n), s[r.value];
    });
  else if (Zf(t))
    e[r.value] = t.value;
  else if (ed(t))
    e[r.value] = null;
  else
    throw Z(79, r.value, t.kind);
}
function rd(e, r) {
  var t = null;
  e.directives && (t = {}, e.directives.forEach(function(o) {
    t[o.name.value] = {}, o.arguments && o.arguments.forEach(function(i) {
      var a = i.name, s = i.value;
      return Tr(t[o.name.value], a, s, r);
    });
  }));
  var n = null;
  return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(o) {
    var i = o.name, a = o.value;
    return Tr(n, i, a, r);
  })), bi(e.name.value, n, t);
}
var td = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], bi = Object.assign(function(e, r, t) {
  if (r && t && t.connection && t.connection.key)
    if (t.connection.filter && t.connection.filter.length > 0) {
      var n = t.connection.filter ? t.connection.filter : [];
      n.sort();
      var o = {};
      return n.forEach(function(s) {
        o[s] = r[s];
      }), "".concat(t.connection.key, "(").concat(Mr(o), ")");
    } else
      return t.connection.key;
  var i = e;
  if (r) {
    var a = Mr(r);
    i += "(".concat(a, ")");
  }
  return t && Object.keys(t).forEach(function(s) {
    td.indexOf(s) === -1 && (t[s] && Object.keys(t[s]).length ? i += "@".concat(s, "(").concat(Mr(t[s]), ")") : i += "@".concat(s));
  }), i;
}, {
  setStringify: function(e) {
    var r = Mr;
    return Mr = e, r;
  }
}), Mr = function(r) {
  return JSON.stringify(r, nd);
};
function nd(e, r) {
  return M(r) && !Array.isArray(r) && (r = Object.keys(r).sort().reduce(function(t, n) {
    return t[n] = r[n], t;
  }, {})), r;
}
function an(e, r) {
  if (e.arguments && e.arguments.length) {
    var t = {};
    return e.arguments.forEach(function(n) {
      var o = n.name, i = n.value;
      return Tr(t, o, i, r);
    }), t;
  }
  return null;
}
function Fe(e) {
  return e.alias ? e.alias.value : e.name.value;
}
function Ro(e, r, t) {
  for (var n, o = 0, i = r.selections; o < i.length; o++) {
    var a = i[o];
    if (je(a)) {
      if (a.name.value === "__typename")
        return e[Fe(a)];
    } else
      n ? n.push(a) : n = [a];
  }
  if (typeof e.__typename == "string")
    return e.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var a = u[s], c = Ro(e, on(a, t).selectionSet, t);
      if (typeof c == "string")
        return c;
    }
}
function je(e) {
  return e.kind === "Field";
}
function od(e) {
  return e.kind === "InlineFragment";
}
function it(e) {
  S(e && e.kind === "Document", 71);
  var r = e.definitions.filter(function(t) {
    return t.kind !== "FragmentDefinition";
  }).map(function(t) {
    if (t.kind !== "OperationDefinition")
      throw Z(72, t.kind);
    return t;
  });
  return S(r.length <= 1, 73, r.length), e;
}
function at(e) {
  return it(e), e.definitions.filter(function(r) {
    return r.kind === "OperationDefinition";
  })[0];
}
function go(e) {
  return e.definitions.filter(function(r) {
    return r.kind === "OperationDefinition" && !!r.name;
  }).map(function(r) {
    return r.name.value;
  })[0] || null;
}
function sn(e) {
  return e.definitions.filter(function(r) {
    return r.kind === "FragmentDefinition";
  });
}
function Cu(e) {
  var r = at(e);
  return S(r && r.operation === "query", 74), r;
}
function id(e) {
  S(e.kind === "Document", 75), S(e.definitions.length <= 1, 76);
  var r = e.definitions[0];
  return S(r.kind === "FragmentDefinition", 77), r;
}
function st(e) {
  it(e);
  for (var r, t = 0, n = e.definitions; t < n.length; t++) {
    var o = n[t];
    if (o.kind === "OperationDefinition") {
      var i = o.operation;
      if (i === "query" || i === "mutation" || i === "subscription")
        return o;
    }
    o.kind === "FragmentDefinition" && !r && (r = o);
  }
  if (r)
    return r;
  throw Z(78);
}
function Ii(e) {
  var r = /* @__PURE__ */ Object.create(null), t = e && e.variableDefinitions;
  return t && t.length && t.forEach(function(n) {
    n.defaultValue && Tr(r, n.variable.name, n.defaultValue);
  }), r;
}
function ad(e) {
  return e;
}
var Lu = function() {
  function e(r, t) {
    t === void 0 && (t = /* @__PURE__ */ Object.create(null)), this.resultCache = Hu ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = r, t.getCacheKey && (this.getCacheKey = t.getCacheKey), t.cache !== !1 && (this.stableCacheKeys = new Ke(Se, function(n) {
      return { key: n };
    }));
  }
  return e.prototype.getCacheKey = function(r) {
    return [r];
  }, e.identity = function() {
    return new e(ad, { cache: !1 });
  }, e.split = function(r, t, n) {
    return n === void 0 && (n = e.identity()), new e(function(o) {
      var i = r(o) ? t : n;
      return i.transformDocument(o);
    }, { cache: !1 });
  }, e.prototype.transformDocument = function(r) {
    if (this.resultCache.has(r))
      return r;
    var t = this.getStableCacheEntry(r);
    if (t && t.value)
      return t.value;
    it(r);
    var n = this.transform(r);
    return this.resultCache.add(n), t && (t.value = n), n;
  }, e.prototype.concat = function(r) {
    var t = this;
    return new e(function(n) {
      return r.transformDocument(t.transformDocument(n));
    }, { cache: !1 });
  }, e.prototype.getStableCacheEntry = function(r) {
    if (this.stableCacheKeys) {
      var t = this.getCacheKey(r);
      if (t)
        return S(Array.isArray(t), 63), this.stableCacheKeys.lookupArray(t);
    }
  }, e;
}(), ir = Se ? /* @__PURE__ */ new WeakMap() : void 0, Mu = function(e) {
  var r;
  return r = ir == null ? void 0 : ir.get(e), r || (r = Gf(e), ir == null || ir.set(e, r)), r;
}, j = Array.isArray;
function Oe(e) {
  return Array.isArray(e) && e.length > 0;
}
var va = {
  kind: $.FIELD,
  name: {
    kind: $.NAME,
    value: "__typename"
  }
};
function ku(e, r) {
  return !e || e.selectionSet.selections.every(function(t) {
    return t.kind === $.FRAGMENT_SPREAD && ku(r[t.name.value], r);
  });
}
function sd(e) {
  return ku(at(e) || id(e), nn(sn(e))) ? null : e;
}
function ud(e) {
  var r = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  return e.forEach(function(n) {
    n && (n.name ? r.set(n.name, n) : n.test && t.set(n.test, n));
  }), function(n) {
    var o = r.get(n.name.value);
    return !o && t.size && t.forEach(function(i, a) {
      a(n) && (o = i);
    }), o;
  };
}
function Ra(e) {
  var r = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = e);
    var o = r.get(n);
    return o || r.set(n, o = {
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), o;
  };
}
function Bu(e, r) {
  it(r);
  for (var t = Ra(""), n = Ra(""), o = function(p) {
    for (var v = 0, O = void 0; v < p.length && (O = p[v]); ++v)
      if (!j(O)) {
        if (O.kind === $.OPERATION_DEFINITION)
          return t(O.name && O.name.value);
        if (O.kind === $.FRAGMENT_DEFINITION)
          return n(O.name.value);
      }
    return globalThis.__DEV__ !== !1 && S.error(80), null;
  }, i = 0, a = r.definitions.length - 1; a >= 0; --a)
    r.definitions[a].kind === $.OPERATION_DEFINITION && ++i;
  var s = ud(e), u = function(p) {
    return Oe(p) && p.map(s).some(function(v) {
      return v && v.remove;
    });
  }, c = /* @__PURE__ */ new Map(), l = !1, f = {
    enter: function(p) {
      if (u(p.directives))
        return l = !0, null;
    }
  }, d = Ae(r, {
    Field: f,
    InlineFragment: f,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(p, v, O, b, N) {
        var g = o(N);
        g && g.variables.add(p.name.value);
      }
    },
    FragmentSpread: {
      enter: function(p, v, O, b, N) {
        if (u(p.directives))
          return l = !0, null;
        var g = o(N);
        g && g.fragmentSpreads.add(p.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(p, v, O, b) {
        c.set(JSON.stringify(b), p);
      },
      leave: function(p, v, O, b) {
        var N = c.get(JSON.stringify(b));
        if (p === N)
          return p;
        if (i > 0 && p.selectionSet.selections.every(function(g) {
          return g.kind === $.FIELD && g.name.value === "__typename";
        }))
          return n(p.name.value).removed = !0, l = !0, null;
      }
    },
    Directive: {
      leave: function(p) {
        if (s(p))
          return l = !0, null;
      }
    }
  });
  if (!l)
    return r;
  var _ = function(p) {
    return p.transitiveVars || (p.transitiveVars = new Set(p.variables), p.removed || p.fragmentSpreads.forEach(function(v) {
      _(n(v)).transitiveVars.forEach(function(O) {
        p.transitiveVars.add(O);
      });
    })), p;
  }, h = /* @__PURE__ */ new Set();
  d.definitions.forEach(function(p) {
    p.kind === $.OPERATION_DEFINITION ? _(t(p.name && p.name.value)).fragmentSpreads.forEach(function(v) {
      h.add(v);
    }) : p.kind === $.FRAGMENT_DEFINITION && i === 0 && !n(p.name.value).removed && h.add(p.name.value);
  }), h.forEach(function(p) {
    _(n(p)).fragmentSpreads.forEach(function(v) {
      h.add(v);
    });
  });
  var m = function(p) {
    return !!(!h.has(p) || n(p).removed);
  }, T = {
    enter: function(p) {
      if (m(p.name.value))
        return null;
    }
  };
  return sd(Ae(d, {
    FragmentSpread: T,
    FragmentDefinition: T,
    OperationDefinition: {
      leave: function(p) {
        if (p.variableDefinitions) {
          var v = _(t(p.name && p.name.value)).transitiveVars;
          if (v.size < p.variableDefinitions.length)
            return E(E({}, p), { variableDefinitions: p.variableDefinitions.filter(function(O) {
              return v.has(O.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Ni = Object.assign(function(e) {
  return Ae(e, {
    SelectionSet: {
      enter: function(r, t, n) {
        if (!(n && n.kind === $.OPERATION_DEFINITION)) {
          var o = r.selections;
          if (o) {
            var i = o.some(function(s) {
              return je(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!i) {
              var a = n;
              if (!(je(a) && a.directives && a.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return E(E({}, r), { selections: ne(ne([], o, !0), [va], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(e) {
    return e === va;
  }
});
function cd(e) {
  var r = st(e), t = r.operation;
  if (t === "query")
    return e;
  var n = Ae(e, {
    OperationDefinition: {
      enter: function(o) {
        return E(E({}, o), { operation: "query" });
      }
    }
  });
  return n;
}
function xu(e) {
  it(e);
  var r = Bu([
    {
      test: function(t) {
        return t.name.value === "client";
      },
      remove: !0
    }
  ], e);
  return r;
}
var ld = Object.prototype.hasOwnProperty;
function ga() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  return yi(e);
}
function yi(e) {
  var r = e[0] || {}, t = e.length;
  if (t > 1)
    for (var n = new Ve(), o = 1; o < t; ++o)
      r = n.merge(r, e[o]);
  return r;
}
var fd = function(e, r, t) {
  return this.merge(e[t], r[t]);
}, Ve = function() {
  function e(r) {
    r === void 0 && (r = fd), this.reconciler = r, this.isObject = M, this.pastCopies = /* @__PURE__ */ new Set();
  }
  return e.prototype.merge = function(r, t) {
    for (var n = this, o = [], i = 2; i < arguments.length; i++)
      o[i - 2] = arguments[i];
    return M(t) && M(r) ? (Object.keys(t).forEach(function(a) {
      if (ld.call(r, a)) {
        var s = r[a];
        if (t[a] !== s) {
          var u = n.reconciler.apply(n, ne([
            r,
            t,
            a
          ], o, !1));
          u !== s && (r = n.shallowCopyForMerge(r), r[a] = u);
        }
      } else
        r = n.shallowCopyForMerge(r), r[a] = t[a];
    }), r) : t;
  }, e.prototype.shallowCopyForMerge = function(r) {
    return M(r) && (this.pastCopies.has(r) || (Array.isArray(r) ? r = r.slice(0) : r = E({ __proto__: Object.getPrototypeOf(r) }, r), this.pastCopies.add(r))), r;
  }, e;
}();
function dd(e, r) {
  var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t)
    return (t = t.call(e)).next.bind(t);
  if (Array.isArray(e) || (t = _d(e)) || r && e && typeof e.length == "number") {
    t && (e = t);
    var n = 0;
    return function() {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _d(e, r) {
  if (e) {
    if (typeof e == "string")
      return ba(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ba(e, r);
  }
}
function ba(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Ia(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function Ai(e, r, t) {
  return r && Ia(e.prototype, r), t && Ia(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Si = function() {
  return typeof Symbol == "function";
}, Di = function(e) {
  return Si() && !!Symbol[e];
}, Ui = function(e) {
  return Di(e) ? Symbol[e] : "@@" + e;
};
Si() && !Di("observable") && (Symbol.observable = Symbol("observable"));
var hd = Ui("iterator"), bo = Ui("observable"), Fu = Ui("species");
function jt(e, r) {
  var t = e[r];
  if (t != null) {
    if (typeof t != "function")
      throw new TypeError(t + " is not a function");
    return t;
  }
}
function kr(e) {
  var r = e.constructor;
  return r !== void 0 && (r = r[Fu], r === null && (r = void 0)), r !== void 0 ? r : C;
}
function pd(e) {
  return e instanceof C;
}
function Or(e) {
  Or.log ? Or.log(e) : setTimeout(function() {
    throw e;
  });
}
function At(e) {
  Promise.resolve().then(function() {
    try {
      e();
    } catch (r) {
      Or(r);
    }
  });
}
function ju(e) {
  var r = e._cleanup;
  if (r !== void 0 && (e._cleanup = void 0, !!r))
    try {
      if (typeof r == "function")
        r();
      else {
        var t = jt(r, "unsubscribe");
        t && t.call(r);
      }
    } catch (n) {
      Or(n);
    }
}
function Io(e) {
  e._observer = void 0, e._queue = void 0, e._state = "closed";
}
function md(e) {
  var r = e._queue;
  if (r) {
    e._queue = void 0, e._state = "ready";
    for (var t = 0; t < r.length && (Vu(e, r[t].type, r[t].value), e._state !== "closed"); ++t)
      ;
  }
}
function Vu(e, r, t) {
  e._state = "running";
  var n = e._observer;
  try {
    var o = jt(n, r);
    switch (r) {
      case "next":
        o && o.call(n, t);
        break;
      case "error":
        if (Io(e), o)
          o.call(n, t);
        else
          throw t;
        break;
      case "complete":
        Io(e), o && o.call(n);
        break;
    }
  } catch (i) {
    Or(i);
  }
  e._state === "closed" ? ju(e) : e._state === "running" && (e._state = "ready");
}
function In(e, r, t) {
  if (e._state !== "closed") {
    if (e._state === "buffering") {
      e._queue.push({
        type: r,
        value: t
      });
      return;
    }
    if (e._state !== "ready") {
      e._state = "buffering", e._queue = [{
        type: r,
        value: t
      }], At(function() {
        return md(e);
      });
      return;
    }
    Vu(e, r, t);
  }
}
var Ed = /* @__PURE__ */ function() {
  function e(t, n) {
    this._cleanup = void 0, this._observer = t, this._queue = void 0, this._state = "initializing";
    var o = new Td(this);
    try {
      this._cleanup = n.call(void 0, o);
    } catch (i) {
      o.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var r = e.prototype;
  return r.unsubscribe = function() {
    this._state !== "closed" && (Io(this), ju(this));
  }, Ai(e, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), e;
}(), Td = /* @__PURE__ */ function() {
  function e(t) {
    this._subscription = t;
  }
  var r = e.prototype;
  return r.next = function(n) {
    In(this._subscription, "next", n);
  }, r.error = function(n) {
    In(this._subscription, "error", n);
  }, r.complete = function() {
    In(this._subscription, "complete");
  }, Ai(e, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), e;
}(), C = /* @__PURE__ */ function() {
  function e(t) {
    if (!(this instanceof e))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof t != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = t;
  }
  var r = e.prototype;
  return r.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new Ed(n, this._subscriber);
  }, r.forEach = function(n) {
    var o = this;
    return new Promise(function(i, a) {
      if (typeof n != "function") {
        a(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), i();
      }
      var u = o.subscribe({
        next: function(c) {
          try {
            n(c, s);
          } catch (l) {
            a(l), u.unsubscribe();
          }
        },
        error: a,
        complete: i
      });
    });
  }, r.map = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = kr(this);
    return new i(function(a) {
      return o.subscribe({
        next: function(s) {
          try {
            s = n(s);
          } catch (u) {
            return a.error(u);
          }
          a.next(s);
        },
        error: function(s) {
          a.error(s);
        },
        complete: function() {
          a.complete();
        }
      });
    });
  }, r.filter = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = kr(this);
    return new i(function(a) {
      return o.subscribe({
        next: function(s) {
          try {
            if (!n(s))
              return;
          } catch (u) {
            return a.error(u);
          }
          a.next(s);
        },
        error: function(s) {
          a.error(s);
        },
        complete: function() {
          a.complete();
        }
      });
    });
  }, r.reduce = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = kr(this), a = arguments.length > 1, s = !1, u = arguments[1], c = u;
    return new i(function(l) {
      return o.subscribe({
        next: function(f) {
          var d = !s;
          if (s = !0, !d || a)
            try {
              c = n(c, f);
            } catch (_) {
              return l.error(_);
            }
          else
            c = f;
        },
        error: function(f) {
          l.error(f);
        },
        complete: function() {
          if (!s && !a)
            return l.error(new TypeError("Cannot reduce an empty sequence"));
          l.next(c), l.complete();
        }
      });
    });
  }, r.concat = function() {
    for (var n = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    var s = kr(this);
    return new s(function(u) {
      var c, l = 0;
      function f(d) {
        c = d.subscribe({
          next: function(_) {
            u.next(_);
          },
          error: function(_) {
            u.error(_);
          },
          complete: function() {
            l === i.length ? (c = void 0, u.complete()) : f(s.from(i[l++]));
          }
        });
      }
      return f(n), function() {
        c && (c.unsubscribe(), c = void 0);
      };
    });
  }, r.flatMap = function(n) {
    var o = this;
    if (typeof n != "function")
      throw new TypeError(n + " is not a function");
    var i = kr(this);
    return new i(function(a) {
      var s = [], u = o.subscribe({
        next: function(l) {
          if (n)
            try {
              l = n(l);
            } catch (d) {
              return a.error(d);
            }
          var f = i.from(l).subscribe({
            next: function(d) {
              a.next(d);
            },
            error: function(d) {
              a.error(d);
            },
            complete: function() {
              var d = s.indexOf(f);
              d >= 0 && s.splice(d, 1), c();
            }
          });
          s.push(f);
        },
        error: function(l) {
          a.error(l);
        },
        complete: function() {
          c();
        }
      });
      function c() {
        u.closed && s.length === 0 && a.complete();
      }
      return function() {
        s.forEach(function(l) {
          return l.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, r[bo] = function() {
    return this;
  }, e.from = function(n) {
    var o = typeof this == "function" ? this : e;
    if (n == null)
      throw new TypeError(n + " is not an object");
    var i = jt(n, bo);
    if (i) {
      var a = i.call(n);
      if (Object(a) !== a)
        throw new TypeError(a + " is not an object");
      return pd(a) && a.constructor === o ? a : new o(function(s) {
        return a.subscribe(s);
      });
    }
    if (Di("iterator") && (i = jt(n, hd), i))
      return new o(function(s) {
        At(function() {
          if (!s.closed) {
            for (var u = dd(i.call(n)), c; !(c = u()).done; ) {
              var l = c.value;
              if (s.next(l), s.closed)
                return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new o(function(s) {
        At(function() {
          if (!s.closed) {
            for (var u = 0; u < n.length; ++u)
              if (s.next(n[u]), s.closed)
                return;
            s.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, e.of = function() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    var a = typeof this == "function" ? this : e;
    return new a(function(s) {
      At(function() {
        if (!s.closed) {
          for (var u = 0; u < o.length; ++u)
            if (s.next(o[u]), s.closed)
              return;
          s.complete();
        }
      });
    });
  }, Ai(e, null, [{
    key: Fu,
    get: function() {
      return this;
    }
  }]), e;
}();
Si() && Object.defineProperty(C, Symbol("extensions"), {
  value: {
    symbol: bo,
    hostReportError: Or
  },
  configurable: !0
});
function Od(e) {
  var r, t = e.Symbol;
  if (typeof t == "function")
    if (t.observable)
      r = t.observable;
    else {
      typeof t.for == "function" ? r = t.for("https://github.com/benlesh/symbol-observable") : r = t("https://github.com/benlesh/symbol-observable");
      try {
        t.observable = r;
      } catch {
      }
    }
  else
    r = "@@observable";
  return r;
}
var cr;
typeof self < "u" ? cr = self : typeof window < "u" ? cr = window : typeof global < "u" ? cr = global : typeof module < "u" ? cr = module : cr = Function("return this")();
Od(cr);
var Na = C.prototype, ya = "@@observable";
Na[ya] || (Na[ya] = function() {
  return this;
});
var vd = Object.prototype.toString;
function Wu(e) {
  return No(e);
}
function No(e, r) {
  switch (vd.call(e)) {
    case "[object Array]": {
      if (r = r || /* @__PURE__ */ new Map(), r.has(e))
        return r.get(e);
      var t = e.slice(0);
      return r.set(e, t), t.forEach(function(o, i) {
        t[i] = No(o, r);
      }), t;
    }
    case "[object Object]": {
      if (r = r || /* @__PURE__ */ new Map(), r.has(e))
        return r.get(e);
      var n = Object.create(Object.getPrototypeOf(e));
      return r.set(e, n), Object.keys(e).forEach(function(o) {
        n[o] = No(e[o], r);
      }), n;
    }
    default:
      return e;
  }
}
function Rd(e) {
  var r = /* @__PURE__ */ new Set([e]);
  return r.forEach(function(t) {
    M(t) && gd(t) === t && Object.getOwnPropertyNames(t).forEach(function(n) {
      M(t[n]) && r.add(t[n]);
    });
  }), e;
}
function gd(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (r) {
      if (r instanceof TypeError)
        return null;
      throw r;
    }
  return e;
}
function yo(e) {
  return globalThis.__DEV__ !== !1 && Rd(e), e;
}
function Kr(e, r, t) {
  var n = [];
  e.forEach(function(o) {
    return o[r] && n.push(o);
  }), n.forEach(function(o) {
    return o[r](t);
  });
}
function Nn(e, r, t) {
  return new C(function(n) {
    var o = {
      then: function(u) {
        return new Promise(function(c) {
          return c(u());
        });
      }
    };
    function i(u, c) {
      return function(l) {
        if (u) {
          var f = function() {
            return n.closed ? 0 : u(l);
          };
          o = o.then(f, f).then(function(d) {
            return n.next(d);
          }, function(d) {
            return n.error(d);
          });
        } else
          n[c](l);
      };
    }
    var a = {
      next: i(r, "next"),
      error: i(t, "error"),
      complete: function() {
        o.then(function() {
          return n.complete();
        });
      }
    }, s = e.subscribe(a);
    return function() {
      return s.unsubscribe();
    };
  });
}
function Xu(e) {
  function r(t) {
    Object.defineProperty(e, t, { value: C });
  }
  return Gu && Symbol.species && r(Symbol.species), r("@@species"), e;
}
function Aa(e) {
  return e && typeof e.then == "function";
}
var lr = function(e) {
  ve(r, e);
  function r(t) {
    var n = e.call(this, function(o) {
      return n.addObserver(o), function() {
        return n.removeObserver(o);
      };
    }) || this;
    return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(o, i) {
      n.resolve = o, n.reject = i;
    }), n.handlers = {
      next: function(o) {
        n.sub !== null && (n.latest = ["next", o], n.notify("next", o), Kr(n.observers, "next", o));
      },
      error: function(o) {
        var i = n.sub;
        i !== null && (i && setTimeout(function() {
          return i.unsubscribe();
        }), n.sub = null, n.latest = ["error", o], n.reject(o), n.notify("error", o), Kr(n.observers, "error", o));
      },
      complete: function() {
        var o = n, i = o.sub, a = o.sources, s = a === void 0 ? [] : a;
        if (i !== null) {
          var u = s.shift();
          u ? Aa(u) ? u.then(function(c) {
            return n.sub = c.subscribe(n.handlers);
          }) : n.sub = u.subscribe(n.handlers) : (i && setTimeout(function() {
            return i.unsubscribe();
          }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), Kr(n.observers, "complete"));
        }
      }
    }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(o) {
      n.reject(o), n.sources = [], n.handlers.complete();
    }, n.promise.catch(function(o) {
    }), typeof t == "function" && (t = [new C(t)]), Aa(t) ? t.then(function(o) {
      return n.start(o);
    }, n.handlers.error) : n.start(t), n;
  }
  return r.prototype.start = function(t) {
    this.sub === void 0 && (this.sources = Array.from(t), this.handlers.complete());
  }, r.prototype.deliverLastMessage = function(t) {
    if (this.latest) {
      var n = this.latest[0], o = t[n];
      o && o.call(t, this.latest[1]), this.sub === null && n === "next" && t.complete && t.complete();
    }
  }, r.prototype.addObserver = function(t) {
    this.observers.has(t) || (this.deliverLastMessage(t), this.observers.add(t));
  }, r.prototype.removeObserver = function(t) {
    this.observers.delete(t) && this.observers.size < 1 && this.handlers.complete();
  }, r.prototype.notify = function(t, n) {
    var o = this.nextResultListeners;
    o.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), o.forEach(function(i) {
      return i(t, n);
    }));
  }, r.prototype.beforeNext = function(t) {
    var n = !1;
    this.nextResultListeners.add(function(o, i) {
      n || (n = !0, t(o, i));
    });
  }, r;
}(C);
Xu(lr);
function mr(e) {
  return "incremental" in e;
}
function bd(e) {
  return "hasNext" in e && "data" in e;
}
function Id(e) {
  return mr(e) || bd(e);
}
function Nd(e) {
  return M(e) && "payload" in e;
}
function Ku(e, r) {
  var t = e, n = new Ve();
  return mr(r) && Oe(r.incremental) && r.incremental.forEach(function(o) {
    for (var i = o.data, a = o.path, s = a.length - 1; s >= 0; --s) {
      var u = a[s], c = !isNaN(+u), l = c ? [] : {};
      l[u] = i, i = l;
    }
    t = n.merge(t, i);
  }), t;
}
function St(e) {
  var r = Ao(e);
  return Oe(r);
}
function Ao(e) {
  var r = Oe(e.errors) ? e.errors.slice(0) : [];
  return mr(e) && Oe(e.incremental) && e.incremental.forEach(function(t) {
    t.errors && r.push.apply(r, t.errors);
  }), r;
}
function vr() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var t = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(o) {
      var i = n[o];
      i !== void 0 && (t[o] = i);
    });
  }), t;
}
function yn(e, r) {
  return vr(e, r, r.variables && {
    variables: vr(E(E({}, e && e.variables), r.variables))
  });
}
function An(e) {
  return new C(function(r) {
    r.error(e);
  });
}
var So = function(e, r, t) {
  var n = new Error(t);
  throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = r, n;
};
function yd(e) {
  for (var r = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], t = 0, n = Object.keys(e); t < n.length; t++) {
    var o = n[t];
    if (r.indexOf(o) < 0)
      throw Z(41, o);
  }
  return e;
}
function Ad(e, r) {
  var t = E({}, e), n = function(i) {
    typeof i == "function" ? t = E(E({}, t), i(t)) : t = E(E({}, t), i);
  }, o = function() {
    return E({}, t);
  };
  return Object.defineProperty(r, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(r, "getContext", {
    enumerable: !1,
    value: o
  }), r;
}
function Sd(e) {
  var r = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query
  };
  return r.operationName || (r.operationName = typeof r.query != "string" ? go(r.query) || void 0 : ""), r;
}
function Dd(e, r) {
  var t = E({}, e), n = new Set(Object.keys(e));
  return Ae(r, {
    Variable: function(o, i, a) {
      a && a.kind !== "VariableDefinition" && n.delete(o.name.value);
    }
  }), n.forEach(function(o) {
    delete t[o];
  }), t;
}
function Sa(e, r) {
  return r ? r(e) : C.of();
}
function Br(e) {
  return typeof e == "function" ? new Ar(e) : e;
}
function Et(e) {
  return e.request.length <= 1;
}
var Ar = function() {
  function e(r) {
    r && (this.request = r);
  }
  return e.empty = function() {
    return new e(function() {
      return C.of();
    });
  }, e.from = function(r) {
    return r.length === 0 ? e.empty() : r.map(Br).reduce(function(t, n) {
      return t.concat(n);
    });
  }, e.split = function(r, t, n) {
    var o = Br(t), i = Br(n || new e(Sa));
    return Et(o) && Et(i) ? new e(function(a) {
      return r(a) ? o.request(a) || C.of() : i.request(a) || C.of();
    }) : new e(function(a, s) {
      return r(a) ? o.request(a, s) || C.of() : i.request(a, s) || C.of();
    });
  }, e.execute = function(r, t) {
    return r.request(Ad(t.context, Sd(yd(t)))) || C.of();
  }, e.concat = function(r, t) {
    var n = Br(r);
    if (Et(n))
      return globalThis.__DEV__ !== !1 && S.warn(33, n), n;
    var o = Br(t);
    return Et(o) ? new e(function(i) {
      return n.request(i, function(a) {
        return o.request(a) || C.of();
      }) || C.of();
    }) : new e(function(i, a) {
      return n.request(i, function(s) {
        return o.request(s, a) || C.of();
      }) || C.of();
    });
  }, e.prototype.split = function(r, t, n) {
    return this.concat(e.split(r, t, n || new e(Sa)));
  }, e.prototype.concat = function(r) {
    return e.concat(this, r);
  }, e.prototype.request = function(r, t) {
    throw Z(34);
  }, e.prototype.onError = function(r, t) {
    if (t && t.error)
      return t.error(r), !1;
    throw r;
  }, e.prototype.setOnError = function(r) {
    return this.onError = r, this;
  }, e;
}(), Do = Ar.execute;
function Ud(e) {
  var r, t = e[Symbol.asyncIterator]();
  return r = {
    next: function() {
      return t.next();
    }
  }, r[Symbol.asyncIterator] = function() {
    return this;
  }, r;
}
function Pd(e) {
  var r = null, t = null, n = !1, o = [], i = [];
  function a(f) {
    if (!t) {
      if (i.length) {
        var d = i.shift();
        if (Array.isArray(d) && d[0])
          return d[0]({ value: f, done: !1 });
      }
      o.push(f);
    }
  }
  function s(f) {
    t = f;
    var d = i.slice();
    d.forEach(function(_) {
      _[1](f);
    }), !r || r();
  }
  function u() {
    n = !0;
    var f = i.slice();
    f.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !r || r();
  }
  r = function() {
    r = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u);
  }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
  function c() {
    return new Promise(function(f, d) {
      if (t)
        return d(t);
      if (o.length)
        return f({ value: o.shift(), done: !1 });
      if (n)
        return f({ value: void 0, done: !0 });
      i.push([f, d]);
    });
  }
  var l = {
    next: function() {
      return c();
    }
  };
  return tn && (l[Symbol.asyncIterator] = function() {
    return this;
  }), l;
}
function wd(e) {
  var r = !1, t = {
    next: function() {
      return r ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (r = !0, new Promise(function(n, o) {
        e.then(function(i) {
          n({ value: i, done: !1 });
        }).catch(o);
      }));
    }
  };
  return tn && (t[Symbol.asyncIterator] = function() {
    return this;
  }), t;
}
function Da(e) {
  var r = {
    next: function() {
      return e.read();
    }
  };
  return tn && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Hd(e) {
  return !!e.body;
}
function Gd(e) {
  return !!e.getReader;
}
function Cd(e) {
  return !!(tn && e[Symbol.asyncIterator]);
}
function Ld(e) {
  return !!e.stream;
}
function Md(e) {
  return !!e.arrayBuffer;
}
function kd(e) {
  return !!e.pipe;
}
function Bd(e) {
  var r = e;
  if (Hd(e) && (r = e.body), Cd(r))
    return Ud(r);
  if (Gd(r))
    return Da(r.getReader());
  if (Ld(r))
    return Da(r.stream().getReader());
  if (Md(r))
    return wd(r.arrayBuffer());
  if (kd(r))
    return Pd(r);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Pi = Symbol();
function xd(e) {
  return e.extensions ? Array.isArray(e.extensions[Pi]) : !1;
}
function Fd(e) {
  return e.hasOwnProperty("graphQLErrors");
}
var jd = function(e) {
  var r = ne(ne(ne([], e.graphQLErrors, !0), e.clientErrors, !0), e.protocolErrors, !0);
  return e.networkError && r.push(e.networkError), r.map(function(t) {
    return M(t) && t.message || "Error message not found.";
  }).join(`
`);
}, ar = function(e) {
  ve(r, e);
  function r(t) {
    var n = t.graphQLErrors, o = t.protocolErrors, i = t.clientErrors, a = t.networkError, s = t.errorMessage, u = t.extraInfo, c = e.call(this, s) || this;
    return c.name = "ApolloError", c.graphQLErrors = n || [], c.protocolErrors = o || [], c.clientErrors = i || [], c.networkError = a || null, c.message = s || jd(c), c.extraInfo = u, c.__proto__ = r.prototype, c;
  }
  return r;
}(Error), Ua = Object.prototype.hasOwnProperty;
function Vd(e, r) {
  var t;
  return Me(this, void 0, void 0, function() {
    var n, o, i, a, s, u, c, l, f, d, _, h, m, T, p, v, O, b, N, g, I, A, B;
    return ke(this, function(x) {
      switch (x.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          n = new TextDecoder("utf-8"), o = (t = e.headers) === null || t === void 0 ? void 0 : t.get("content-type"), i = "boundary=", a = o != null && o.includes(i) ? o == null ? void 0 : o.substring((o == null ? void 0 : o.indexOf(i)) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = `\r
--`.concat(a), u = "", c = Bd(e), l = !0, x.label = 1;
        case 1:
          return l ? [4, c.next()] : [3, 3];
        case 2:
          for (f = x.sent(), d = f.value, _ = f.done, h = typeof d == "string" ? d : n.decode(d), m = u.length - s.length + 1, l = !_, u += h, T = u.indexOf(s, m); T > -1; ) {
            if (p = void 0, A = [
              u.slice(0, T),
              u.slice(T + s.length)
            ], p = A[0], u = A[1], v = p.indexOf(`\r
\r
`), O = Wd(p.slice(0, v)), b = O["content-type"], b && b.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (N = p.slice(v), N) {
              if (g = Yu(e, N), Object.keys(g).length > 1 || "data" in g || "incremental" in g || "errors" in g || "payload" in g)
                Nd(g) ? (I = {}, "payload" in g && (I = E({}, g.payload)), "errors" in g && (I = E(E({}, I), { extensions: E(E({}, "extensions" in I ? I.extensions : null), (B = {}, B[Pi] = g.errors, B)) })), r(I)) : r(g);
              else if (Object.keys(g).length === 1 && "hasNext" in g && !g.hasNext)
                return [2];
            }
            T = u.indexOf(s);
          }
          return [3, 1];
        case 3:
          return [2];
      }
    });
  });
}
function Wd(e) {
  var r = {};
  return e.split(`
`).forEach(function(t) {
    var n = t.indexOf(":");
    if (n > -1) {
      var o = t.slice(0, n).trim().toLowerCase(), i = t.slice(n + 1).trim();
      r[o] = i;
    }
  }), r;
}
function Yu(e, r) {
  if (e.status >= 300) {
    var t = function() {
      try {
        return JSON.parse(r);
      } catch {
        return r;
      }
    };
    So(e, t(), "Response not successful: Received status code ".concat(e.status));
  }
  try {
    return JSON.parse(r);
  } catch (o) {
    var n = o;
    throw n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = r, n;
  }
}
function Xd(e, r) {
  e.result && e.result.errors && e.result.data && r.next(e.result), r.error(e);
}
function Kd(e) {
  return function(r) {
    return r.text().then(function(t) {
      return Yu(r, t);
    }).then(function(t) {
      return r.status >= 300 && So(r, t, "Response not successful: Received status code ".concat(r.status)), !Array.isArray(t) && !Ua.call(t, "data") && !Ua.call(t, "errors") && So(r, t, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(n) {
        return n.operationName;
      }) : e.operationName, "'.")), t;
    });
  };
}
var Uo = function(e, r) {
  var t;
  try {
    t = JSON.stringify(e);
  } catch (o) {
    var n = Z(37, r, o.message);
    throw n.parseError = o, n;
  }
  return t;
}, Yd = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, qd = {
  accept: "*/*",
  "content-type": "application/json"
}, zd = {
  method: "POST"
}, $d = {
  http: Yd,
  headers: qd,
  options: zd
}, Qd = function(e, r) {
  return r(e);
};
function Jd(e, r) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  var o = {}, i = {};
  t.forEach(function(f) {
    o = E(E(E({}, o), f.options), { headers: E(E({}, o.headers), f.headers) }), f.credentials && (o.credentials = f.credentials), i = E(E({}, i), f.http);
  }), o.headers && (o.headers = Zd(o.headers, i.preserveHeaderCase));
  var a = e.operationName, s = e.extensions, u = e.variables, c = e.query, l = { operationName: a, variables: u };
  return i.includeExtensions && (l.extensions = s), i.includeQuery && (l.query = r(c, Mu)), {
    options: o,
    body: l
  };
}
function Zd(e, r) {
  if (!r) {
    var t = /* @__PURE__ */ Object.create(null);
    return Object.keys(Object(e)).forEach(function(i) {
      t[i.toLowerCase()] = e[i];
    }), t;
  }
  var n = /* @__PURE__ */ Object.create(null);
  Object.keys(Object(e)).forEach(function(i) {
    n[i.toLowerCase()] = {
      originalName: i,
      value: e[i]
    };
  });
  var o = /* @__PURE__ */ Object.create(null);
  return Object.keys(n).forEach(function(i) {
    o[n[i].originalName] = n[i].value;
  }), o;
}
var e_ = function(e) {
  if (!e && typeof fetch > "u")
    throw Z(35);
}, r_ = function(e, r) {
  var t = e.getContext(), n = t.uri;
  return n || (typeof r == "function" ? r(e) : r || "/graphql");
};
function t_(e, r) {
  var t = [], n = function(f, d) {
    t.push("".concat(f, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in r && n("query", r.query), r.operationName && n("operationName", r.operationName), r.variables) {
    var o = void 0;
    try {
      o = Uo(r.variables, "Variables map");
    } catch (f) {
      return { parseError: f };
    }
    n("variables", o);
  }
  if (r.extensions) {
    var i = void 0;
    try {
      i = Uo(r.extensions, "Extensions map");
    } catch (f) {
      return { parseError: f };
    }
    n("extensions", i);
  }
  var a = "", s = e, u = e.indexOf("#");
  u !== -1 && (a = e.substr(u), s = e.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", l = s + c + t.join("&") + a;
  return { newURI: l };
}
var Pa = ue(function() {
  return fetch;
}), qu = function(e) {
  e === void 0 && (e = {});
  var r = e.uri, t = r === void 0 ? "/graphql" : r, n = e.fetch, o = e.print, i = o === void 0 ? Qd : o, a = e.includeExtensions, s = e.preserveHeaderCase, u = e.useGETForQueries, c = e.includeUnusedVariables, l = c === void 0 ? !1 : c, f = ye(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && e_(n || Pa);
  var d = {
    http: { includeExtensions: a, preserveHeaderCase: s },
    options: f.fetchOptions,
    credentials: f.credentials,
    headers: f.headers
  };
  return new Ar(function(_) {
    var h = r_(_, t), m = _.getContext(), T = {};
    if (m.clientAwareness) {
      var p = m.clientAwareness, v = p.name, O = p.version;
      v && (T["apollographql-client-name"] = v), O && (T["apollographql-client-version"] = O);
    }
    var b = E(E({}, T), m.headers), N = {
      http: m.http,
      options: m.fetchOptions,
      credentials: m.credentials,
      headers: b
    };
    if ($r(["client"], _.query)) {
      var g = xu(_.query);
      if (!g)
        return An(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      _.query = g;
    }
    var I = Jd(_, i, $d, d, N), A = I.options, B = I.body;
    B.variables && !l && (B.variables = Dd(B.variables, _.query));
    var x;
    !A.signal && typeof AbortController < "u" && (x = new AbortController(), A.signal = x.signal);
    var X = function(K) {
      return K.kind === "OperationDefinition" && K.operation === "mutation";
    }, ae = function(K) {
      return K.kind === "OperationDefinition" && K.operation === "subscription";
    }, wr = ae(st(_.query)), Hr = $r(["defer"], _.query);
    if (u && !_.query.definitions.some(X) && (A.method = "GET"), Hr || wr) {
      A.headers = A.headers || {};
      var Gr = "multipart/mixed;";
      wr && Hr && globalThis.__DEV__ !== !1 && S.warn(36), wr ? Gr += "boundary=graphql;subscriptionSpec=1.0,application/json" : Hr && (Gr += "deferSpec=20220824,application/json"), A.headers.accept = Gr;
    }
    if (A.method === "GET") {
      var or = t_(h, B), _e = or.newURI, qe = or.parseError;
      if (qe)
        return An(qe);
      h = _e;
    } else
      try {
        A.body = Uo(B, "Payload");
      } catch (K) {
        return An(K);
      }
    return new C(function(K) {
      var he = n || ue(function() {
        return fetch;
      }) || Pa, Cr = K.next.bind(K);
      return he(h, A).then(function(pe) {
        var Pe;
        _.setContext({ response: pe });
        var we = (Pe = pe.headers) === null || Pe === void 0 ? void 0 : Pe.get("content-type");
        return we !== null && /^multipart\/mixed/i.test(we) ? Vd(pe, Cr) : Kd(_)(pe).then(Cr);
      }).then(function() {
        x = void 0, K.complete();
      }).catch(function(pe) {
        x = void 0, Xd(pe, K);
      }), function() {
        x && x.abort();
      };
    });
  });
}, n_ = function(e) {
  ve(r, e);
  function r(t) {
    t === void 0 && (t = {});
    var n = e.call(this, qu(t).request) || this;
    return n.options = t, n;
  }
  return r;
}(Ar);
const { toString: wa, hasOwnProperty: o_ } = Object.prototype, Ha = Function.prototype.toString, Po = /* @__PURE__ */ new Map();
function k(e, r) {
  try {
    return wo(e, r);
  } finally {
    Po.clear();
  }
}
function wo(e, r) {
  if (e === r)
    return !0;
  const t = wa.call(e), n = wa.call(r);
  if (t !== n)
    return !1;
  switch (t) {
    case "[object Array]":
      if (e.length !== r.length)
        return !1;
    case "[object Object]": {
      if (Ca(e, r))
        return !0;
      const o = Ga(e), i = Ga(r), a = o.length;
      if (a !== i.length)
        return !1;
      for (let s = 0; s < a; ++s)
        if (!o_.call(r, o[s]))
          return !1;
      for (let s = 0; s < a; ++s) {
        const u = o[s];
        if (!wo(e[u], r[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === r.name && e.message === r.message;
    case "[object Number]":
      if (e !== e)
        return r !== r;
    case "[object Boolean]":
    case "[object Date]":
      return +e == +r;
    case "[object RegExp]":
    case "[object String]":
      return e == `${r}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== r.size)
        return !1;
      if (Ca(e, r))
        return !0;
      const o = e.entries(), i = t === "[object Map]";
      for (; ; ) {
        const a = o.next();
        if (a.done)
          break;
        const [s, u] = a.value;
        if (!r.has(s) || i && !wo(u, r.get(s)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      e = new Uint8Array(e), r = new Uint8Array(r);
    case "[object DataView]": {
      let o = e.byteLength;
      if (o === r.byteLength)
        for (; o-- && e[o] === r[o]; )
          ;
      return o === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const o = Ha.call(e);
      return o !== Ha.call(r) ? !1 : !s_(o, a_);
    }
  }
  return !1;
}
function Ga(e) {
  return Object.keys(e).filter(i_, e);
}
function i_(e) {
  return this[e] !== void 0;
}
const a_ = "{ [native code] }";
function s_(e, r) {
  const t = e.length - r.length;
  return t >= 0 && e.indexOf(r, t) === t;
}
function Ca(e, r) {
  let t = Po.get(e);
  if (t) {
    if (t.has(r))
      return !0;
  } else
    Po.set(e, t = /* @__PURE__ */ new Set());
  return t.add(r), !1;
}
function u_() {
}
class c_ {
  constructor(r = 1 / 0, t = u_) {
    this.max = r, this.dispose = t, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(r) {
    return this.map.has(r);
  }
  get(r) {
    const t = this.getNode(r);
    return t && t.value;
  }
  getNode(r) {
    const t = this.map.get(r);
    if (t && t !== this.newest) {
      const { older: n, newer: o } = t;
      o && (o.older = n), n && (n.newer = o), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = o);
    }
    return t;
  }
  set(r, t) {
    let n = this.getNode(r);
    return n ? n.value = t : (n = {
      key: r,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(r, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(r) {
    const t = this.map.get(r);
    return t ? (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(r), this.dispose(t.value, r), !0) : !1;
  }
}
let J = null;
const La = {};
let l_ = 1;
const f_ = () => class {
  constructor() {
    this.id = [
      "slot",
      l_++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let r = J; r; r = r.parent)
      if (this.id in r.slots) {
        const t = r.slots[this.id];
        if (t === La)
          break;
        return r !== J && (J.slots[this.id] = t), !0;
      }
    return J && (J.slots[this.id] = La), !1;
  }
  getValue() {
    if (this.hasValue())
      return J.slots[this.id];
  }
  withValue(r, t, n, o) {
    const i = {
      __proto__: null,
      [this.id]: r
    }, a = J;
    J = { parent: a, slots: i };
    try {
      return t.apply(o, n);
    } finally {
      J = a;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(r) {
    const t = J;
    return function() {
      const n = J;
      try {
        return J = t, r.apply(this, arguments);
      } finally {
        J = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(r, t, n) {
    if (J) {
      const o = J;
      try {
        return J = null, r.apply(n, t);
      } finally {
        J = o;
      }
    } else
      return r.apply(n, t);
  }
};
function Ma(e) {
  try {
    return e();
  } catch {
  }
}
const Sn = "@wry/context:Slot", d_ = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Ma(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Ma(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), ka = d_, zu = ka[Sn] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Sn] || function(e) {
  try {
    Object.defineProperty(ka, Sn, {
      value: e,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return e;
  }
}(f_()), un = new zu(), { hasOwnProperty: __ } = Object.prototype, wi = Array.from || function(e) {
  const r = [];
  return e.forEach((t) => r.push(t)), r;
};
function Vt(e) {
  const { unsubscribe: r } = e;
  typeof r == "function" && (e.unsubscribe = void 0, r());
}
const Qr = [], h_ = 100;
function Rr(e, r) {
  if (!e)
    throw new Error(r || "assertion failure");
}
function p_(e, r) {
  const t = e.length;
  return (
    // Unknown values are not equal to each other.
    t > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    t === r.length && // The underlying value or exception must be the same.
    e[t - 1] === r[t - 1]
  );
}
function $u(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function m_(e) {
  return e.slice(0);
}
class cn {
  constructor(r) {
    this.fn = r, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++cn.count;
  }
  peek() {
    if (this.value.length === 1 && !We(this))
      return Ba(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(r) {
    return Rr(!this.recomputing, "already recomputing"), Ba(this), We(this) ? E_(this, r) : $u(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, this.value.length = 0, Qu(this), Vt(this));
  }
  dispose() {
    this.setDirty(), tc(this), Hi(this, (r, t) => {
      r.setDirty(), nc(r, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(r) {
    r.add(this), this.deps || (this.deps = Qr.pop() || /* @__PURE__ */ new Set()), this.deps.add(r);
  }
  forgetDeps() {
    this.deps && (wi(this.deps).forEach((r) => r.delete(this)), this.deps.clear(), Qr.push(this.deps), this.deps = null);
  }
}
cn.count = 0;
function Ba(e) {
  const r = un.getValue();
  if (r)
    return e.parents.add(r), r.childValues.has(e) || r.childValues.set(e, []), We(e) ? Zu(r, e) : ec(r, e), r;
}
function E_(e, r) {
  return tc(e), un.withValue(e, T_, [e, r]), v_(e, r) && O_(e), $u(e.value);
}
function T_(e, r) {
  e.recomputing = !0, e.value.length = 0;
  try {
    e.value[0] = e.fn.apply(null, r);
  } catch (t) {
    e.value[1] = t;
  }
  e.recomputing = !1;
}
function We(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function O_(e) {
  e.dirty = !1, !We(e) && Ju(e);
}
function Qu(e) {
  Hi(e, Zu);
}
function Ju(e) {
  Hi(e, ec);
}
function Hi(e, r) {
  const t = e.parents.size;
  if (t) {
    const n = wi(e.parents);
    for (let o = 0; o < t; ++o)
      r(n[o], e);
  }
}
function Zu(e, r) {
  Rr(e.childValues.has(r)), Rr(We(r));
  const t = !We(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = Qr.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(r))
    return;
  e.dirtyChildren.add(r), t && Qu(e);
}
function ec(e, r) {
  Rr(e.childValues.has(r)), Rr(!We(r));
  const t = e.childValues.get(r);
  t.length === 0 ? e.childValues.set(r, m_(r.value)) : p_(t, r.value) || e.setDirty(), rc(e, r), !We(e) && Ju(e);
}
function rc(e, r) {
  const t = e.dirtyChildren;
  t && (t.delete(r), t.size === 0 && (Qr.length < h_ && Qr.push(t), e.dirtyChildren = null));
}
function tc(e) {
  e.childValues.size > 0 && e.childValues.forEach((r, t) => {
    nc(e, t);
  }), e.forgetDeps(), Rr(e.dirtyChildren === null);
}
function nc(e, r) {
  r.parents.delete(e), e.childValues.delete(r), rc(e, r);
}
function v_(e, r) {
  if (typeof e.subscribe == "function")
    try {
      Vt(e), e.unsubscribe = e.subscribe.apply(null, r);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
const R_ = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function oc(e) {
  const r = /* @__PURE__ */ new Map(), t = e && e.subscribe;
  function n(o) {
    const i = un.getValue();
    if (i) {
      let a = r.get(o);
      a || r.set(o, a = /* @__PURE__ */ new Set()), i.dependOn(a), typeof t == "function" && (Vt(a), a.unsubscribe = t(o));
    }
  }
  return n.dirty = function(i, a) {
    const s = r.get(i);
    if (s) {
      const u = a && __.call(R_, a) ? a : "setDirty";
      wi(s).forEach((c) => c[u]()), r.delete(i), Vt(s);
    }
  }, n;
}
let xa;
function g_(...e) {
  return (xa || (xa = new Ke(typeof WeakMap == "function"))).lookupArray(e);
}
const Dn = /* @__PURE__ */ new Set();
function Wt(e, { max: r = Math.pow(2, 16), makeCacheKey: t = g_, keyArgs: n, subscribe: o } = /* @__PURE__ */ Object.create(null)) {
  const i = new c_(r, (l) => l.dispose()), a = function() {
    const l = t.apply(null, n ? n.apply(null, arguments) : arguments);
    if (l === void 0)
      return e.apply(null, arguments);
    let f = i.get(l);
    f || (i.set(l, f = new cn(e)), f.subscribe = o, f.forget = () => i.delete(l));
    const d = f.recompute(Array.prototype.slice.call(arguments));
    return i.set(l, f), Dn.add(i), un.hasValue() || (Dn.forEach((_) => _.clean()), Dn.clear()), d;
  };
  Object.defineProperty(a, "size", {
    get() {
      return i.map.size;
    },
    configurable: !1,
    enumerable: !1
  }), Object.freeze(a.options = {
    max: r,
    makeCacheKey: t,
    keyArgs: n,
    subscribe: o
  });
  function s(l) {
    const f = i.get(l);
    f && f.setDirty();
  }
  a.dirtyKey = s, a.dirty = function() {
    s(t.apply(null, arguments));
  };
  function u(l) {
    const f = i.get(l);
    if (f)
      return f.peek();
  }
  a.peekKey = u, a.peek = function() {
    return u(t.apply(null, arguments));
  };
  function c(l) {
    return i.delete(l);
  }
  return a.forgetKey = c, a.forget = function() {
    return c(t.apply(null, arguments));
  }, a.makeCacheKey = t, a.getKey = n ? function() {
    return t.apply(null, n.apply(null, arguments));
  } : t, Object.freeze(a);
}
var b_ = function() {
  function e() {
    this.assumeImmutableResults = !1, this.getFragmentDoc = Wt(Wf);
  }
  return e.prototype.batch = function(r) {
    var t = this, n = typeof r.optimistic == "string" ? r.optimistic : r.optimistic === !1 ? null : void 0, o;
    return this.performTransaction(function() {
      return o = r.update(t);
    }, n), o;
  }, e.prototype.recordOptimisticTransaction = function(r, t) {
    this.performTransaction(r, t);
  }, e.prototype.transformDocument = function(r) {
    return r;
  }, e.prototype.transformForLink = function(r) {
    return r;
  }, e.prototype.identify = function(r) {
  }, e.prototype.gc = function() {
    return [];
  }, e.prototype.modify = function(r) {
    return !1;
  }, e.prototype.readQuery = function(r, t) {
    return t === void 0 && (t = !!r.optimistic), this.read(E(E({}, r), { rootId: r.id || "ROOT_QUERY", optimistic: t }));
  }, e.prototype.readFragment = function(r, t) {
    return t === void 0 && (t = !!r.optimistic), this.read(E(E({}, r), { query: this.getFragmentDoc(r.fragment, r.fragmentName), rootId: r.id, optimistic: t }));
  }, e.prototype.writeQuery = function(r) {
    var t = r.id, n = r.data, o = ye(r, ["id", "data"]);
    return this.write(Object.assign(o, {
      dataId: t || "ROOT_QUERY",
      result: n
    }));
  }, e.prototype.writeFragment = function(r) {
    var t = r.id, n = r.data, o = r.fragment, i = r.fragmentName, a = ye(r, ["id", "data", "fragment", "fragmentName"]);
    return this.write(Object.assign(a, {
      query: this.getFragmentDoc(o, i),
      dataId: t,
      result: n
    }));
  }, e.prototype.updateQuery = function(r, t) {
    return this.batch({
      update: function(n) {
        var o = n.readQuery(r), i = t(o);
        return i == null ? o : (n.writeQuery(E(E({}, r), { data: i })), i);
      }
    });
  }, e.prototype.updateFragment = function(r, t) {
    return this.batch({
      update: function(n) {
        var o = n.readFragment(r), i = t(o);
        return i == null ? o : (n.writeFragment(E(E({}, r), { data: i })), i);
      }
    });
  }, e;
}(), ic = function(e) {
  ve(r, e);
  function r(t, n, o, i) {
    var a, s = e.call(this, t) || this;
    if (s.message = t, s.path = n, s.query = o, s.variables = i, Array.isArray(s.path)) {
      s.missing = s.message;
      for (var u = s.path.length - 1; u >= 0; --u)
        s.missing = (a = {}, a[s.path[u]] = s.missing, a);
    } else
      s.missing = s.path;
    return s.__proto__ = r.prototype, s;
  }
  return r;
}(Error), Y = Object.prototype.hasOwnProperty;
function xr(e) {
  return e == null;
}
function ac(e, r) {
  var t = e.__typename, n = e.id, o = e._id;
  if (typeof t == "string" && (r && (r.keyObject = xr(n) ? xr(o) ? void 0 : { _id: o } : { id: n }), xr(n) && !xr(o) && (n = o), !xr(n)))
    return "".concat(t, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var sc = {
  dataIdFromObject: ac,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1
};
function I_(e) {
  return vr(sc, e);
}
function uc(e) {
  var r = e.canonizeResults;
  return r === void 0 ? sc.canonizeResults : r;
}
function N_(e, r) {
  return G(r) ? e.get(r.__ref, "__typename") : r && r.__typename;
}
var cc = /^[_a-z][_0-9a-z]*/i;
function Xe(e) {
  var r = e.match(cc);
  return r ? r[0] : e;
}
function Ho(e, r, t) {
  return M(r) ? j(r) ? r.every(function(n) {
    return Ho(e, n, t);
  }) : e.selections.every(function(n) {
    if (je(n) && ot(n, t)) {
      var o = Fe(n);
      return Y.call(r, o) && (!n.selectionSet || Ho(n.selectionSet, r[o], t));
    }
    return !0;
  }) : !1;
}
function fr(e) {
  return M(e) && !G(e) && !j(e);
}
function y_() {
  return new Ve();
}
function lc(e, r) {
  var t = nn(sn(e));
  return {
    fragmentMap: t,
    lookupFragment: function(n) {
      var o = t[n];
      return !o && r && (o = r.lookup(n)), o || null;
    }
  };
}
var Dt = /* @__PURE__ */ Object.create(null), Un = function() {
  return Dt;
}, Fa = /* @__PURE__ */ Object.create(null), Jr = function() {
  function e(r, t) {
    var n = this;
    this.policies = r, this.group = t, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(o, i) {
      return yo(G(o) ? n.get(o.__ref, i) : o && o[i]);
    }, this.canRead = function(o) {
      return G(o) ? n.has(o.__ref) : typeof o == "object";
    }, this.toReference = function(o, i) {
      if (typeof o == "string")
        return pr(o);
      if (G(o))
        return o;
      var a = n.policies.identify(o)[0];
      if (a) {
        var s = pr(a);
        return i && n.merge(a, o), s;
      }
    };
  }
  return e.prototype.toObject = function() {
    return E({}, this.data);
  }, e.prototype.has = function(r) {
    return this.lookup(r, !0) !== void 0;
  }, e.prototype.get = function(r, t) {
    if (this.group.depend(r, t), Y.call(this.data, r)) {
      var n = this.data[r];
      if (n && Y.call(n, t))
        return n[t];
    }
    if (t === "__typename" && Y.call(this.policies.rootTypenamesById, r))
      return this.policies.rootTypenamesById[r];
    if (this instanceof Ce)
      return this.parent.get(r, t);
  }, e.prototype.lookup = function(r, t) {
    if (t && this.group.depend(r, "__exists"), Y.call(this.data, r))
      return this.data[r];
    if (this instanceof Ce)
      return this.parent.lookup(r, t);
    if (this.policies.rootTypenamesById[r])
      return /* @__PURE__ */ Object.create(null);
  }, e.prototype.merge = function(r, t) {
    var n = this, o;
    G(r) && (r = r.__ref), G(t) && (t = t.__ref);
    var i = typeof r == "string" ? this.lookup(o = r) : r, a = typeof t == "string" ? this.lookup(o = t) : t;
    if (a) {
      S(typeof o == "string", 1);
      var s = new Ve(S_).merge(i, a);
      if (this.data[o] = s, s !== i && (delete this.refs[o], this.group.caching)) {
        var u = /* @__PURE__ */ Object.create(null);
        i || (u.__exists = 1), Object.keys(a).forEach(function(c) {
          if (!i || i[c] !== s[c]) {
            u[c] = 1;
            var l = Xe(c);
            l !== c && !n.policies.hasKeyArgs(s.__typename, l) && (u[l] = 1), s[c] === void 0 && !(n instanceof Ce) && delete s[c];
          }
        }), u.__typename && !(i && i.__typename) && this.policies.rootTypenamesById[o] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(c) {
          return n.group.dirty(o, c);
        });
      }
    }
  }, e.prototype.modify = function(r, t) {
    var n = this, o = this.lookup(r);
    if (o) {
      var i = /* @__PURE__ */ Object.create(null), a = !1, s = !0, u = {
        DELETE: Dt,
        INVALIDATE: Fa,
        isReference: G,
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function(c, l) {
          return n.policies.readField(typeof c == "string" ? {
            fieldName: c,
            from: l || pr(r)
          } : c, { store: n });
        }
      };
      if (Object.keys(o).forEach(function(c) {
        var l = Xe(c), f = o[c];
        if (f !== void 0) {
          var d = typeof t == "function" ? t : t[c] || t[l];
          if (d) {
            var _ = d === Un ? Dt : d(yo(f), E(E({}, u), { fieldName: l, storeFieldName: c, storage: n.getStorage(r, c) }));
            _ === Fa ? n.group.dirty(r, c) : (_ === Dt && (_ = void 0), _ !== f && (i[c] = _, a = !0, f = _));
          }
          f !== void 0 && (s = !1);
        }
      }), a)
        return this.merge(r, i), s && (this instanceof Ce ? this.data[r] = void 0 : delete this.data[r], this.group.dirty(r, "__exists")), !0;
    }
    return !1;
  }, e.prototype.delete = function(r, t, n) {
    var o, i = this.lookup(r);
    if (i) {
      var a = this.getFieldValue(i, "__typename"), s = t && n ? this.policies.getStoreFieldName({ typename: a, fieldName: t, args: n }) : t;
      return this.modify(r, s ? (o = {}, o[s] = Un, o) : Un);
    }
    return !1;
  }, e.prototype.evict = function(r, t) {
    var n = !1;
    return r.id && (Y.call(this.data, r.id) && (n = this.delete(r.id, r.fieldName, r.args)), this instanceof Ce && this !== t && (n = this.parent.evict(r, t) || n), (r.fieldName || n) && this.group.dirty(r.id, r.fieldName || "__exists")), n;
  }, e.prototype.clear = function() {
    this.replace(null);
  }, e.prototype.extract = function() {
    var r = this, t = this.toObject(), n = [];
    return this.getRootIdSet().forEach(function(o) {
      Y.call(r.policies.rootTypenamesById, o) || n.push(o);
    }), n.length && (t.__META = { extraRootIds: n.sort() }), t;
  }, e.prototype.replace = function(r) {
    var t = this;
    if (Object.keys(this.data).forEach(function(i) {
      r && Y.call(r, i) || t.delete(i);
    }), r) {
      var n = r.__META, o = ye(r, ["__META"]);
      Object.keys(o).forEach(function(i) {
        t.merge(i, o[i]);
      }), n && n.extraRootIds.forEach(this.retain, this);
    }
  }, e.prototype.retain = function(r) {
    return this.rootIds[r] = (this.rootIds[r] || 0) + 1;
  }, e.prototype.release = function(r) {
    if (this.rootIds[r] > 0) {
      var t = --this.rootIds[r];
      return t || delete this.rootIds[r], t;
    }
    return 0;
  }, e.prototype.getRootIdSet = function(r) {
    return r === void 0 && (r = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(r.add, r), this instanceof Ce ? this.parent.getRootIdSet(r) : Object.keys(this.policies.rootTypenamesById).forEach(r.add, r), r;
  }, e.prototype.gc = function() {
    var r = this, t = this.getRootIdSet(), n = this.toObject();
    t.forEach(function(a) {
      Y.call(n, a) && (Object.keys(r.findChildRefIds(a)).forEach(t.add, t), delete n[a]);
    });
    var o = Object.keys(n);
    if (o.length) {
      for (var i = this; i instanceof Ce; )
        i = i.parent;
      o.forEach(function(a) {
        return i.delete(a);
      });
    }
    return o;
  }, e.prototype.findChildRefIds = function(r) {
    if (!Y.call(this.refs, r)) {
      var t = this.refs[r] = /* @__PURE__ */ Object.create(null), n = this.data[r];
      if (!n)
        return t;
      var o = /* @__PURE__ */ new Set([n]);
      o.forEach(function(i) {
        G(i) && (t[i.__ref] = !0), M(i) && Object.keys(i).forEach(function(a) {
          var s = i[a];
          M(s) && o.add(s);
        });
      });
    }
    return this.refs[r];
  }, e.prototype.makeCacheKey = function() {
    return this.group.keyMaker.lookupArray(arguments);
  }, e;
}(), fc = function() {
  function e(r, t) {
    t === void 0 && (t = null), this.caching = r, this.parent = t, this.d = null, this.resetCaching();
  }
  return e.prototype.resetCaching = function() {
    this.d = this.caching ? oc() : null, this.keyMaker = new Ke(Se);
  }, e.prototype.depend = function(r, t) {
    if (this.d) {
      this.d(Pn(r, t));
      var n = Xe(t);
      n !== t && this.d(Pn(r, n)), this.parent && this.parent.depend(r, t);
    }
  }, e.prototype.dirty = function(r, t) {
    this.d && this.d.dirty(Pn(r, t), t === "__exists" ? "forget" : "setDirty");
  }, e;
}();
function Pn(e, r) {
  return r + "#" + e;
}
function ja(e, r) {
  Yr(e) && e.group.depend(r, "__exists");
}
(function(e) {
  var r = function(t) {
    ve(n, t);
    function n(o) {
      var i = o.policies, a = o.resultCaching, s = a === void 0 ? !0 : a, u = o.seed, c = t.call(this, i, new fc(s)) || this;
      return c.stump = new A_(c), c.storageTrie = new Ke(Se), u && c.replace(u), c;
    }
    return n.prototype.addLayer = function(o, i) {
      return this.stump.addLayer(o, i);
    }, n.prototype.removeLayer = function() {
      return this;
    }, n.prototype.getStorage = function() {
      return this.storageTrie.lookupArray(arguments);
    }, n;
  }(e);
  e.Root = r;
})(Jr || (Jr = {}));
var Ce = function(e) {
  ve(r, e);
  function r(t, n, o, i) {
    var a = e.call(this, n.policies, i) || this;
    return a.id = t, a.parent = n, a.replay = o, a.group = i, o(a), a;
  }
  return r.prototype.addLayer = function(t, n) {
    return new r(t, this, n, this.group);
  }, r.prototype.removeLayer = function(t) {
    var n = this, o = this.parent.removeLayer(t);
    return t === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(i) {
      var a = n.data[i], s = o.lookup(i);
      s ? a ? a !== s && Object.keys(a).forEach(function(u) {
        k(a[u], s[u]) || n.group.dirty(i, u);
      }) : (n.group.dirty(i, "__exists"), Object.keys(s).forEach(function(u) {
        n.group.dirty(i, u);
      })) : n.delete(i);
    }), o) : o === this.parent ? this : o.addLayer(this.id, this.replay);
  }, r.prototype.toObject = function() {
    return E(E({}, this.parent.toObject()), this.data);
  }, r.prototype.findChildRefIds = function(t) {
    var n = this.parent.findChildRefIds(t);
    return Y.call(this.data, t) ? E(E({}, n), e.prototype.findChildRefIds.call(this, t)) : n;
  }, r.prototype.getStorage = function() {
    for (var t = this.parent; t.parent; )
      t = t.parent;
    return t.getStorage.apply(t, arguments);
  }, r;
}(Jr), A_ = function(e) {
  ve(r, e);
  function r(t) {
    return e.call(this, "EntityStore.Stump", t, function() {
    }, new fc(t.group.caching, t.group)) || this;
  }
  return r.prototype.removeLayer = function() {
    return this;
  }, r.prototype.merge = function() {
    return this.parent.merge.apply(this.parent, arguments);
  }, r;
}(Ce);
function S_(e, r, t) {
  var n = e[t], o = r[t];
  return k(n, o) ? n : o;
}
function Yr(e) {
  return !!(e instanceof Jr && e.group.caching);
}
function D_(e) {
  return M(e) ? j(e) ? e.slice(0) : E({ __proto__: Object.getPrototypeOf(e) }, e) : e;
}
var Go = function() {
  function e() {
    this.known = new (Hu ? WeakSet : Set)(), this.pool = new Ke(Se), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
  }
  return e.prototype.isKnown = function(r) {
    return M(r) && this.known.has(r);
  }, e.prototype.pass = function(r) {
    if (M(r)) {
      var t = D_(r);
      return this.passes.set(t, r), t;
    }
    return r;
  }, e.prototype.admit = function(r) {
    var t = this;
    if (M(r)) {
      var n = this.passes.get(r);
      if (n)
        return n;
      var o = Object.getPrototypeOf(r);
      switch (o) {
        case Array.prototype: {
          if (this.known.has(r))
            return r;
          var i = r.map(this.admit, this), a = this.pool.lookupArray(i);
          return a.array || (this.known.add(a.array = i), globalThis.__DEV__ !== !1 && Object.freeze(i)), a.array;
        }
        case null:
        case Object.prototype: {
          if (this.known.has(r))
            return r;
          var s = Object.getPrototypeOf(r), u = [s], c = this.sortedKeys(r);
          u.push(c.json);
          var l = u.length;
          c.sorted.forEach(function(_) {
            u.push(t.admit(r[_]));
          });
          var a = this.pool.lookupArray(u);
          if (!a.object) {
            var f = a.object = Object.create(s);
            this.known.add(f), c.sorted.forEach(function(_, h) {
              f[_] = u[l + h];
            }), globalThis.__DEV__ !== !1 && Object.freeze(f);
          }
          return a.object;
        }
      }
    }
    return r;
  }, e.prototype.sortedKeys = function(r) {
    var t = Object.keys(r), n = this.pool.lookupArray(t);
    if (!n.keys) {
      t.sort();
      var o = JSON.stringify(t);
      (n.keys = this.keysByJSON.get(o)) || this.keysByJSON.set(o, n.keys = { sorted: t, json: o });
    }
    return n.keys;
  }, e;
}(), Ze = Object.assign(function(e) {
  if (M(e)) {
    Co === void 0 && Va();
    var r = Co.admit(e), t = Lo.get(r);
    return t === void 0 && Lo.set(r, t = JSON.stringify(r)), t;
  }
  return JSON.stringify(e);
}, {
  reset: Va
}), Co, Lo;
function Va() {
  Co = new Go(), Lo = new (Se ? WeakMap : Map)();
}
function Wa(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults
  ];
}
var U_ = function() {
  function e(r) {
    var t = this;
    this.knownResults = new (Se ? WeakMap : Map)(), this.config = vr(r, {
      addTypename: r.addTypename !== !1,
      canonizeResults: uc(r)
    }), this.canon = r.canon || new Go(), this.executeSelectionSet = Wt(function(n) {
      var o, i = n.context.canonizeResults, a = Wa(n);
      a[3] = !i;
      var s = (o = t.executeSelectionSet).peek.apply(o, a);
      return s ? i ? E(E({}, s), { result: t.canon.admit(s.result) }) : s : (ja(n.context.store, n.enclosingRef.__ref), t.execSelectionSetImpl(n));
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: Wa,
      makeCacheKey: function(n, o, i, a) {
        if (Yr(i.store))
          return i.store.makeCacheKey(n, G(o) ? o.__ref : o, i.varString, a);
      }
    }), this.executeSubSelectedArray = Wt(function(n) {
      return ja(n.context.store, n.enclosingRef.__ref), t.execSubSelectedArrayImpl(n);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(n) {
        var o = n.field, i = n.array, a = n.context;
        if (Yr(a.store))
          return a.store.makeCacheKey(o, i, a.varString);
      }
    });
  }
  return e.prototype.resetCanon = function() {
    this.canon = new Go();
  }, e.prototype.diffQueryAgainstStore = function(r) {
    var t = r.store, n = r.query, o = r.rootId, i = o === void 0 ? "ROOT_QUERY" : o, a = r.variables, s = r.returnPartialData, u = s === void 0 ? !0 : s, c = r.canonizeResults, l = c === void 0 ? this.config.canonizeResults : c, f = this.config.cache.policies;
    a = E(E({}, Ii(Cu(n))), a);
    var d = pr(i), _ = this.executeSelectionSet({
      selectionSet: st(n).selectionSet,
      objectOrReference: d,
      enclosingRef: d,
      context: E({ store: t, query: n, policies: f, variables: a, varString: Ze(a), canonizeResults: l }, lc(n, this.config.fragments))
    }), h;
    if (_.missing && (h = [
      new ic(P_(_.missing), _.missing, n, a)
    ], !u))
      throw h[0];
    return {
      result: _.result,
      complete: !h,
      missing: h
    };
  }, e.prototype.isFresh = function(r, t, n, o) {
    if (Yr(o.store) && this.knownResults.get(r) === n) {
      var i = this.executeSelectionSet.peek(n, t, o, this.canon.isKnown(r));
      if (i && r === i.result)
        return !0;
    }
    return !1;
  }, e.prototype.execSelectionSetImpl = function(r) {
    var t = this, n = r.selectionSet, o = r.objectOrReference, i = r.enclosingRef, a = r.context;
    if (G(o) && !a.policies.rootTypenamesById[o.__ref] && !a.store.has(o.__ref))
      return {
        result: this.canon.empty,
        missing: "Dangling reference to missing ".concat(o.__ref, " object")
      };
    var s = a.variables, u = a.policies, c = a.store, l = c.getFieldValue(o, "__typename"), f = [], d, _ = new Ve();
    this.config.addTypename && typeof l == "string" && !u.rootIdsByTypename[l] && f.push({ __typename: l });
    function h(O, b) {
      var N;
      return O.missing && (d = _.merge(d, (N = {}, N[b] = O.missing, N))), O.result;
    }
    var m = new Set(n.selections);
    m.forEach(function(O) {
      var b, N;
      if (ot(O, s))
        if (je(O)) {
          var g = u.readField({
            fieldName: O.name.value,
            field: O,
            variables: a.variables,
            from: o
          }, a), I = Fe(O);
          g === void 0 ? Ni.added(O) || (d = _.merge(d, (b = {}, b[I] = "Can't find field '".concat(O.name.value, "' on ").concat(G(o) ? o.__ref + " object" : "object " + JSON.stringify(o, null, 2)), b))) : j(g) ? g = h(t.executeSubSelectedArray({
            field: O,
            array: g,
            enclosingRef: i,
            context: a
          }), I) : O.selectionSet ? g != null && (g = h(t.executeSelectionSet({
            selectionSet: O.selectionSet,
            objectOrReference: g,
            enclosingRef: G(g) ? g : i,
            context: a
          }), I)) : a.canonizeResults && (g = t.canon.pass(g)), g !== void 0 && f.push((N = {}, N[I] = g, N));
        } else {
          var A = on(O, a.lookupFragment);
          if (!A && O.kind === $.FRAGMENT_SPREAD)
            throw Z(7, O.name.value);
          A && u.fragmentMatches(A, l) && A.selectionSet.selections.forEach(m.add, m);
        }
    });
    var T = yi(f), p = { result: T, missing: d }, v = a.canonizeResults ? this.canon.admit(p) : yo(p);
    return v.result && this.knownResults.set(v.result, n), v;
  }, e.prototype.execSubSelectedArrayImpl = function(r) {
    var t = this, n = r.field, o = r.array, i = r.enclosingRef, a = r.context, s, u = new Ve();
    function c(l, f) {
      var d;
      return l.missing && (s = u.merge(s, (d = {}, d[f] = l.missing, d))), l.result;
    }
    return n.selectionSet && (o = o.filter(a.store.canRead)), o = o.map(function(l, f) {
      return l === null ? null : j(l) ? c(t.executeSubSelectedArray({
        field: n,
        array: l,
        enclosingRef: i,
        context: a
      }), f) : n.selectionSet ? c(t.executeSelectionSet({
        selectionSet: n.selectionSet,
        objectOrReference: l,
        enclosingRef: G(l) ? l : i,
        context: a
      }), f) : (globalThis.__DEV__ !== !1 && w_(a.store, n, l), l);
    }), {
      result: a.canonizeResults ? this.canon.admit(o) : o,
      missing: s
    };
  }, e;
}();
function P_(e) {
  try {
    JSON.stringify(e, function(r, t) {
      if (typeof t == "string")
        throw t;
      return t;
    });
  } catch (r) {
    return r;
  }
}
function w_(e, r, t) {
  if (!r.selectionSet) {
    var n = /* @__PURE__ */ new Set([t]);
    n.forEach(function(o) {
      M(o) && (S(
        !G(o),
        8,
        N_(e, o),
        r.name.value
      ), Object.values(o).forEach(n.add, n));
    });
  }
}
var Gi = new zu(), Xa = /* @__PURE__ */ new WeakMap();
function qr(e) {
  var r = Xa.get(e);
  return r || Xa.set(e, r = {
    vars: /* @__PURE__ */ new Set(),
    dep: oc()
  }), r;
}
function Ka(e) {
  qr(e).vars.forEach(function(r) {
    return r.forgetCache(e);
  });
}
function H_(e) {
  qr(e).vars.forEach(function(r) {
    return r.attachCache(e);
  });
}
function G_(e) {
  var r = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new Set(), n = function(i) {
    if (arguments.length > 0) {
      if (e !== i) {
        e = i, r.forEach(function(u) {
          qr(u).dep.dirty(n), C_(u);
        });
        var a = Array.from(t);
        t.clear(), a.forEach(function(u) {
          return u(e);
        });
      }
    } else {
      var s = Gi.getValue();
      s && (o(s), qr(s).dep(n));
    }
    return e;
  };
  n.onNextChange = function(i) {
    return t.add(i), function() {
      t.delete(i);
    };
  };
  var o = n.attachCache = function(i) {
    return r.add(i), qr(i).vars.add(n), n;
  };
  return n.forgetCache = function(i) {
    return r.delete(i);
  }, n;
}
function C_(e) {
  e.broadcastWatches && e.broadcastWatches();
}
var Ya = /* @__PURE__ */ Object.create(null);
function Ci(e) {
  var r = JSON.stringify(e);
  return Ya[r] || (Ya[r] = /* @__PURE__ */ Object.create(null));
}
function qa(e) {
  var r = Ci(e);
  return r.keyFieldsFn || (r.keyFieldsFn = function(t, n) {
    var o = function(a, s) {
      return n.readField(s, a);
    }, i = n.keyObject = Li(e, function(a) {
      var s = Er(n.storeObject, a, o);
      return s === void 0 && t !== n.storeObject && Y.call(t, a[0]) && (s = Er(t, a, _c)), S(s !== void 0, 2, a.join("."), t), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(i));
  });
}
function za(e) {
  var r = Ci(e);
  return r.keyArgsFn || (r.keyArgsFn = function(t, n) {
    var o = n.field, i = n.variables, a = n.fieldName, s = Li(e, function(c) {
      var l = c[0], f = l.charAt(0);
      if (f === "@") {
        if (o && Oe(o.directives)) {
          var d = l.slice(1), _ = o.directives.find(function(p) {
            return p.name.value === d;
          }), h = _ && an(_, i);
          return h && Er(h, c.slice(1));
        }
        return;
      }
      if (f === "$") {
        var m = l.slice(1);
        if (i && Y.call(i, m)) {
          var T = c.slice(0);
          return T[0] = m, Er(i, T);
        }
        return;
      }
      if (t)
        return Er(t, c);
    }), u = JSON.stringify(s);
    return (t || u !== "{}") && (a += ":" + u), a;
  });
}
function Li(e, r) {
  var t = new Ve();
  return dc(e).reduce(function(n, o) {
    var i, a = r(o);
    if (a !== void 0) {
      for (var s = o.length - 1; s >= 0; --s)
        a = (i = {}, i[o[s]] = a, i);
      n = t.merge(n, a);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function dc(e) {
  var r = Ci(e);
  if (!r.paths) {
    var t = r.paths = [], n = [];
    e.forEach(function(o, i) {
      j(o) ? (dc(o).forEach(function(a) {
        return t.push(n.concat(a));
      }), n.length = 0) : (n.push(o), j(e[i + 1]) || (t.push(n.slice(0)), n.length = 0));
    });
  }
  return r.paths;
}
function _c(e, r) {
  return e[r];
}
function Er(e, r, t) {
  return t = t || _c, hc(r.reduce(function n(o, i) {
    return j(o) ? o.map(function(a) {
      return n(a, i);
    }) : o && t(o, i);
  }, e));
}
function hc(e) {
  return M(e) ? j(e) ? e.map(hc) : Li(Object.keys(e).sort(), function(r) {
    return Er(e, r);
  }) : e;
}
bi.setStringify(Ze);
function Mo(e) {
  return e.args !== void 0 ? e.args : e.field ? an(e.field, e.variables) : null;
}
var L_ = function() {
}, $a = function(e, r) {
  return r.fieldName;
}, Qa = function(e, r, t) {
  var n = t.mergeObjects;
  return n(e, r);
}, Ja = function(e, r) {
  return r;
}, M_ = function() {
  function e(r) {
    this.config = r, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = E({ dataIdFromObject: ac }, r), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), r.possibleTypes && this.addPossibleTypes(r.possibleTypes), r.typePolicies && this.addTypePolicies(r.typePolicies);
  }
  return e.prototype.identify = function(r, t) {
    var n, o = this, i = t && (t.typename || ((n = t.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || r.__typename;
    if (i === this.rootTypenamesById.ROOT_QUERY)
      return ["ROOT_QUERY"];
    for (var a = t && t.storeObject || r, s = E(E({}, t), { typename: i, storeObject: a, readField: t && t.readField || function() {
      var d = Mi(arguments, a);
      return o.readField(d, {
        store: o.cache.data,
        variables: d.variables
      });
    } }), u, c = i && this.getTypePolicy(i), l = c && c.keyFn || this.config.dataIdFromObject; l; ) {
      var f = l(E(E({}, r), a), s);
      if (j(f))
        l = qa(f);
      else {
        u = f;
        break;
      }
    }
    return u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
  }, e.prototype.addTypePolicies = function(r) {
    var t = this;
    Object.keys(r).forEach(function(n) {
      var o = r[n], i = o.queryType, a = o.mutationType, s = o.subscriptionType, u = ye(o, ["queryType", "mutationType", "subscriptionType"]);
      i && t.setRootTypename("Query", n), a && t.setRootTypename("Mutation", n), s && t.setRootTypename("Subscription", n), Y.call(t.toBeAdded, n) ? t.toBeAdded[n].push(u) : t.toBeAdded[n] = [u];
    });
  }, e.prototype.updateTypePolicy = function(r, t) {
    var n = this, o = this.getTypePolicy(r), i = t.keyFields, a = t.fields;
    function s(u, c) {
      u.merge = typeof c == "function" ? c : c === !0 ? Qa : c === !1 ? Ja : u.merge;
    }
    s(o, t.merge), o.keyFn = i === !1 ? L_ : j(i) ? qa(i) : typeof i == "function" ? i : o.keyFn, a && Object.keys(a).forEach(function(u) {
      var c = n.getFieldPolicy(r, u, !0), l = a[u];
      if (typeof l == "function")
        c.read = l;
      else {
        var f = l.keyArgs, d = l.read, _ = l.merge;
        c.keyFn = f === !1 ? $a : j(f) ? za(f) : typeof f == "function" ? f : c.keyFn, typeof d == "function" && (c.read = d), s(c, _);
      }
      c.read && c.merge && (c.keyFn = c.keyFn || $a);
    });
  }, e.prototype.setRootTypename = function(r, t) {
    t === void 0 && (t = r);
    var n = "ROOT_" + r.toUpperCase(), o = this.rootTypenamesById[n];
    t !== o && (S(!o || o === r, 3, r), o && delete this.rootIdsByTypename[o], this.rootIdsByTypename[t] = n, this.rootTypenamesById[n] = t);
  }, e.prototype.addPossibleTypes = function(r) {
    var t = this;
    this.usingPossibleTypes = !0, Object.keys(r).forEach(function(n) {
      t.getSupertypeSet(n, !0), r[n].forEach(function(o) {
        t.getSupertypeSet(o, !0).add(n);
        var i = o.match(cc);
        (!i || i[0] !== o) && t.fuzzySubtypes.set(o, new RegExp(o));
      });
    });
  }, e.prototype.getTypePolicy = function(r) {
    var t = this;
    if (!Y.call(this.typePolicies, r)) {
      var n = this.typePolicies[r] = /* @__PURE__ */ Object.create(null);
      n.fields = /* @__PURE__ */ Object.create(null);
      var o = this.supertypeMap.get(r);
      !o && this.fuzzySubtypes.size && (o = this.getSupertypeSet(r, !0), this.fuzzySubtypes.forEach(function(a, s) {
        if (a.test(r)) {
          var u = t.supertypeMap.get(s);
          u && u.forEach(function(c) {
            return o.add(c);
          });
        }
      })), o && o.size && o.forEach(function(a) {
        var s = t.getTypePolicy(a), u = s.fields, c = ye(s, ["fields"]);
        Object.assign(n, c), Object.assign(n.fields, u);
      });
    }
    var i = this.toBeAdded[r];
    return i && i.length && i.splice(0).forEach(function(a) {
      t.updateTypePolicy(r, a);
    }), this.typePolicies[r];
  }, e.prototype.getFieldPolicy = function(r, t, n) {
    if (r) {
      var o = this.getTypePolicy(r).fields;
      return o[t] || n && (o[t] = /* @__PURE__ */ Object.create(null));
    }
  }, e.prototype.getSupertypeSet = function(r, t) {
    var n = this.supertypeMap.get(r);
    return !n && t && this.supertypeMap.set(r, n = /* @__PURE__ */ new Set()), n;
  }, e.prototype.fragmentMatches = function(r, t, n, o) {
    var i = this;
    if (!r.typeCondition)
      return !0;
    if (!t)
      return !1;
    var a = r.typeCondition.name.value;
    if (t === a)
      return !0;
    if (this.usingPossibleTypes && this.supertypeMap.has(a))
      for (var s = this.getSupertypeSet(t, !0), u = [s], c = function(h) {
        var m = i.getSupertypeSet(h, !1);
        m && m.size && u.indexOf(m) < 0 && u.push(m);
      }, l = !!(n && this.fuzzySubtypes.size), f = !1, d = 0; d < u.length; ++d) {
        var _ = u[d];
        if (_.has(a))
          return s.has(a) || (f && globalThis.__DEV__ !== !1 && S.warn(4, t, a), s.add(a)), !0;
        _.forEach(c), l && d === u.length - 1 && Ho(r.selectionSet, n, o) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(h, m) {
          var T = t.match(h);
          T && T[0] === t && c(m);
        }));
      }
    return !1;
  }, e.prototype.hasKeyArgs = function(r, t) {
    var n = this.getFieldPolicy(r, t, !1);
    return !!(n && n.keyFn);
  }, e.prototype.getStoreFieldName = function(r) {
    var t = r.typename, n = r.fieldName, o = this.getFieldPolicy(t, n, !1), i, a = o && o.keyFn;
    if (a && t)
      for (var s = {
        typename: t,
        fieldName: n,
        field: r.field || null,
        variables: r.variables
      }, u = Mo(r); a; ) {
        var c = a(u, s);
        if (j(c))
          a = za(c);
        else {
          i = c || n;
          break;
        }
      }
    return i === void 0 && (i = r.field ? rd(r.field, r.variables) : bi(n, Mo(r))), i === !1 ? n : n === Xe(i) ? i : n + ":" + i;
  }, e.prototype.readField = function(r, t) {
    var n = r.from;
    if (n) {
      var o = r.field || r.fieldName;
      if (o) {
        if (r.typename === void 0) {
          var i = t.store.getFieldValue(n, "__typename");
          i && (r.typename = i);
        }
        var a = this.getStoreFieldName(r), s = Xe(a), u = t.store.getFieldValue(n, a), c = this.getFieldPolicy(r.typename, s, !1), l = c && c.read;
        if (l) {
          var f = Za(this, n, r, t, t.store.getStorage(G(n) ? n.__ref : n, a));
          return Gi.withValue(this.cache, l, [
            u,
            f
          ]);
        }
        return u;
      }
    }
  }, e.prototype.getReadFunction = function(r, t) {
    var n = this.getFieldPolicy(r, t, !1);
    return n && n.read;
  }, e.prototype.getMergeFunction = function(r, t, n) {
    var o = this.getFieldPolicy(r, t, !1), i = o && o.merge;
    return !i && n && (o = this.getTypePolicy(n), i = o && o.merge), i;
  }, e.prototype.runMergeFunction = function(r, t, n, o, i) {
    var a = n.field, s = n.typename, u = n.merge;
    return u === Qa ? pc(o.store)(r, t) : u === Ja ? t : (o.overwrite && (r = void 0), u(r, t, Za(this, void 0, {
      typename: s,
      fieldName: a.name.value,
      field: a,
      variables: o.variables
    }, o, i || /* @__PURE__ */ Object.create(null))));
  }, e;
}();
function Za(e, r, t, n, o) {
  var i = e.getStoreFieldName(t), a = Xe(i), s = t.variables || n.variables, u = n.store, c = u.toReference, l = u.canRead;
  return {
    args: Mo(t),
    field: t.field || null,
    fieldName: a,
    storeFieldName: i,
    variables: s,
    isReference: G,
    toReference: c,
    storage: o,
    cache: e.cache,
    canRead: l,
    readField: function() {
      return e.readField(Mi(arguments, r, s), n);
    },
    mergeObjects: pc(n.store)
  };
}
function Mi(e, r, t) {
  var n = e[0], o = e[1], i = e.length, a;
  return typeof n == "string" ? a = {
    fieldName: n,
    from: i > 1 ? o : r
  } : (a = E({}, n), Y.call(a, "from") || (a.from = r)), globalThis.__DEV__ !== !1 && a.from === void 0 && globalThis.__DEV__ !== !1 && S.warn(5, Du(Array.from(e))), a.variables === void 0 && (a.variables = t), a;
}
function pc(e) {
  return function(t, n) {
    if (j(t) || j(n))
      throw Z(6);
    if (M(t) && M(n)) {
      var o = e.getFieldValue(t, "__typename"), i = e.getFieldValue(n, "__typename"), a = o && i && o !== i;
      if (a)
        return n;
      if (G(t) && fr(n))
        return e.merge(t.__ref, n), t;
      if (fr(t) && G(n))
        return e.merge(t, n.__ref), n;
      if (fr(t) && fr(n))
        return E(E({}, t), n);
    }
    return n;
  };
}
function wn(e, r, t) {
  var n = "".concat(r).concat(t), o = e.flavors.get(n);
  return o || e.flavors.set(n, o = e.clientOnly === r && e.deferred === t ? e : E(E({}, e), { clientOnly: r, deferred: t })), o;
}
var k_ = function() {
  function e(r, t, n) {
    this.cache = r, this.reader = t, this.fragments = n;
  }
  return e.prototype.writeToStore = function(r, t) {
    var n = this, o = t.query, i = t.result, a = t.dataId, s = t.variables, u = t.overwrite, c = at(o), l = y_();
    s = E(E({}, Ii(c)), s);
    var f = E(E({ store: r, written: /* @__PURE__ */ Object.create(null), merge: function(_, h) {
      return l.merge(_, h);
    }, variables: s, varString: Ze(s) }, lc(o, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
      result: i || /* @__PURE__ */ Object.create(null),
      dataId: a,
      selectionSet: c.selectionSet,
      mergeTree: { map: /* @__PURE__ */ new Map() },
      context: f
    });
    if (!G(d))
      throw Z(9, i);
    return f.incomingById.forEach(function(_, h) {
      var m = _.storeObject, T = _.mergeTree, p = _.fieldNodeSet, v = pr(h);
      if (T && T.map.size) {
        var O = n.applyMerges(T, v, m, f);
        if (G(O))
          return;
        m = O;
      }
      if (globalThis.__DEV__ !== !1 && !f.overwrite) {
        var b = /* @__PURE__ */ Object.create(null);
        p.forEach(function(I) {
          I.selectionSet && (b[I.name.value] = !0);
        });
        var N = function(I) {
          return b[Xe(I)] === !0;
        }, g = function(I) {
          var A = T && T.map.get(I);
          return !!(A && A.info && A.info.merge);
        };
        Object.keys(m).forEach(function(I) {
          N(I) && !g(I) && B_(v, m, I, f.store);
        });
      }
      r.merge(h, m);
    }), r.retain(d.__ref), d;
  }, e.prototype.processSelectionSet = function(r) {
    var t = this, n = r.dataId, o = r.result, i = r.selectionSet, a = r.context, s = r.mergeTree, u = this.cache.policies, c = /* @__PURE__ */ Object.create(null), l = n && u.rootTypenamesById[n] || Ro(o, i, a.fragmentMap) || n && a.store.get(n, "__typename");
    typeof l == "string" && (c.__typename = l);
    var f = function() {
      var O = Mi(arguments, c, a.variables);
      if (G(O.from)) {
        var b = a.incomingById.get(O.from.__ref);
        if (b) {
          var N = u.readField(E(E({}, O), { from: b.storeObject }), a);
          if (N !== void 0)
            return N;
        }
      }
      return u.readField(O, a);
    }, d = /* @__PURE__ */ new Set();
    this.flattenFields(i, o, a, l).forEach(function(O, b) {
      var N, g = Fe(b), I = o[g];
      if (d.add(b), I !== void 0) {
        var A = u.getStoreFieldName({
          typename: l,
          fieldName: b.name.value,
          field: b,
          variables: O.variables
        }), B = es(s, A), x = t.processFieldValue(I, b, b.selectionSet ? wn(O, !1, !1) : O, B), X = void 0;
        b.selectionSet && (G(x) || fr(x)) && (X = f("__typename", x));
        var ae = u.getMergeFunction(l, b.name.value, X);
        ae ? B.info = {
          field: b,
          typename: l,
          merge: ae
        } : rs(s, A), c = O.merge(c, (N = {}, N[A] = x, N));
      } else
        globalThis.__DEV__ !== !1 && !O.clientOnly && !O.deferred && !Ni.added(b) && !u.getReadFunction(l, b.name.value) && globalThis.__DEV__ !== !1 && S.error(10, Fe(b), o);
    });
    try {
      var _ = u.identify(o, {
        typename: l,
        selectionSet: i,
        fragmentMap: a.fragmentMap,
        storeObject: c,
        readField: f
      }), h = _[0], m = _[1];
      n = n || h, m && (c = a.merge(c, m));
    } catch (O) {
      if (!n)
        throw O;
    }
    if (typeof n == "string") {
      var T = pr(n), p = a.written[n] || (a.written[n] = []);
      if (p.indexOf(i) >= 0 || (p.push(i), this.reader && this.reader.isFresh(o, T, i, a)))
        return T;
      var v = a.incomingById.get(n);
      return v ? (v.storeObject = a.merge(v.storeObject, c), v.mergeTree = ko(v.mergeTree, s), d.forEach(function(O) {
        return v.fieldNodeSet.add(O);
      })) : a.incomingById.set(n, {
        storeObject: c,
        mergeTree: Xt(s) ? void 0 : s,
        fieldNodeSet: d
      }), T;
    }
    return c;
  }, e.prototype.processFieldValue = function(r, t, n, o) {
    var i = this;
    return !t.selectionSet || r === null ? globalThis.__DEV__ !== !1 ? Wu(r) : r : j(r) ? r.map(function(a, s) {
      var u = i.processFieldValue(a, t, n, es(o, s));
      return rs(o, s), u;
    }) : this.processSelectionSet({
      result: r,
      selectionSet: t.selectionSet,
      context: n,
      mergeTree: o
    });
  }, e.prototype.flattenFields = function(r, t, n, o) {
    o === void 0 && (o = Ro(t, r, n.fragmentMap));
    var i = /* @__PURE__ */ new Map(), a = this.cache.policies, s = new Ke(!1);
    return function u(c, l) {
      var f = s.lookup(c, l.clientOnly, l.deferred);
      f.visited || (f.visited = !0, c.selections.forEach(function(d) {
        if (ot(d, n.variables)) {
          var _ = l.clientOnly, h = l.deferred;
          if (!(_ && h) && Oe(d.directives) && d.directives.forEach(function(p) {
            var v = p.name.value;
            if (v === "client" && (_ = !0), v === "defer") {
              var O = an(p, n.variables);
              (!O || O.if !== !1) && (h = !0);
            }
          }), je(d)) {
            var m = i.get(d);
            m && (_ = _ && m.clientOnly, h = h && m.deferred), i.set(d, wn(n, _, h));
          } else {
            var T = on(d, n.lookupFragment);
            if (!T && d.kind === $.FRAGMENT_SPREAD)
              throw Z(11, d.name.value);
            T && a.fragmentMatches(T, o, t, n.variables) && u(T.selectionSet, wn(n, _, h));
          }
        }
      }));
    }(r, n), i;
  }, e.prototype.applyMerges = function(r, t, n, o, i) {
    var a, s = this;
    if (r.map.size && !G(n)) {
      var u = !j(n) && (G(t) || fr(t)) ? t : void 0, c = n;
      u && !i && (i = [G(u) ? u.__ref : u]);
      var l, f = function(d, _) {
        return j(d) ? typeof _ == "number" ? d[_] : void 0 : o.store.getFieldValue(d, String(_));
      };
      r.map.forEach(function(d, _) {
        var h = f(u, _), m = f(c, _);
        if (m !== void 0) {
          i && i.push(_);
          var T = s.applyMerges(d, h, m, o, i);
          T !== m && (l = l || /* @__PURE__ */ new Map(), l.set(_, T)), i && S(i.pop() === _);
        }
      }), l && (n = j(c) ? c.slice(0) : E({}, c), l.forEach(function(d, _) {
        n[_] = d;
      }));
    }
    return r.info ? this.cache.policies.runMergeFunction(t, n, r.info, o, i && (a = o.store).getStorage.apply(a, i)) : n;
  }, e;
}(), mc = [];
function es(e, r) {
  var t = e.map;
  return t.has(r) || t.set(r, mc.pop() || { map: /* @__PURE__ */ new Map() }), t.get(r);
}
function ko(e, r) {
  if (e === r || !r || Xt(r))
    return e;
  if (!e || Xt(e))
    return r;
  var t = e.info && r.info ? E(E({}, e.info), r.info) : e.info || r.info, n = e.map.size && r.map.size, o = n ? /* @__PURE__ */ new Map() : e.map.size ? e.map : r.map, i = { info: t, map: o };
  if (n) {
    var a = new Set(r.map.keys());
    e.map.forEach(function(s, u) {
      i.map.set(u, ko(s, r.map.get(u))), a.delete(u);
    }), a.forEach(function(s) {
      i.map.set(s, ko(r.map.get(s), e.map.get(s)));
    });
  }
  return i;
}
function Xt(e) {
  return !e || !(e.info || e.map.size);
}
function rs(e, r) {
  var t = e.map, n = t.get(r);
  n && Xt(n) && (mc.push(n), t.delete(r));
}
var ts = /* @__PURE__ */ new Set();
function B_(e, r, t, n) {
  var o = function(f) {
    var d = n.getFieldValue(f, t);
    return typeof d == "object" && d;
  }, i = o(e);
  if (i) {
    var a = o(r);
    if (a && !G(i) && !k(i, a) && !Object.keys(i).every(function(f) {
      return n.getFieldValue(a, f) !== void 0;
    })) {
      var s = n.getFieldValue(e, "__typename") || n.getFieldValue(r, "__typename"), u = Xe(t), c = "".concat(s, ".").concat(u);
      if (!ts.has(c)) {
        ts.add(c);
        var l = [];
        !j(i) && !j(a) && [i, a].forEach(function(f) {
          var d = n.getFieldValue(f, "__typename");
          typeof d == "string" && !l.includes(d) && l.push(d);
        }), globalThis.__DEV__ !== !1 && S.warn(12, u, s, l.length ? "either ensure all objects of type " + l.join(" and ") + " have an ID or a custom merge function, or " : "", c, i, a);
      }
    }
  }
}
var x_ = function(e) {
  ve(r, e);
  function r(t) {
    t === void 0 && (t = {});
    var n = e.call(this) || this;
    return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new Lu(Ni), n.assumeImmutableResults = !0, n.makeVar = G_, n.txCount = 0, n.config = I_(t), n.addTypename = !!n.config.addTypename, n.policies = new M_({
      cache: n,
      dataIdFromObject: n.config.dataIdFromObject,
      possibleTypes: n.config.possibleTypes,
      typePolicies: n.config.typePolicies
    }), n.init(), n;
  }
  return r.prototype.init = function() {
    var t = this.data = new Jr.Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = t.stump, this.resetResultCache();
  }, r.prototype.resetResultCache = function(t) {
    var n = this, o = this.storeReader, i = this.config.fragments;
    this.storeWriter = new k_(this, this.storeReader = new U_({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: uc(this.config),
      canon: t ? void 0 : o && o.canon,
      fragments: i
    }), i), this.maybeBroadcastWatch = Wt(function(a, s) {
      return n.broadcastWatch(a, s);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function(a) {
        var s = a.optimistic ? n.optimisticData : n.data;
        if (Yr(s)) {
          var u = a.optimistic, c = a.id, l = a.variables;
          return s.makeCacheKey(a.query, a.callback, Ze({ optimistic: u, id: c, variables: l }));
        }
      }
    }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(a) {
      return a.resetCaching();
    });
  }, r.prototype.restore = function(t) {
    return this.init(), t && this.data.replace(t), this;
  }, r.prototype.extract = function(t) {
    return t === void 0 && (t = !1), (t ? this.optimisticData : this.data).extract();
  }, r.prototype.read = function(t) {
    var n = t.returnPartialData, o = n === void 0 ? !1 : n;
    try {
      return this.storeReader.diffQueryAgainstStore(E(E({}, t), { store: t.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: o })).result || null;
    } catch (i) {
      if (i instanceof ic)
        return null;
      throw i;
    }
  }, r.prototype.write = function(t) {
    try {
      return ++this.txCount, this.storeWriter.writeToStore(this.data, t);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, r.prototype.modify = function(t) {
    if (Y.call(t, "id") && !t.id)
      return !1;
    var n = t.optimistic ? this.optimisticData : this.data;
    try {
      return ++this.txCount, n.modify(t.id || "ROOT_QUERY", t.fields);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, r.prototype.diff = function(t) {
    return this.storeReader.diffQueryAgainstStore(E(E({}, t), { store: t.optimistic ? this.optimisticData : this.data, rootId: t.id || "ROOT_QUERY", config: this.config }));
  }, r.prototype.watch = function(t) {
    var n = this;
    return this.watches.size || H_(this), this.watches.add(t), t.immediate && this.maybeBroadcastWatch(t), function() {
      n.watches.delete(t) && !n.watches.size && Ka(n), n.maybeBroadcastWatch.forget(t);
    };
  }, r.prototype.gc = function(t) {
    Ze.reset();
    var n = this.optimisticData.gc();
    return t && !this.txCount && (t.resetResultCache ? this.resetResultCache(t.resetResultIdentities) : t.resetResultIdentities && this.storeReader.resetCanon()), n;
  }, r.prototype.retain = function(t, n) {
    return (n ? this.optimisticData : this.data).retain(t);
  }, r.prototype.release = function(t, n) {
    return (n ? this.optimisticData : this.data).release(t);
  }, r.prototype.identify = function(t) {
    if (G(t))
      return t.__ref;
    try {
      return this.policies.identify(t)[0];
    } catch (n) {
      globalThis.__DEV__ !== !1 && S.warn(n);
    }
  }, r.prototype.evict = function(t) {
    if (!t.id) {
      if (Y.call(t, "id"))
        return !1;
      t = E(E({}, t), { id: "ROOT_QUERY" });
    }
    try {
      return ++this.txCount, this.optimisticData.evict(t, this.data);
    } finally {
      !--this.txCount && t.broadcast !== !1 && this.broadcastWatches();
    }
  }, r.prototype.reset = function(t) {
    var n = this;
    return this.init(), Ze.reset(), t && t.discardWatches ? (this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch.forget(o);
    }), this.watches.clear(), Ka(this)) : this.broadcastWatches(), Promise.resolve();
  }, r.prototype.removeOptimistic = function(t) {
    var n = this.optimisticData.removeLayer(t);
    n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
  }, r.prototype.batch = function(t) {
    var n = this, o = t.update, i = t.optimistic, a = i === void 0 ? !0 : i, s = t.removeOptimistic, u = t.onWatchUpdated, c, l = function(d) {
      var _ = n, h = _.data, m = _.optimisticData;
      ++n.txCount, d && (n.data = n.optimisticData = d);
      try {
        return c = o(n);
      } finally {
        --n.txCount, n.data = h, n.optimisticData = m;
      }
    }, f = /* @__PURE__ */ new Set();
    return u && !this.txCount && this.broadcastWatches(E(E({}, t), { onWatchUpdated: function(d) {
      return f.add(d), !1;
    } })), typeof a == "string" ? this.optimisticData = this.optimisticData.addLayer(a, l) : a === !1 ? l(this.data) : l(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && f.size ? (this.broadcastWatches(E(E({}, t), { onWatchUpdated: function(d, _) {
      var h = u.call(this, d, _);
      return h !== !1 && f.delete(d), h;
    } })), f.size && f.forEach(function(d) {
      return n.maybeBroadcastWatch.dirty(d);
    })) : this.broadcastWatches(t), c;
  }, r.prototype.performTransaction = function(t, n) {
    return this.batch({
      update: t,
      optimistic: n || n !== null
    });
  }, r.prototype.transformDocument = function(t) {
    return this.addTypenameToDocument(this.addFragmentsToDocument(t));
  }, r.prototype.broadcastWatches = function(t) {
    var n = this;
    this.txCount || this.watches.forEach(function(o) {
      return n.maybeBroadcastWatch(o, t);
    });
  }, r.prototype.addFragmentsToDocument = function(t) {
    var n = this.config.fragments;
    return n ? n.transform(t) : t;
  }, r.prototype.addTypenameToDocument = function(t) {
    return this.addTypename ? this.addTypenameTransform.transformDocument(t) : t;
  }, r.prototype.broadcastWatch = function(t, n) {
    var o = t.lastDiff, i = this.diff(t);
    n && (t.optimistic && typeof n.optimistic == "string" && (i.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, t, i, o) === !1) || (!o || !k(o.result, i.result)) && t.callback(t.lastDiff = i, o);
  }, r;
}(b_), H;
(function(e) {
  e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error";
})(H || (H = {}));
function Zr(e) {
  return e ? e < 7 : !1;
}
function F_(e, r, t, n) {
  var o = r.data, i = ye(r, ["data"]), a = t.data, s = ye(t, ["data"]);
  return k(i, s) && Ut(st(e).selectionSet, o, a, {
    fragmentMap: nn(sn(e)),
    variables: n
  });
}
function Ut(e, r, t, n) {
  if (r === t)
    return !0;
  var o = /* @__PURE__ */ new Set();
  return e.selections.every(function(i) {
    if (o.has(i) || (o.add(i), !ot(i, n.variables)) || ns(i))
      return !0;
    if (je(i)) {
      var a = Fe(i), s = r && r[a], u = t && t[a], c = i.selectionSet;
      if (!c)
        return k(s, u);
      var l = Array.isArray(s), f = Array.isArray(u);
      if (l !== f)
        return !1;
      if (l && f) {
        var d = s.length;
        if (u.length !== d)
          return !1;
        for (var _ = 0; _ < d; ++_)
          if (!Ut(c, s[_], u[_], n))
            return !1;
        return !0;
      }
      return Ut(c, s, u, n);
    } else {
      var h = on(i, n.fragmentMap);
      if (h)
        return ns(h) ? !0 : Ut(h.selectionSet, r, t, n);
    }
  });
}
function ns(e) {
  return !!e.directives && e.directives.some(j_);
}
function j_(e) {
  return e.name.value === "nonreactive";
}
var os = Object.assign, V_ = Object.hasOwnProperty, Bo = function(e) {
  ve(r, e);
  function r(t) {
    var n = t.queryManager, o = t.queryInfo, i = t.options, a = e.call(this, function(T) {
      try {
        var p = T._subscription._observer;
        p && !p.error && (p.error = W_);
      } catch {
      }
      var v = !a.observers.size;
      a.observers.add(T);
      var O = a.last;
      return O && O.error ? T.error && T.error(O.error) : O && O.result && T.next && T.next(O.result), v && a.reobserve().catch(function() {
      }), function() {
        a.observers.delete(T) && !a.observers.size && a.tearDownQuery();
      };
    }) || this;
    a.observers = /* @__PURE__ */ new Set(), a.subscriptions = /* @__PURE__ */ new Set(), a.queryInfo = o, a.queryManager = n, a.waitForOwnResult = Hn(i.fetchPolicy), a.isTornDown = !1;
    var s = n.defaultOptions.watchQuery, u = s === void 0 ? {} : s, c = u.fetchPolicy, l = c === void 0 ? "cache-first" : c, f = i.fetchPolicy, d = f === void 0 ? l : f, _ = i.initialFetchPolicy, h = _ === void 0 ? d === "standby" ? l : d : _;
    a.options = E(E({}, i), { initialFetchPolicy: h, fetchPolicy: d }), a.queryId = o.queryId || n.generateQueryId();
    var m = at(a.query);
    return a.queryName = m && m.name && m.name.value, a;
  }
  return Object.defineProperty(r.prototype, "query", {
    get: function() {
      return this.lastQuery || this.options.query;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(r.prototype, "variables", {
    get: function() {
      return this.options.variables;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype.result = function() {
    var t = this;
    return new Promise(function(n, o) {
      var i = {
        next: function(s) {
          n(s), t.observers.delete(i), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
            a.unsubscribe();
          }, 0);
        },
        error: o
      }, a = t.subscribe(i);
    });
  }, r.prototype.getCurrentResult = function(t) {
    t === void 0 && (t = !0);
    var n = this.getLastResult(!0), o = this.queryInfo.networkStatus || n && n.networkStatus || H.ready, i = E(E({}, n), { loading: Zr(o), networkStatus: o }), a = this.options.fetchPolicy, s = a === void 0 ? "cache-first" : a;
    if (!(Hn(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers))
      if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (i.data = u.result), k(i.data, {}) && (i.data = void 0), u.complete ? (delete i.partial, u.complete && i.networkStatus === H.loading && (s === "cache-first" || s === "cache-only") && (i.networkStatus = H.ready, i.loading = !1)) : i.partial = !0, globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !i.loading && !i.data && !i.error && Tc(u.missing);
      }
    return t && this.updateLastResult(i), i;
  }, r.prototype.isDifferentFromLastResult = function(t, n) {
    if (!this.last)
      return !0;
    var o = this.queryManager.getDocumentInfo(this.query).hasNonreactiveDirective ? !F_(this.query, this.last.result, t, this.variables) : !k(this.last.result, t);
    return o || n && !k(this.last.variables, n);
  }, r.prototype.getLast = function(t, n) {
    var o = this.last;
    if (o && o[t] && (!n || k(o.variables, this.variables)))
      return o[t];
  }, r.prototype.getLastResult = function(t) {
    return this.getLast("result", t);
  }, r.prototype.getLastError = function(t) {
    return this.getLast("error", t);
  }, r.prototype.resetLastResults = function() {
    delete this.last, this.isTornDown = !1;
  }, r.prototype.resetQueryStoreErrors = function() {
    this.queryManager.resetErrors(this.queryId);
  }, r.prototype.refetch = function(t) {
    var n, o = {
      pollInterval: 0
    }, i = this.options.fetchPolicy;
    if (i === "cache-and-network" ? o.fetchPolicy = i : i === "no-cache" ? o.fetchPolicy = "no-cache" : o.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && t && V_.call(t, "variables")) {
      var a = Cu(this.query), s = a.variableDefinitions;
      (!s || !s.some(function(u) {
        return u.variable.name.value === "variables";
      })) && globalThis.__DEV__ !== !1 && S.warn(
        18,
        t,
        ((n = a.name) === null || n === void 0 ? void 0 : n.value) || a
      );
    }
    return t && !k(this.options.variables, t) && (o.variables = this.options.variables = E(E({}, this.options.variables), t)), this.queryInfo.resetLastWrite(), this.reobserve(o, H.refetch);
  }, r.prototype.fetchMore = function(t) {
    var n = this, o = E(E({}, t.query ? t : E(E(E(E({}, this.options), { query: this.options.query }), t), { variables: E(E({}, this.options.variables), t.variables) })), { fetchPolicy: "no-cache" });
    o.query = this.transformDocument(o.query);
    var i = this.queryManager.generateQueryId();
    this.lastQuery = t.query ? this.transformDocument(this.options.query) : o.query;
    var a = this.queryInfo, s = a.networkStatus;
    a.networkStatus = H.fetchMore, o.notifyOnNetworkStatusChange && this.observe();
    var u = /* @__PURE__ */ new Set();
    return this.queryManager.fetchQuery(i, o, H.fetchMore).then(function(c) {
      return n.queryManager.removeQuery(i), a.networkStatus === H.fetchMore && (a.networkStatus = s), n.queryManager.cache.batch({
        update: function(l) {
          var f = t.updateQuery;
          f ? l.updateQuery({
            query: n.query,
            variables: n.variables,
            returnPartialData: !0,
            optimistic: !1
          }, function(d) {
            return f(d, {
              fetchMoreResult: c.data,
              variables: o.variables
            });
          }) : l.writeQuery({
            query: o.query,
            variables: o.variables,
            data: c.data
          });
        },
        onWatchUpdated: function(l) {
          u.add(l.query);
        }
      }), c;
    }).finally(function() {
      u.has(n.query) || Ec(n);
    });
  }, r.prototype.subscribeToMore = function(t) {
    var n = this, o = this.queryManager.startGraphQLSubscription({
      query: t.document,
      variables: t.variables,
      context: t.context
    }).subscribe({
      next: function(i) {
        var a = t.updateQuery;
        a && n.updateQuery(function(s, u) {
          var c = u.variables;
          return a(s, {
            subscriptionData: i,
            variables: c
          });
        });
      },
      error: function(i) {
        if (t.onError) {
          t.onError(i);
          return;
        }
        globalThis.__DEV__ !== !1 && S.error(19, i);
      }
    });
    return this.subscriptions.add(o), function() {
      n.subscriptions.delete(o) && o.unsubscribe();
    };
  }, r.prototype.setOptions = function(t) {
    return this.reobserve(t);
  }, r.prototype.silentSetOptions = function(t) {
    var n = vr(this.options, t || {});
    os(this.options, n);
  }, r.prototype.setVariables = function(t) {
    return k(this.variables, t) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = t, this.observers.size ? this.reobserve({
      fetchPolicy: this.options.initialFetchPolicy,
      variables: t
    }, H.setVariables) : Promise.resolve());
  }, r.prototype.updateQuery = function(t) {
    var n = this.queryManager, o = n.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: !0,
      optimistic: !1
    }).result, i = t(o, {
      variables: this.variables
    });
    i && (n.cache.writeQuery({
      query: this.options.query,
      data: i,
      variables: this.variables
    }), n.broadcastQueries());
  }, r.prototype.startPolling = function(t) {
    this.options.pollInterval = t, this.updatePolling();
  }, r.prototype.stopPolling = function() {
    this.options.pollInterval = 0, this.updatePolling();
  }, r.prototype.applyNextFetchPolicy = function(t, n) {
    if (n.nextFetchPolicy) {
      var o = n.fetchPolicy, i = o === void 0 ? "cache-first" : o, a = n.initialFetchPolicy, s = a === void 0 ? i : a;
      i === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(i, {
        reason: t,
        options: n,
        observable: this,
        initialFetchPolicy: s
      }) : t === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
    }
    return n.fetchPolicy;
  }, r.prototype.fetch = function(t, n, o) {
    return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, t, n, o);
  }, r.prototype.updatePolling = function() {
    var t = this;
    if (!this.queryManager.ssrMode) {
      var n = this, o = n.pollingInfo, i = n.options.pollInterval;
      if (!i) {
        o && (clearTimeout(o.timeout), delete this.pollingInfo);
        return;
      }
      if (!(o && o.interval === i)) {
        S(i, 20);
        var a = o || (this.pollingInfo = {});
        a.interval = i;
        var s = function() {
          t.pollingInfo && (Zr(t.queryInfo.networkStatus) ? u() : t.reobserve({
            fetchPolicy: t.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
          }, H.poll).then(u, u));
        }, u = function() {
          var c = t.pollingInfo;
          c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
        };
        u();
      }
    }
  }, r.prototype.updateLastResult = function(t, n) {
    n === void 0 && (n = this.variables);
    var o = this.getLastError();
    return o && this.last && !k(n, this.last.variables) && (o = void 0), this.last = E({ result: this.queryManager.assumeImmutableResults ? t : Wu(t), variables: n }, o ? { error: o } : null);
  }, r.prototype.reobserveAsConcast = function(t, n) {
    var o = this;
    this.isTornDown = !1;
    var i = n === H.refetch || n === H.fetchMore || n === H.poll, a = this.options.variables, s = this.options.fetchPolicy, u = vr(this.options, t || {}), c = i ? u : os(this.options, u), l = this.transformDocument(c.query);
    this.lastQuery = l, i || (this.updatePolling(), t && t.variables && !k(t.variables, a) && c.fetchPolicy !== "standby" && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), n === void 0 && (n = H.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Hn(c.fetchPolicy));
    var f = function() {
      o.concast === h && (o.waitForOwnResult = !1);
    }, d = c.variables && E({}, c.variables), _ = this.fetch(c, n, l), h = _.concast, m = _.fromLink, T = {
      next: function(p) {
        f(), o.reportResult(p, d);
      },
      error: function(p) {
        f(), o.reportError(p, d);
      }
    };
    return !i && (m || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = h, this.observer = T), h.addObserver(T), h;
  }, r.prototype.reobserve = function(t, n) {
    return this.reobserveAsConcast(t, n).promise;
  }, r.prototype.resubscribeAfterError = function() {
    for (var t = [], n = 0; n < arguments.length; n++)
      t[n] = arguments[n];
    var o = this.last;
    this.resetLastResults();
    var i = this.subscribe.apply(this, t);
    return this.last = o, i;
  }, r.prototype.observe = function() {
    this.reportResult(this.getCurrentResult(!1), this.variables);
  }, r.prototype.reportResult = function(t, n) {
    var o = this.getLastError(), i = this.isDifferentFromLastResult(t, n);
    (o || !t.partial || this.options.returnPartialData) && this.updateLastResult(t, n), (o || i) && Kr(this.observers, "next", t);
  }, r.prototype.reportError = function(t, n) {
    var o = E(E({}, this.getLastResult()), { error: t, errors: t.graphQLErrors, networkStatus: H.error, loading: !1 });
    this.updateLastResult(o, n), Kr(this.observers, "error", this.last.error = t);
  }, r.prototype.hasObservers = function() {
    return this.observers.size > 0;
  }, r.prototype.tearDownQuery = function() {
    this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(t) {
      return t.unsubscribe();
    }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
  }, r.prototype.transformDocument = function(t) {
    return this.queryManager.transform(t);
  }, r;
}(C);
Xu(Bo);
function Ec(e) {
  var r = e.options, t = r.fetchPolicy, n = r.nextFetchPolicy;
  return t === "cache-and-network" || t === "network-only" ? e.reobserve({
    fetchPolicy: "cache-first",
    nextFetchPolicy: function() {
      return this.nextFetchPolicy = n, typeof n == "function" ? n.apply(this, arguments) : t;
    }
  }) : e.reobserve();
}
function W_(e) {
  globalThis.__DEV__ !== !1 && S.error(21, e.message, e.stack);
}
function Tc(e) {
  globalThis.__DEV__ !== !1 && e && globalThis.__DEV__ !== !1 && S.debug(22, e);
}
function Hn(e) {
  return e === "network-only" || e === "no-cache" || e === "standby";
}
var Oc = function() {
  function e(r) {
    var t = r.cache, n = r.client, o = r.resolvers, i = r.fragmentMatcher;
    this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = t, n && (this.client = n), o && this.addResolvers(o), i && this.setFragmentMatcher(i);
  }
  return e.prototype.addResolvers = function(r) {
    var t = this;
    this.resolvers = this.resolvers || {}, Array.isArray(r) ? r.forEach(function(n) {
      t.resolvers = ga(t.resolvers, n);
    }) : this.resolvers = ga(this.resolvers, r);
  }, e.prototype.setResolvers = function(r) {
    this.resolvers = {}, this.addResolvers(r);
  }, e.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, e.prototype.runResolvers = function(r) {
    var t = r.document, n = r.remoteResult, o = r.context, i = r.variables, a = r.onlyRunForcedResolvers, s = a === void 0 ? !1 : a;
    return Me(this, void 0, void 0, function() {
      return ke(this, function(u) {
        return t ? [2, this.resolveDocument(t, n.data, o, i, this.fragmentMatcher, s).then(function(c) {
          return E(E({}, n), { data: c.result });
        })] : [2, n];
      });
    });
  }, e.prototype.setFragmentMatcher = function(r) {
    this.fragmentMatcher = r;
  }, e.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, e.prototype.clientQuery = function(r) {
    return $r(["client"], r) && this.resolvers ? r : null;
  }, e.prototype.serverQuery = function(r) {
    return xu(r);
  }, e.prototype.prepareContext = function(r) {
    var t = this.cache;
    return E(E({}, r), { cache: t, getCacheKey: function(n) {
      return t.identify(n);
    } });
  }, e.prototype.addExportedVariables = function(r, t, n) {
    return t === void 0 && (t = {}), n === void 0 && (n = {}), Me(this, void 0, void 0, function() {
      return ke(this, function(o) {
        return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, t) || {}, this.prepareContext(n), t).then(function(i) {
          return E(E({}, t), i.exportedVariables);
        })] : [2, E({}, t)];
      });
    });
  }, e.prototype.shouldForceResolvers = function(r) {
    var t = !1;
    return Ae(r, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (t = n.arguments.some(function(o) {
            return o.name.value === "always" && o.value.kind === "BooleanValue" && o.value.value === !0;
          }), t))
            return gi;
        }
      }
    }), t;
  }, e.prototype.buildRootValueFromCache = function(r, t) {
    return this.cache.diff({
      query: cd(r),
      variables: t,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, e.prototype.resolveDocument = function(r, t, n, o, i, a) {
    return n === void 0 && (n = {}), o === void 0 && (o = {}), i === void 0 && (i = function() {
      return !0;
    }), a === void 0 && (a = !1), Me(this, void 0, void 0, function() {
      var s, u, c, l, f, d, _, h, m, T, p;
      return ke(this, function(v) {
        return s = st(r), u = sn(r), c = nn(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, d = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", _ = this, h = _.cache, m = _.client, T = {
          fragmentMap: c,
          context: E(E({}, n), { cache: h, client: m }),
          variables: o,
          fragmentMatcher: i,
          defaultOperationType: d,
          exportedVariables: {},
          selectionsToResolve: l,
          onlyRunForcedResolvers: a
        }, p = !1, [2, this.resolveSelectionSet(s.selectionSet, p, t, T).then(function(O) {
          return {
            result: O,
            exportedVariables: T.exportedVariables
          };
        })];
      });
    });
  }, e.prototype.resolveSelectionSet = function(r, t, n, o) {
    return Me(this, void 0, void 0, function() {
      var i, a, s, u, c, l = this;
      return ke(this, function(f) {
        return i = o.fragmentMap, a = o.context, s = o.variables, u = [n], c = function(d) {
          return Me(l, void 0, void 0, function() {
            var _, h;
            return ke(this, function(m) {
              return !t && !o.selectionsToResolve.has(d) ? [2] : ot(d, s) ? je(d) ? [2, this.resolveField(d, t, n, o).then(function(T) {
                var p;
                typeof T < "u" && u.push((p = {}, p[Fe(d)] = T, p));
              })] : (od(d) ? _ = d : (_ = i[d.name.value], S(_, 16, d.name.value)), _ && _.typeCondition && (h = _.typeCondition.name.value, o.fragmentMatcher(n, h, a)) ? [2, this.resolveSelectionSet(_.selectionSet, t, n, o).then(function(T) {
                u.push(T);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(r.selections.map(c)).then(function() {
          return yi(u);
        })];
      });
    });
  }, e.prototype.resolveField = function(r, t, n, o) {
    return Me(this, void 0, void 0, function() {
      var i, a, s, u, c, l, f, d, _, h = this;
      return ke(this, function(m) {
        return n ? (i = o.variables, a = r.name.value, s = Fe(r), u = a !== s, c = n[s] || n[a], l = Promise.resolve(c), (!o.onlyRunForcedResolvers || this.shouldForceResolvers(r)) && (f = n.__typename || o.defaultOperationType, d = this.resolvers && this.resolvers[f], d && (_ = d[u ? a : s], _ && (l = Promise.resolve(Gi.withValue(this.cache, _, [
          n,
          an(r, i),
          o.context,
          { field: r, fragmentMap: o.fragmentMap }
        ]))))), [2, l.then(function(T) {
          var p, v;
          if (T === void 0 && (T = c), r.directives && r.directives.forEach(function(b) {
            b.name.value === "export" && b.arguments && b.arguments.forEach(function(N) {
              N.name.value === "as" && N.value.kind === "StringValue" && (o.exportedVariables[N.value.value] = T);
            });
          }), !r.selectionSet || T == null)
            return T;
          var O = (v = (p = r.directives) === null || p === void 0 ? void 0 : p.some(function(b) {
            return b.name.value === "client";
          })) !== null && v !== void 0 ? v : !1;
          if (Array.isArray(T))
            return h.resolveSubSelectedArray(r, t || O, T, o);
          if (r.selectionSet)
            return h.resolveSelectionSet(r.selectionSet, t || O, T, o);
        })]) : [2, null];
      });
    });
  }, e.prototype.resolveSubSelectedArray = function(r, t, n, o) {
    var i = this;
    return Promise.all(n.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return i.resolveSubSelectedArray(r, t, a, o);
      if (r.selectionSet)
        return i.resolveSelectionSet(r.selectionSet, t, a, o);
    }));
  }, e.prototype.collectSelectionsToResolve = function(r, t) {
    var n = function(a) {
      return !Array.isArray(a);
    }, o = this.selectionsToResolveCache;
    function i(a) {
      if (!o.has(a)) {
        var s = /* @__PURE__ */ new Set();
        o.set(a, s), Ae(a, {
          Directive: function(u, c, l, f, d) {
            u.name.value === "client" && d.forEach(function(_) {
              n(_) && Ta(_) && s.add(_);
            });
          },
          FragmentSpread: function(u, c, l, f, d) {
            var _ = t[u.name.value];
            S(_, 17, u.name.value);
            var h = i(_);
            h.size > 0 && (d.forEach(function(m) {
              n(m) && Ta(m) && s.add(m);
            }), s.add(u), h.forEach(function(m) {
              s.add(m);
            }));
          }
        });
      }
      return o.get(a);
    }
    return i(r);
  }, e;
}(), dr = new (Se ? WeakMap : Map)();
function Gn(e, r) {
  var t = e[r];
  typeof t == "function" && (e[r] = function() {
    return dr.set(e, (dr.get(e) + 1) % 1e15), t.apply(this, arguments);
  });
}
function is(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0);
}
var Cn = function() {
  function e(r, t) {
    t === void 0 && (t = r.generateQueryId()), this.queryId = t, this.listeners = /* @__PURE__ */ new Set(), this.document = null, this.lastRequestId = 1, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
    var n = this.cache = r.cache;
    dr.has(n) || (dr.set(n, 0), Gn(n, "evict"), Gn(n, "modify"), Gn(n, "reset"));
  }
  return e.prototype.init = function(r) {
    var t = r.networkStatus || H.loading;
    return this.variables && this.networkStatus !== H.loading && !k(this.variables, r.variables) && (t = H.setVariables), k(r.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
      document: r.document,
      variables: r.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: t
    }), r.observableQuery && this.setObservableQuery(r.observableQuery), r.lastRequestId && (this.lastRequestId = r.lastRequestId), this;
  }, e.prototype.reset = function() {
    is(this), this.dirty = !1;
  }, e.prototype.getDiff = function() {
    var r = this.getDiffOptions();
    if (this.lastDiff && k(r, this.lastDiff.options))
      return this.lastDiff.diff;
    this.updateWatch(this.variables);
    var t = this.observableQuery;
    if (t && t.options.fetchPolicy === "no-cache")
      return { complete: !1 };
    var n = this.cache.diff(r);
    return this.updateLastDiff(n, r), n;
  }, e.prototype.updateLastDiff = function(r, t) {
    this.lastDiff = r ? {
      diff: r,
      options: t || this.getDiffOptions()
    } : void 0;
  }, e.prototype.getDiffOptions = function(r) {
    var t;
    return r === void 0 && (r = this.variables), {
      query: this.document,
      variables: r,
      returnPartialData: !0,
      optimistic: !0,
      canonizeResults: (t = this.observableQuery) === null || t === void 0 ? void 0 : t.options.canonizeResults
    };
  }, e.prototype.setDiff = function(r) {
    var t = this, n = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(r), !this.dirty && !k(n && n.result, r && r.result) && (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
      return t.notify();
    }, 0)));
  }, e.prototype.setObservableQuery = function(r) {
    var t = this;
    r !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = r, r ? (r.queryInfo = this, this.listeners.add(this.oqListener = function() {
      var n = t.getDiff();
      n.fromOptimisticTransaction ? r.observe() : Ec(r);
    })) : delete this.oqListener);
  }, e.prototype.notify = function() {
    var r = this;
    is(this), this.shouldNotify() && this.listeners.forEach(function(t) {
      return t(r);
    }), this.dirty = !1;
  }, e.prototype.shouldNotify = function() {
    if (!this.dirty || !this.listeners.size)
      return !1;
    if (Zr(this.networkStatus) && this.observableQuery) {
      var r = this.observableQuery.options.fetchPolicy;
      if (r !== "cache-only" && r !== "cache-and-network")
        return !1;
    }
    return !0;
  }, e.prototype.stop = function() {
    if (!this.stopped) {
      this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel;
      var r = this.observableQuery;
      r && r.stopPolling();
    }
  }, e.prototype.cancel = function() {
  }, e.prototype.updateWatch = function(r) {
    var t = this;
    r === void 0 && (r = this.variables);
    var n = this.observableQuery;
    if (!(n && n.options.fetchPolicy === "no-cache")) {
      var o = E(E({}, this.getDiffOptions(r)), { watcher: this, callback: function(i) {
        return t.setDiff(i);
      } });
      (!this.lastWatch || !k(o, this.lastWatch)) && (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = o));
    }
  }, e.prototype.resetLastWrite = function() {
    this.lastWrite = void 0;
  }, e.prototype.shouldWrite = function(r, t) {
    var n = this.lastWrite;
    return !(n && n.dmCount === dr.get(this.cache) && k(t, n.variables) && k(r.data, n.result.data));
  }, e.prototype.markResult = function(r, t, n, o) {
    var i = this, a = new Ve(), s = Oe(r.errors) ? r.errors.slice(0) : [];
    if (this.reset(), "incremental" in r && Oe(r.incremental)) {
      var u = Ku(this.getDiff().result, r);
      r.data = u;
    } else if ("hasNext" in r && r.hasNext) {
      var c = this.getDiff();
      r.data = a.merge(c.result, r.data);
    }
    this.graphQLErrors = s, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: r.data, complete: !0 }, this.getDiffOptions(n.variables)) : o !== 0 && (xo(r, n.errorPolicy) ? this.cache.performTransaction(function(l) {
      if (i.shouldWrite(r, n.variables))
        l.writeQuery({
          query: t,
          data: r.data,
          variables: n.variables,
          overwrite: o === 1
        }), i.lastWrite = {
          result: r,
          variables: n.variables,
          dmCount: dr.get(i.cache)
        };
      else if (i.lastDiff && i.lastDiff.diff.complete) {
        r.data = i.lastDiff.diff.result;
        return;
      }
      var f = i.getDiffOptions(n.variables), d = l.diff(f);
      !i.stopped && k(i.variables, n.variables) && i.updateWatch(n.variables), i.updateLastDiff(d, f), d.complete && (r.data = d.result);
    }) : this.lastWrite = void 0);
  }, e.prototype.markReady = function() {
    return this.networkError = null, this.networkStatus = H.ready;
  }, e.prototype.markError = function(r) {
    return this.networkStatus = H.error, this.lastWrite = void 0, this.reset(), r.graphQLErrors && (this.graphQLErrors = r.graphQLErrors), r.networkError && (this.networkError = r.networkError), r;
  }, e;
}();
function xo(e, r) {
  r === void 0 && (r = "none");
  var t = r === "ignore" || r === "all", n = !St(e);
  return !n && t && e.data && (n = !0), n;
}
var X_ = Object.prototype.hasOwnProperty, K_ = function() {
  function e(r) {
    var t = this, n = r.cache, o = r.link, i = r.defaultOptions, a = r.documentTransform, s = r.queryDeduplication, u = s === void 0 ? !1 : s, c = r.onBroadcast, l = r.ssrMode, f = l === void 0 ? !1 : l, d = r.clientAwareness, _ = d === void 0 ? {} : d, h = r.localState, m = r.assumeImmutableResults, T = m === void 0 ? !!n.assumeImmutableResults : m;
    this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new (Se ? WeakMap : Map)(), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = /* @__PURE__ */ new Map();
    var p = new Lu(function(v) {
      return t.cache.transformDocument(v);
    }, { cache: !1 });
    this.cache = n, this.link = o, this.defaultOptions = i || /* @__PURE__ */ Object.create(null), this.queryDeduplication = u, this.clientAwareness = _, this.localState = h || new Oc({ cache: n }), this.ssrMode = f, this.assumeImmutableResults = T, this.documentTransform = a ? p.concat(a).concat(p) : p, (this.onBroadcast = c) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
  }
  return e.prototype.stop = function() {
    var r = this;
    this.queries.forEach(function(t, n) {
      r.stopQueryNoBroadcast(n);
    }), this.cancelPendingFetches(Z(23));
  }, e.prototype.cancelPendingFetches = function(r) {
    this.fetchCancelFns.forEach(function(t) {
      return t(r);
    }), this.fetchCancelFns.clear();
  }, e.prototype.mutate = function(r) {
    var t, n, o = r.mutation, i = r.variables, a = r.optimisticResponse, s = r.updateQueries, u = r.refetchQueries, c = u === void 0 ? [] : u, l = r.awaitRefetchQueries, f = l === void 0 ? !1 : l, d = r.update, _ = r.onQueryUpdated, h = r.fetchPolicy, m = h === void 0 ? ((t = this.defaultOptions.mutate) === null || t === void 0 ? void 0 : t.fetchPolicy) || "network-only" : h, T = r.errorPolicy, p = T === void 0 ? ((n = this.defaultOptions.mutate) === null || n === void 0 ? void 0 : n.errorPolicy) || "none" : T, v = r.keepRootFields, O = r.context;
    return Me(this, void 0, void 0, function() {
      var b, N, g, I;
      return ke(this, function(A) {
        switch (A.label) {
          case 0:
            return S(o, 24), S(m === "network-only" || m === "no-cache", 25), b = this.generateMutationId(), o = this.cache.transformForLink(this.transform(o)), N = this.getDocumentInfo(o).hasClientExports, i = this.getVariables(o, i), N ? [4, this.localState.addExportedVariables(o, i, O)] : [3, 2];
          case 1:
            i = A.sent(), A.label = 2;
          case 2:
            return g = this.mutationStore && (this.mutationStore[b] = {
              mutation: o,
              variables: i,
              loading: !0,
              error: null
            }), a && this.markMutationOptimistic(a, {
              mutationId: b,
              document: o,
              variables: i,
              fetchPolicy: m,
              errorPolicy: p,
              context: O,
              updateQueries: s,
              update: d,
              keepRootFields: v
            }), this.broadcastQueries(), I = this, [2, new Promise(function(B, x) {
              return Nn(I.getObservableFromLink(o, E(E({}, O), { optimisticResponse: a }), i, !1), function(X) {
                if (St(X) && p === "none")
                  throw new ar({
                    graphQLErrors: Ao(X)
                  });
                g && (g.loading = !1, g.error = null);
                var ae = E({}, X);
                return typeof c == "function" && (c = c(ae)), p === "ignore" && St(ae) && delete ae.errors, I.markMutationResult({
                  mutationId: b,
                  result: ae,
                  document: o,
                  variables: i,
                  fetchPolicy: m,
                  errorPolicy: p,
                  context: O,
                  update: d,
                  updateQueries: s,
                  awaitRefetchQueries: f,
                  refetchQueries: c,
                  removeOptimistic: a ? b : void 0,
                  onQueryUpdated: _,
                  keepRootFields: v
                });
              }).subscribe({
                next: function(X) {
                  I.broadcastQueries(), (!("hasNext" in X) || X.hasNext === !1) && B(X);
                },
                error: function(X) {
                  g && (g.loading = !1, g.error = X), a && I.cache.removeOptimistic(b), I.broadcastQueries(), x(X instanceof ar ? X : new ar({
                    networkError: X
                  }));
                }
              });
            })];
        }
      });
    });
  }, e.prototype.markMutationResult = function(r, t) {
    var n = this;
    t === void 0 && (t = this.cache);
    var o = r.result, i = [], a = r.fetchPolicy === "no-cache";
    if (!a && xo(o, r.errorPolicy)) {
      if (mr(o) || i.push({
        result: o.data,
        dataId: "ROOT_MUTATION",
        query: r.document,
        variables: r.variables
      }), mr(o) && Oe(o.incremental)) {
        var s = t.diff({
          id: "ROOT_MUTATION",
          query: this.getDocumentInfo(r.document).asQuery,
          variables: r.variables,
          optimistic: !1,
          returnPartialData: !0
        }), u = void 0;
        s.result && (u = Ku(s.result, o)), typeof u < "u" && (o.data = u, i.push({
          result: u,
          dataId: "ROOT_MUTATION",
          query: r.document,
          variables: r.variables
        }));
      }
      var c = r.updateQueries;
      c && this.queries.forEach(function(f, d) {
        var _ = f.observableQuery, h = _ && _.queryName;
        if (!(!h || !X_.call(c, h))) {
          var m = c[h], T = n.queries.get(d), p = T.document, v = T.variables, O = t.diff({
            query: p,
            variables: v,
            returnPartialData: !0,
            optimistic: !1
          }), b = O.result, N = O.complete;
          if (N && b) {
            var g = m(b, {
              mutationResult: o,
              queryName: p && go(p) || void 0,
              queryVariables: v
            });
            g && i.push({
              result: g,
              dataId: "ROOT_QUERY",
              query: p,
              variables: v
            });
          }
        }
      });
    }
    if (i.length > 0 || r.refetchQueries || r.update || r.onQueryUpdated || r.removeOptimistic) {
      var l = [];
      if (this.refetchQueries({
        updateCache: function(f) {
          a || i.forEach(function(m) {
            return f.write(m);
          });
          var d = r.update, _ = !Id(o) || mr(o) && !o.hasNext;
          if (d) {
            if (!a) {
              var h = f.diff({
                id: "ROOT_MUTATION",
                query: n.getDocumentInfo(r.document).asQuery,
                variables: r.variables,
                optimistic: !1,
                returnPartialData: !0
              });
              h.complete && (o = E(E({}, o), { data: h.result }), "incremental" in o && delete o.incremental, "hasNext" in o && delete o.hasNext);
            }
            _ && d(f, o, {
              context: r.context,
              variables: r.variables
            });
          }
          !a && !r.keepRootFields && _ && f.modify({
            id: "ROOT_MUTATION",
            fields: function(m, T) {
              var p = T.fieldName, v = T.DELETE;
              return p === "__typename" ? m : v;
            }
          });
        },
        include: r.refetchQueries,
        optimistic: !1,
        removeOptimistic: r.removeOptimistic,
        onQueryUpdated: r.onQueryUpdated || null
      }).forEach(function(f) {
        return l.push(f);
      }), r.awaitRefetchQueries || r.onQueryUpdated)
        return Promise.all(l).then(function() {
          return o;
        });
    }
    return Promise.resolve(o);
  }, e.prototype.markMutationOptimistic = function(r, t) {
    var n = this, o = typeof r == "function" ? r(t.variables) : r;
    return this.cache.recordOptimisticTransaction(function(i) {
      try {
        n.markMutationResult(E(E({}, t), { result: { data: o } }), i);
      } catch (a) {
        globalThis.__DEV__ !== !1 && S.error(a);
      }
    }, t.mutationId);
  }, e.prototype.fetchQuery = function(r, t, n) {
    return this.fetchConcastWithInfo(r, t, n).concast.promise;
  }, e.prototype.getQueryStore = function() {
    var r = /* @__PURE__ */ Object.create(null);
    return this.queries.forEach(function(t, n) {
      r[n] = {
        variables: t.variables,
        networkStatus: t.networkStatus,
        networkError: t.networkError,
        graphQLErrors: t.graphQLErrors
      };
    }), r;
  }, e.prototype.resetErrors = function(r) {
    var t = this.queries.get(r);
    t && (t.networkError = void 0, t.graphQLErrors = []);
  }, e.prototype.transform = function(r) {
    return this.documentTransform.transformDocument(r);
  }, e.prototype.getDocumentInfo = function(r) {
    var t = this.transformCache;
    if (!t.has(r)) {
      var n = {
        hasClientExports: Mf(r),
        hasForcedResolvers: this.localState.shouldForceResolvers(r),
        hasNonreactiveDirective: $r(["nonreactive"], r),
        clientQuery: this.localState.clientQuery(r),
        serverQuery: Bu([
          { name: "client", remove: !0 },
          { name: "connection" },
          { name: "nonreactive" }
        ], r),
        defaultVars: Ii(at(r)),
        asQuery: E(E({}, r), { definitions: r.definitions.map(function(o) {
          return o.kind === "OperationDefinition" && o.operation !== "query" ? E(E({}, o), { operation: "query" }) : o;
        }) })
      };
      t.set(r, n);
    }
    return t.get(r);
  }, e.prototype.getVariables = function(r, t) {
    return E(E({}, this.getDocumentInfo(r).defaultVars), t);
  }, e.prototype.watchQuery = function(r) {
    var t = this.transform(r.query);
    r = E(E({}, r), { variables: this.getVariables(t, r.variables) }), typeof r.notifyOnNetworkStatusChange > "u" && (r.notifyOnNetworkStatusChange = !1);
    var n = new Cn(this), o = new Bo({
      queryManager: this,
      queryInfo: n,
      options: r
    });
    return o.lastQuery = t, this.queries.set(o.queryId, n), n.init({
      document: t,
      observableQuery: o,
      variables: o.variables
    }), o;
  }, e.prototype.query = function(r, t) {
    var n = this;
    return t === void 0 && (t = this.generateQueryId()), S(r.query, 26), S(r.query.kind === "Document", 27), S(!r.returnPartialData, 28), S(!r.pollInterval, 29), this.fetchQuery(t, E(E({}, r), { query: this.transform(r.query) })).finally(function() {
      return n.stopQuery(t);
    });
  }, e.prototype.generateQueryId = function() {
    return String(this.queryIdCounter++);
  }, e.prototype.generateRequestId = function() {
    return this.requestIdCounter++;
  }, e.prototype.generateMutationId = function() {
    return String(this.mutationIdCounter++);
  }, e.prototype.stopQueryInStore = function(r) {
    this.stopQueryInStoreNoBroadcast(r), this.broadcastQueries();
  }, e.prototype.stopQueryInStoreNoBroadcast = function(r) {
    var t = this.queries.get(r);
    t && t.stop();
  }, e.prototype.clearStore = function(r) {
    return r === void 0 && (r = {
      discardWatches: !0
    }), this.cancelPendingFetches(Z(30)), this.queries.forEach(function(t) {
      t.observableQuery ? t.networkStatus = H.loading : t.stop();
    }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(r);
  }, e.prototype.getObservableQueries = function(r) {
    var t = this;
    r === void 0 && (r = "active");
    var n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    return Array.isArray(r) && r.forEach(function(a) {
      typeof a == "string" ? o.set(a, !1) : Xf(a) ? o.set(t.transform(a), !1) : M(a) && a.query && i.add(a);
    }), this.queries.forEach(function(a, s) {
      var u = a.observableQuery, c = a.document;
      if (u) {
        if (r === "all") {
          n.set(s, u);
          return;
        }
        var l = u.queryName, f = u.options.fetchPolicy;
        if (f === "standby" || r === "active" && !u.hasObservers())
          return;
        (r === "active" || l && o.has(l) || c && o.has(c)) && (n.set(s, u), l && o.set(l, !0), c && o.set(c, !0));
      }
    }), i.size && i.forEach(function(a) {
      var s = vo("legacyOneTimeQuery"), u = t.getQuery(s).init({
        document: a.query,
        variables: a.variables
      }), c = new Bo({
        queryManager: t,
        queryInfo: u,
        options: E(E({}, a), { fetchPolicy: "network-only" })
      });
      S(c.queryId === s), u.setObservableQuery(c), n.set(s, c);
    }), globalThis.__DEV__ !== !1 && o.size && o.forEach(function(a, s) {
      a || globalThis.__DEV__ !== !1 && S.warn(typeof s == "string" ? 31 : 32, s);
    }), n;
  }, e.prototype.reFetchObservableQueries = function(r) {
    var t = this;
    r === void 0 && (r = !1);
    var n = [];
    return this.getObservableQueries(r ? "all" : "active").forEach(function(o, i) {
      var a = o.options.fetchPolicy;
      o.resetLastResults(), (r || a !== "standby" && a !== "cache-only") && n.push(o.refetch()), t.getQuery(i).setDiff(null);
    }), this.broadcastQueries(), Promise.all(n);
  }, e.prototype.setObservableQuery = function(r) {
    this.getQuery(r.queryId).setObservableQuery(r);
  }, e.prototype.startGraphQLSubscription = function(r) {
    var t = this, n = r.query, o = r.fetchPolicy, i = r.errorPolicy, a = i === void 0 ? "none" : i, s = r.variables, u = r.context, c = u === void 0 ? {} : u;
    n = this.transform(n), s = this.getVariables(n, s);
    var l = function(d) {
      return t.getObservableFromLink(n, c, d).map(function(_) {
        o !== "no-cache" && (xo(_, a) && t.cache.write({
          query: n,
          result: _.data,
          dataId: "ROOT_SUBSCRIPTION",
          variables: d
        }), t.broadcastQueries());
        var h = St(_), m = xd(_);
        if (h || m) {
          var T = {};
          if (h && (T.graphQLErrors = _.errors), m && (T.protocolErrors = _.extensions[Pi]), a === "none" || m)
            throw new ar(T);
        }
        return a === "ignore" && delete _.errors, _;
      });
    };
    if (this.getDocumentInfo(n).hasClientExports) {
      var f = this.localState.addExportedVariables(n, s, c).then(l);
      return new C(function(d) {
        var _ = null;
        return f.then(function(h) {
          return _ = h.subscribe(d);
        }, d.error), function() {
          return _ && _.unsubscribe();
        };
      });
    }
    return l(s);
  }, e.prototype.stopQuery = function(r) {
    this.stopQueryNoBroadcast(r), this.broadcastQueries();
  }, e.prototype.stopQueryNoBroadcast = function(r) {
    this.stopQueryInStoreNoBroadcast(r), this.removeQuery(r);
  }, e.prototype.removeQuery = function(r) {
    this.fetchCancelFns.delete(r), this.queries.has(r) && (this.getQuery(r).stop(), this.queries.delete(r));
  }, e.prototype.broadcastQueries = function() {
    this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(r) {
      return r.notify();
    });
  }, e.prototype.getLocalState = function() {
    return this.localState;
  }, e.prototype.getObservableFromLink = function(r, t, n, o) {
    var i = this, a;
    o === void 0 && (o = (a = t == null ? void 0 : t.queryDeduplication) !== null && a !== void 0 ? a : this.queryDeduplication);
    var s, u = this.getDocumentInfo(r), c = u.serverQuery, l = u.clientQuery;
    if (c) {
      var f = this, d = f.inFlightLinkObservables, _ = f.link, h = {
        query: c,
        variables: n,
        operationName: go(c) || void 0,
        context: this.prepareContext(E(E({}, t), { forceFetch: !o }))
      };
      if (t = h.context, o) {
        var m = Mu(c), T = d.get(m) || /* @__PURE__ */ new Map();
        d.set(m, T);
        var p = Ze(n);
        if (s = T.get(p), !s) {
          var v = new lr([
            Do(_, h)
          ]);
          T.set(p, s = v), v.beforeNext(function() {
            T.delete(p) && T.size < 1 && d.delete(m);
          });
        }
      } else
        s = new lr([
          Do(_, h)
        ]);
    } else
      s = new lr([C.of({ data: {} })]), t = this.prepareContext(t);
    return l && (s = Nn(s, function(O) {
      return i.localState.runResolvers({
        document: l,
        remoteResult: O,
        context: t,
        variables: n
      });
    })), s;
  }, e.prototype.getResultsFromLink = function(r, t, n) {
    var o = r.lastRequestId = this.generateRequestId(), i = this.cache.transformForLink(n.query);
    return Nn(this.getObservableFromLink(i, n.context, n.variables), function(a) {
      var s = Ao(a), u = s.length > 0;
      if (o >= r.lastRequestId) {
        if (u && n.errorPolicy === "none")
          throw r.markError(new ar({
            graphQLErrors: s
          }));
        r.markResult(a, i, n, t), r.markReady();
      }
      var c = {
        data: a.data,
        loading: !1,
        networkStatus: H.ready
      };
      return u && n.errorPolicy !== "ignore" && (c.errors = s, c.networkStatus = H.error), c;
    }, function(a) {
      var s = Fd(a) ? a : new ar({ networkError: a });
      throw o >= r.lastRequestId && r.markError(s), s;
    });
  }, e.prototype.fetchConcastWithInfo = function(r, t, n, o) {
    var i = this;
    n === void 0 && (n = H.loading), o === void 0 && (o = t.query);
    var a = this.getVariables(o, t.variables), s = this.getQuery(r), u = this.defaultOptions.watchQuery, c = t.fetchPolicy, l = c === void 0 ? u && u.fetchPolicy || "cache-first" : c, f = t.errorPolicy, d = f === void 0 ? u && u.errorPolicy || "none" : f, _ = t.returnPartialData, h = _ === void 0 ? !1 : _, m = t.notifyOnNetworkStatusChange, T = m === void 0 ? !1 : m, p = t.context, v = p === void 0 ? {} : p, O = Object.assign({}, t, {
      query: o,
      variables: a,
      fetchPolicy: l,
      errorPolicy: d,
      returnPartialData: h,
      notifyOnNetworkStatusChange: T,
      context: v
    }), b = function(B) {
      O.variables = B;
      var x = i.fetchQueryByPolicy(s, O, n);
      return O.fetchPolicy !== "standby" && x.sources.length > 0 && s.observableQuery && s.observableQuery.applyNextFetchPolicy("after-fetch", t), x;
    }, N = function() {
      return i.fetchCancelFns.delete(r);
    };
    this.fetchCancelFns.set(r, function(B) {
      N(), setTimeout(function() {
        return g.cancel(B);
      });
    });
    var g, I;
    if (this.getDocumentInfo(O.query).hasClientExports)
      g = new lr(this.localState.addExportedVariables(O.query, O.variables, O.context).then(b).then(function(B) {
        return B.sources;
      })), I = !0;
    else {
      var A = b(O.variables);
      I = A.fromLink, g = new lr(A.sources);
    }
    return g.promise.then(N, N), {
      concast: g,
      fromLink: I
    };
  }, e.prototype.refetchQueries = function(r) {
    var t = this, n = r.updateCache, o = r.include, i = r.optimistic, a = i === void 0 ? !1 : i, s = r.removeOptimistic, u = s === void 0 ? a ? vo("refetchQueries") : void 0 : s, c = r.onQueryUpdated, l = /* @__PURE__ */ new Map();
    o && this.getObservableQueries(o).forEach(function(d, _) {
      l.set(_, {
        oq: d,
        lastDiff: t.getQuery(_).getDiff()
      });
    });
    var f = /* @__PURE__ */ new Map();
    return n && this.cache.batch({
      update: n,
      optimistic: a && u || !1,
      removeOptimistic: u,
      onWatchUpdated: function(d, _, h) {
        var m = d.watcher instanceof Cn && d.watcher.observableQuery;
        if (m) {
          if (c) {
            l.delete(m.queryId);
            var T = c(m, _, h);
            return T === !0 && (T = m.refetch()), T !== !1 && f.set(m, T), T;
          }
          c !== null && l.set(m.queryId, { oq: m, lastDiff: h, diff: _ });
        }
      }
    }), l.size && l.forEach(function(d, _) {
      var h = d.oq, m = d.lastDiff, T = d.diff, p;
      if (c) {
        if (!T) {
          var v = h.queryInfo;
          v.reset(), T = v.getDiff();
        }
        p = c(h, T, m);
      }
      (!c || p === !0) && (p = h.refetch()), p !== !1 && f.set(h, p), _.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(_);
    }), u && this.cache.removeOptimistic(u), f;
  }, e.prototype.fetchQueryByPolicy = function(r, t, n) {
    var o = this, i = t.query, a = t.variables, s = t.fetchPolicy, u = t.refetchWritePolicy, c = t.errorPolicy, l = t.returnPartialData, f = t.context, d = t.notifyOnNetworkStatusChange, _ = r.networkStatus;
    r.init({
      document: i,
      variables: a,
      networkStatus: n
    });
    var h = function() {
      return r.getDiff();
    }, m = function(b, N) {
      N === void 0 && (N = r.networkStatus || H.loading);
      var g = b.result;
      globalThis.__DEV__ !== !1 && !l && !k(g, {}) && Tc(b.missing);
      var I = function(A) {
        return C.of(E({ data: A, loading: Zr(N), networkStatus: N }, b.complete ? null : { partial: !0 }));
      };
      return g && o.getDocumentInfo(i).hasForcedResolvers ? o.localState.runResolvers({
        document: i,
        remoteResult: { data: g },
        context: f,
        variables: a,
        onlyRunForcedResolvers: !0
      }).then(function(A) {
        return I(A.data || void 0);
      }) : c === "none" && N === H.refetch && Array.isArray(b.missing) ? I(void 0) : I(g);
    }, T = s === "no-cache" ? 0 : n === H.refetch && u !== "merge" ? 1 : 2, p = function() {
      return o.getResultsFromLink(r, T, {
        query: i,
        variables: a,
        context: f,
        fetchPolicy: s,
        errorPolicy: c
      });
    }, v = d && typeof _ == "number" && _ !== n && Zr(n);
    switch (s) {
      default:
      case "cache-first": {
        var O = h();
        return O.complete ? {
          fromLink: !1,
          sources: [m(O, r.markReady())]
        } : l || v ? {
          fromLink: !0,
          sources: [m(O), p()]
        } : { fromLink: !0, sources: [p()] };
      }
      case "cache-and-network": {
        var O = h();
        return O.complete || l || v ? {
          fromLink: !0,
          sources: [m(O), p()]
        } : { fromLink: !0, sources: [p()] };
      }
      case "cache-only":
        return {
          fromLink: !1,
          sources: [m(h(), r.markReady())]
        };
      case "network-only":
        return v ? {
          fromLink: !0,
          sources: [m(h()), p()]
        } : { fromLink: !0, sources: [p()] };
      case "no-cache":
        return v ? {
          fromLink: !0,
          sources: [m(r.getDiff()), p()]
        } : { fromLink: !0, sources: [p()] };
      case "standby":
        return { fromLink: !1, sources: [] };
    }
  }, e.prototype.getQuery = function(r) {
    return r && !this.queries.has(r) && this.queries.set(r, new Cn(this, r)), this.queries.get(r);
  }, e.prototype.prepareContext = function(r) {
    r === void 0 && (r = {});
    var t = this.localState.prepareContext(r);
    return E(E({}, t), { clientAwareness: this.clientAwareness });
  }, e;
}(), as = !1, Y_ = function() {
  function e(r) {
    var t = this;
    if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !r.cache)
      throw Z(13);
    var n = r.uri, o = r.credentials, i = r.headers, a = r.cache, s = r.documentTransform, u = r.ssrMode, c = u === void 0 ? !1 : u, l = r.ssrForceFetchDelay, f = l === void 0 ? 0 : l, d = r.connectToDevTools, _ = d === void 0 ? typeof window == "object" && !window.__APOLLO_CLIENT__ && globalThis.__DEV__ !== !1 : d, h = r.queryDeduplication, m = h === void 0 ? !0 : h, T = r.defaultOptions, p = r.assumeImmutableResults, v = p === void 0 ? a.assumeImmutableResults : p, O = r.resolvers, b = r.typeDefs, N = r.fragmentMatcher, g = r.name, I = r.version, A = r.link;
    A || (A = n ? new n_({ uri: n, credentials: o, headers: i }) : Ar.empty()), this.link = A, this.cache = a, this.disableNetworkFetches = c || f > 0, this.queryDeduplication = m, this.defaultOptions = T || /* @__PURE__ */ Object.create(null), this.typeDefs = b, f && setTimeout(function() {
      return t.disableNetworkFetches = !1;
    }, f), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = Oi, this.localState = new Oc({
      cache: a,
      client: this,
      resolvers: O,
      fragmentMatcher: N
    }), this.queryManager = new K_({
      cache: this.cache,
      link: this.link,
      defaultOptions: this.defaultOptions,
      documentTransform: s,
      queryDeduplication: m,
      ssrMode: c,
      clientAwareness: {
        name: g,
        version: I
      },
      localState: this.localState,
      assumeImmutableResults: v,
      onBroadcast: _ ? function() {
        t.devToolsHookCb && t.devToolsHookCb({
          action: {},
          state: {
            queries: t.queryManager.getQueryStore(),
            mutations: t.queryManager.mutationStore || {}
          },
          dataWithOptimisticResults: t.cache.extract(!0)
        });
      } : void 0
    }), _ && this.connectToDevTools();
  }
  return e.prototype.connectToDevTools = function() {
    if (typeof window == "object") {
      var r = window, t = Symbol.for("apollo.devtools");
      (r[t] = r[t] || []).push(this), r.__APOLLO_CLIENT__ = this;
    }
    !as && globalThis.__DEV__ !== !1 && (as = !0, setTimeout(function() {
      if (typeof window < "u" && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var n = window.navigator, o = n && n.userAgent, i = void 0;
        typeof o == "string" && (o.indexOf("Chrome/") > -1 ? i = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : o.indexOf("Firefox/") > -1 && (i = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), i && globalThis.__DEV__ !== !1 && S.log("Download the Apollo DevTools for a better development experience: %s", i);
      }
    }, 1e4));
  }, Object.defineProperty(e.prototype, "documentTransform", {
    get: function() {
      return this.queryManager.documentTransform;
    },
    enumerable: !1,
    configurable: !0
  }), e.prototype.stop = function() {
    this.queryManager.stop();
  }, e.prototype.watchQuery = function(r) {
    return this.defaultOptions.watchQuery && (r = yn(this.defaultOptions.watchQuery, r)), this.disableNetworkFetches && (r.fetchPolicy === "network-only" || r.fetchPolicy === "cache-and-network") && (r = E(E({}, r), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(r);
  }, e.prototype.query = function(r) {
    return this.defaultOptions.query && (r = yn(this.defaultOptions.query, r)), S(r.fetchPolicy !== "cache-and-network", 14), this.disableNetworkFetches && r.fetchPolicy === "network-only" && (r = E(E({}, r), { fetchPolicy: "cache-first" })), this.queryManager.query(r);
  }, e.prototype.mutate = function(r) {
    return this.defaultOptions.mutate && (r = yn(this.defaultOptions.mutate, r)), this.queryManager.mutate(r);
  }, e.prototype.subscribe = function(r) {
    return this.queryManager.startGraphQLSubscription(r);
  }, e.prototype.readQuery = function(r, t) {
    return t === void 0 && (t = !1), this.cache.readQuery(r, t);
  }, e.prototype.readFragment = function(r, t) {
    return t === void 0 && (t = !1), this.cache.readFragment(r, t);
  }, e.prototype.writeQuery = function(r) {
    var t = this.cache.writeQuery(r);
    return r.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
  }, e.prototype.writeFragment = function(r) {
    var t = this.cache.writeFragment(r);
    return r.broadcast !== !1 && this.queryManager.broadcastQueries(), t;
  }, e.prototype.__actionHookForDevTools = function(r) {
    this.devToolsHookCb = r;
  }, e.prototype.__requestRaw = function(r) {
    return Do(this.link, r);
  }, e.prototype.resetStore = function() {
    var r = this;
    return Promise.resolve().then(function() {
      return r.queryManager.clearStore({
        discardWatches: !1
      });
    }).then(function() {
      return Promise.all(r.resetStoreCallbacks.map(function(t) {
        return t();
      }));
    }).then(function() {
      return r.reFetchObservableQueries();
    });
  }, e.prototype.clearStore = function() {
    var r = this;
    return Promise.resolve().then(function() {
      return r.queryManager.clearStore({
        discardWatches: !0
      });
    }).then(function() {
      return Promise.all(r.clearStoreCallbacks.map(function(t) {
        return t();
      }));
    });
  }, e.prototype.onResetStore = function(r) {
    var t = this;
    return this.resetStoreCallbacks.push(r), function() {
      t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(n) {
        return n !== r;
      });
    };
  }, e.prototype.onClearStore = function(r) {
    var t = this;
    return this.clearStoreCallbacks.push(r), function() {
      t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(n) {
        return n !== r;
      });
    };
  }, e.prototype.reFetchObservableQueries = function(r) {
    return this.queryManager.reFetchObservableQueries(r);
  }, e.prototype.refetchQueries = function(r) {
    var t = this.queryManager.refetchQueries(r), n = [], o = [];
    t.forEach(function(a, s) {
      n.push(s), o.push(a);
    });
    var i = Promise.all(o);
    return i.queries = n, i.results = o, i.catch(function(a) {
      globalThis.__DEV__ !== !1 && S.debug(15, a);
    }), i;
  }, e.prototype.getObservableQueries = function(r) {
    return r === void 0 && (r = "active"), this.queryManager.getObservableQueries(r);
  }, e.prototype.extract = function(r) {
    return this.cache.extract(r);
  }, e.prototype.restore = function(r) {
    return this.cache.restore(r);
  }, e.prototype.addResolvers = function(r) {
    this.localState.addResolvers(r);
  }, e.prototype.setResolvers = function(r) {
    this.localState.setResolvers(r);
  }, e.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, e.prototype.setLocalStateFragmentMatcher = function(r) {
    this.localState.setFragmentMatcher(r);
  }, e.prototype.setLink = function(r) {
    this.link = this.queryManager.link = r;
  }, e;
}();
function q_(e) {
  return new Ar(function(r, t) {
    var n = ye(r, []);
    return new C(function(o) {
      var i, a = !1;
      return Promise.resolve(n).then(function(s) {
        return e(s, r.getContext());
      }).then(r.setContext).then(function() {
        a || (i = t(r).subscribe({
          next: o.next.bind(o),
          error: o.error.bind(o),
          complete: o.complete.bind(o)
        }));
      }).catch(o.error.bind(o)), function() {
        a = !0, i && i.unsubscribe();
      };
    });
  });
}
const z_ = "code_gear", vc = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SERVER_URL ?? "http://localhost:6868", $_ = {
  CODE_EXECUTOR_API: "execute",
  _GRAPHQL: "graphql"
}, Q_ = {
  EDITOR_THEME: "EDITOR_THEME",
  EDITOR_CONTENT_DATA: "EDITOR_CONTENT_DATA",
  EDITOR_EXECUTE_MESSAGES: "EDITOR_EXECUTE_MESSAGES",
  EDITOR_FONT_SIZE: "EDITOR_FONT_SIZE",
  EDITOR_TAB_SIZE: "EDITOR_TAB_SIZE",
  EDITOR_CUSTOM_BACKGROUND: "EDITOR_CUSTOM_BACKGROUND",
  EDITOR_CUSTOM_COLOR: "EDITOR_CUSTOM_COLOR",
  EDITOR_HTML_PREVIEW: "EDITOR_HTML_PREVIEW",
  AUTH_TOKEN: "AUTH_TOKEN"
}, hg = (e) => typeof e == "object" && e !== null, J_ = (e) => typeof e == "string", pg = (e) => typeof e == "number" && !isNaN(e), mg = (e) => typeof e == "function";
class Z_ {
  constructor(r) {
    this.isDisabled = !1, this.isDisabled = r ?? this.isDisabled;
  }
  get(r, t) {
    if (this.isDisabled)
      return t;
    const n = localStorage.getItem(this.withPrefix(r));
    return n ? eh(n) ? JSON.parse(n) : n : t;
  }
  set(r, t) {
    if (!(this.isDisabled || !(r in Q_))) {
      if (J_(t))
        return localStorage.setItem(this.withPrefix(r), t);
      localStorage.setItem(this.withPrefix(r), JSON.stringify(t));
    }
  }
  clear(r) {
    if (r)
      return localStorage.removeItem(this.withPrefix(r));
    localStorage.clear();
  }
  withPrefix(r) {
    return `${z_}__${r}`;
  }
}
const eh = (e) => {
  try {
    JSON.parse(e);
  } catch {
    return !1;
  }
  return !0;
}, rh = `${vc}/${$_._GRAPHQL}`, th = new Z_(), nh = qu({
  uri: rh
}), oh = q_((e, { headers: r }) => {
  const t = th.get("AUTH_TOKEN", "");
  return {
    headers: {
      ...r,
      Authorization: `Bearer ${t}`,
      // Needed to upload files
      "apollo-require-preflight": !0
    }
  };
}), ss = new Y_({
  cache: new x_(),
  link: oh.concat(nh)
});
function Rc(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: ih } = Object.prototype, { getPrototypeOf: ki } = Object, ln = ((e) => (r) => {
  const t = ih.call(r);
  return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Re = (e) => (e = e.toLowerCase(), (r) => ln(r) === e), fn = (e) => (r) => typeof r === e, { isArray: Sr } = Array, et = fn("undefined");
function ah(e) {
  return e !== null && !et(e) && e.constructor !== null && !et(e.constructor) && oe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gc = Re("ArrayBuffer");
function sh(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && gc(e.buffer), r;
}
const uh = fn("string"), oe = fn("function"), bc = fn("number"), dn = (e) => e !== null && typeof e == "object", ch = (e) => e === !0 || e === !1, Pt = (e) => {
  if (ln(e) !== "object")
    return !1;
  const r = ki(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, lh = Re("Date"), fh = Re("File"), dh = Re("Blob"), _h = Re("FileList"), hh = (e) => dn(e) && oe(e.pipe), ph = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || oe(e.append) && ((r = ln(e)) === "formdata" || // detect form-data instance
  r === "object" && oe(e.toString) && e.toString() === "[object FormData]"));
}, mh = Re("URLSearchParams"), Eh = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function ut(e, r, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, o;
  if (typeof e != "object" && (e = [e]), Sr(e))
    for (n = 0, o = e.length; n < o; n++)
      r.call(null, e[n], n, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (n = 0; n < a; n++)
      s = i[n], r.call(null, e[s], s, e);
  }
}
function Ic(e, r) {
  r = r.toLowerCase();
  const t = Object.keys(e);
  let n = t.length, o;
  for (; n-- > 0; )
    if (o = t[n], r === o.toLowerCase())
      return o;
  return null;
}
const Nc = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), yc = (e) => !et(e) && e !== Nc;
function Fo() {
  const { caseless: e } = yc(this) && this || {}, r = {}, t = (n, o) => {
    const i = e && Ic(r, o) || o;
    Pt(r[i]) && Pt(n) ? r[i] = Fo(r[i], n) : Pt(n) ? r[i] = Fo({}, n) : Sr(n) ? r[i] = n.slice() : r[i] = n;
  };
  for (let n = 0, o = arguments.length; n < o; n++)
    arguments[n] && ut(arguments[n], t);
  return r;
}
const Th = (e, r, t, { allOwnKeys: n } = {}) => (ut(r, (o, i) => {
  t && oe(o) ? e[i] = Rc(o, t) : e[i] = o;
}, { allOwnKeys: n }), e), Oh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), vh = (e, r, t, n) => {
  e.prototype = Object.create(r.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), t && Object.assign(e.prototype, t);
}, Rh = (e, r, t, n) => {
  let o, i, a;
  const s = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!n || n(a, e, r)) && !s[a] && (r[a] = e[a], s[a] = !0);
    e = t !== !1 && ki(e);
  } while (e && (!t || t(e, r)) && e !== Object.prototype);
  return r;
}, gh = (e, r, t) => {
  e = String(e), (t === void 0 || t > e.length) && (t = e.length), t -= r.length;
  const n = e.indexOf(r, t);
  return n !== -1 && n === t;
}, bh = (e) => {
  if (!e)
    return null;
  if (Sr(e))
    return e;
  let r = e.length;
  if (!bc(r))
    return null;
  const t = new Array(r);
  for (; r-- > 0; )
    t[r] = e[r];
  return t;
}, Ih = ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && ki(Uint8Array)), Nh = (e, r) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = n.next()) && !o.done; ) {
    const i = o.value;
    r.call(e, i[0], i[1]);
  }
}, yh = (e, r) => {
  let t;
  const n = [];
  for (; (t = e.exec(r)) !== null; )
    n.push(t);
  return n;
}, Ah = Re("HTMLFormElement"), Sh = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(t, n, o) {
    return n.toUpperCase() + o;
  }
), us = (({ hasOwnProperty: e }) => (r, t) => e.call(r, t))(Object.prototype), Dh = Re("RegExp"), Ac = (e, r) => {
  const t = Object.getOwnPropertyDescriptors(e), n = {};
  ut(t, (o, i) => {
    let a;
    (a = r(o, i, e)) !== !1 && (n[i] = a || o);
  }), Object.defineProperties(e, n);
}, Uh = (e) => {
  Ac(e, (r, t) => {
    if (oe(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
      return !1;
    const n = e[t];
    if (oe(n)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + t + "'");
      });
    }
  });
}, Ph = (e, r) => {
  const t = {}, n = (o) => {
    o.forEach((i) => {
      t[i] = !0;
    });
  };
  return Sr(e) ? n(e) : n(String(e).split(r)), t;
}, wh = () => {
}, Hh = (e, r) => (e = +e, Number.isFinite(e) ? e : r), Ln = "abcdefghijklmnopqrstuvwxyz", cs = "0123456789", Sc = {
  DIGIT: cs,
  ALPHA: Ln,
  ALPHA_DIGIT: Ln + Ln.toUpperCase() + cs
}, Gh = (e = 16, r = Sc.ALPHA_DIGIT) => {
  let t = "";
  const { length: n } = r;
  for (; e--; )
    t += r[Math.random() * n | 0];
  return t;
};
function Ch(e) {
  return !!(e && oe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Lh = (e) => {
  const r = new Array(10), t = (n, o) => {
    if (dn(n)) {
      if (r.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        r[o] = n;
        const i = Sr(n) ? [] : {};
        return ut(n, (a, s) => {
          const u = t(a, o + 1);
          !et(u) && (i[s] = u);
        }), r[o] = void 0, i;
      }
    }
    return n;
  };
  return t(e, 0);
}, Mh = Re("AsyncFunction"), kh = (e) => e && (dn(e) || oe(e)) && oe(e.then) && oe(e.catch), R = {
  isArray: Sr,
  isArrayBuffer: gc,
  isBuffer: ah,
  isFormData: ph,
  isArrayBufferView: sh,
  isString: uh,
  isNumber: bc,
  isBoolean: ch,
  isObject: dn,
  isPlainObject: Pt,
  isUndefined: et,
  isDate: lh,
  isFile: fh,
  isBlob: dh,
  isRegExp: Dh,
  isFunction: oe,
  isStream: hh,
  isURLSearchParams: mh,
  isTypedArray: Ih,
  isFileList: _h,
  forEach: ut,
  merge: Fo,
  extend: Th,
  trim: Eh,
  stripBOM: Oh,
  inherits: vh,
  toFlatObject: Rh,
  kindOf: ln,
  kindOfTest: Re,
  endsWith: gh,
  toArray: bh,
  forEachEntry: Nh,
  matchAll: yh,
  isHTMLForm: Ah,
  hasOwnProperty: us,
  hasOwnProp: us,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ac,
  freezeMethods: Uh,
  toObjectSet: Ph,
  toCamelCase: Sh,
  noop: wh,
  toFiniteNumber: Hh,
  findKey: Ic,
  global: Nc,
  isContextDefined: yc,
  ALPHABET: Sc,
  generateString: Gh,
  isSpecCompliantForm: Ch,
  toJSONObject: Lh,
  isAsyncFn: Mh,
  isThenable: kh
};
function P(e, r, t, n, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), t && (this.config = t), n && (this.request = n), o && (this.response = o);
}
R.inherits(P, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Dc = P.prototype, Uc = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Uc[e] = { value: e };
});
Object.defineProperties(P, Uc);
Object.defineProperty(Dc, "isAxiosError", { value: !0 });
P.from = (e, r, t, n, o, i) => {
  const a = Object.create(Dc);
  return R.toFlatObject(e, a, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), P.call(a, e.message, r, t, n, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
const Bh = null;
function jo(e) {
  return R.isPlainObject(e) || R.isArray(e);
}
function Pc(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ls(e, r, t) {
  return e ? e.concat(r).map(function(o, i) {
    return o = Pc(o), !t && i ? "[" + o + "]" : o;
  }).join(t ? "." : "") : r;
}
function xh(e) {
  return R.isArray(e) && !e.some(jo);
}
const Fh = R.toFlatObject(R, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function _n(e, r, t) {
  if (!R.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), t = R.toFlatObject(t, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, T) {
    return !R.isUndefined(T[m]);
  });
  const n = t.metaTokens, o = t.visitor || l, i = t.dots, a = t.indexes, u = (t.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(r);
  if (!R.isFunction(o))
    throw new TypeError("visitor must be a function");
  function c(h) {
    if (h === null)
      return "";
    if (R.isDate(h))
      return h.toISOString();
    if (!u && R.isBlob(h))
      throw new P("Blob is not supported. Use a Buffer instead.");
    return R.isArrayBuffer(h) || R.isTypedArray(h) ? u && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h;
  }
  function l(h, m, T) {
    let p = h;
    if (h && !T && typeof h == "object") {
      if (R.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), h = JSON.stringify(h);
      else if (R.isArray(h) && xh(h) || (R.isFileList(h) || R.endsWith(m, "[]")) && (p = R.toArray(h)))
        return m = Pc(m), p.forEach(function(O, b) {
          !(R.isUndefined(O) || O === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? ls([m], b, i) : a === null ? m : m + "[]",
            c(O)
          );
        }), !1;
    }
    return jo(h) ? !0 : (r.append(ls(T, m, i), c(h)), !1);
  }
  const f = [], d = Object.assign(Fh, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: jo
  });
  function _(h, m) {
    if (!R.isUndefined(h)) {
      if (f.indexOf(h) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(h), R.forEach(h, function(p, v) {
        (!(R.isUndefined(p) || p === null) && o.call(
          r,
          p,
          R.isString(v) ? v.trim() : v,
          m,
          d
        )) === !0 && _(p, m ? m.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!R.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), r;
}
function fs(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return r[n];
  });
}
function Bi(e, r) {
  this._pairs = [], e && _n(e, this, r);
}
const wc = Bi.prototype;
wc.append = function(r, t) {
  this._pairs.push([r, t]);
};
wc.toString = function(r) {
  const t = r ? function(n) {
    return r.call(this, n, fs);
  } : fs;
  return this._pairs.map(function(o) {
    return t(o[0]) + "=" + t(o[1]);
  }, "").join("&");
};
function jh(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Hc(e, r, t) {
  if (!r)
    return e;
  const n = t && t.encode || jh, o = t && t.serialize;
  let i;
  if (o ? i = o(r, t) : i = R.isURLSearchParams(r) ? r.toString() : new Bi(r, t).toString(n), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Vh {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, t, n) {
    return this.handlers.push({
      fulfilled: r,
      rejected: t,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    R.forEach(this.handlers, function(n) {
      n !== null && r(n);
    });
  }
}
const ds = Vh, Gc = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Wh = typeof URLSearchParams < "u" ? URLSearchParams : Bi, Xh = typeof FormData < "u" ? FormData : null, Kh = typeof Blob < "u" ? Blob : null, Yh = (() => {
  let e;
  return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u";
})(), qh = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Te = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Wh,
    FormData: Xh,
    Blob: Kh
  },
  isStandardBrowserEnv: Yh,
  isStandardBrowserWebWorkerEnv: qh,
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
function zh(e, r) {
  return _n(e, new Te.classes.URLSearchParams(), Object.assign({
    visitor: function(t, n, o, i) {
      return Te.isNode && R.isBuffer(t) ? (this.append(n, t.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function $h(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function Qh(e) {
  const r = {}, t = Object.keys(e);
  let n;
  const o = t.length;
  let i;
  for (n = 0; n < o; n++)
    i = t[n], r[i] = e[i];
  return r;
}
function Cc(e) {
  function r(t, n, o, i) {
    let a = t[i++];
    const s = Number.isFinite(+a), u = i >= t.length;
    return a = !a && R.isArray(o) ? o.length : a, u ? (R.hasOwnProp(o, a) ? o[a] = [o[a], n] : o[a] = n, !s) : ((!o[a] || !R.isObject(o[a])) && (o[a] = []), r(t, n, o[a], i) && R.isArray(o[a]) && (o[a] = Qh(o[a])), !s);
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const t = {};
    return R.forEachEntry(e, (n, o) => {
      r($h(n), o, t, 0);
    }), t;
  }
  return null;
}
function Jh(e, r, t) {
  if (R.isString(e))
    try {
      return (r || JSON.parse)(e), R.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (t || JSON.stringify)(e);
}
const xi = {
  transitional: Gc,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, t) {
    const n = t.getContentType() || "", o = n.indexOf("application/json") > -1, i = R.isObject(r);
    if (i && R.isHTMLForm(r) && (r = new FormData(r)), R.isFormData(r))
      return o && o ? JSON.stringify(Cc(r)) : r;
    if (R.isArrayBuffer(r) || R.isBuffer(r) || R.isStream(r) || R.isFile(r) || R.isBlob(r))
      return r;
    if (R.isArrayBufferView(r))
      return r.buffer;
    if (R.isURLSearchParams(r))
      return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return zh(r, this.formSerializer).toString();
      if ((s = R.isFileList(r)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return _n(
          s ? { "files[]": r } : r,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return i || o ? (t.setContentType("application/json", !1), Jh(r)) : r;
  }],
  transformResponse: [function(r) {
    const t = this.transitional || xi.transitional, n = t && t.forcedJSONParsing, o = this.responseType === "json";
    if (r && R.isString(r) && (n && !this.responseType || o)) {
      const a = !(t && t.silentJSONParsing) && o;
      try {
        return JSON.parse(r);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? P.from(s, P.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Te.classes.FormData,
    Blob: Te.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
R.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  xi.headers[e] = {};
});
const Fi = xi, Zh = R.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ep = (e) => {
  const r = {};
  let t, n, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), t = a.substring(0, o).trim().toLowerCase(), n = a.substring(o + 1).trim(), !(!t || r[t] && Zh[t]) && (t === "set-cookie" ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n);
  }), r;
}, _s = Symbol("internals");
function Fr(e) {
  return e && String(e).trim().toLowerCase();
}
function wt(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(wt) : String(e);
}
function rp(e) {
  const r = /* @__PURE__ */ Object.create(null), t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = t.exec(e); )
    r[n[1]] = n[2];
  return r;
}
const tp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Mn(e, r, t, n, o) {
  if (R.isFunction(n))
    return n.call(this, r, t);
  if (o && (r = t), !!R.isString(r)) {
    if (R.isString(n))
      return r.indexOf(n) !== -1;
    if (R.isRegExp(n))
      return n.test(r);
  }
}
function np(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, t, n) => t.toUpperCase() + n);
}
function op(e, r) {
  const t = R.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function(o, i, a) {
        return this[n].call(this, r, o, i, a);
      },
      configurable: !0
    });
  });
}
class hn {
  constructor(r) {
    r && this.set(r);
  }
  set(r, t, n) {
    const o = this;
    function i(s, u, c) {
      const l = Fr(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = R.findKey(o, l);
      (!f || o[f] === void 0 || c === !0 || c === void 0 && o[f] !== !1) && (o[f || u] = wt(s));
    }
    const a = (s, u) => R.forEach(s, (c, l) => i(c, l, u));
    return R.isPlainObject(r) || r instanceof this.constructor ? a(r, t) : R.isString(r) && (r = r.trim()) && !tp(r) ? a(ep(r), t) : r != null && i(t, r, n), this;
  }
  get(r, t) {
    if (r = Fr(r), r) {
      const n = R.findKey(this, r);
      if (n) {
        const o = this[n];
        if (!t)
          return o;
        if (t === !0)
          return rp(o);
        if (R.isFunction(t))
          return t.call(this, o, n);
        if (R.isRegExp(t))
          return t.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, t) {
    if (r = Fr(r), r) {
      const n = R.findKey(this, r);
      return !!(n && this[n] !== void 0 && (!t || Mn(this, this[n], n, t)));
    }
    return !1;
  }
  delete(r, t) {
    const n = this;
    let o = !1;
    function i(a) {
      if (a = Fr(a), a) {
        const s = R.findKey(n, a);
        s && (!t || Mn(n, n[s], s, t)) && (delete n[s], o = !0);
      }
    }
    return R.isArray(r) ? r.forEach(i) : i(r), o;
  }
  clear(r) {
    const t = Object.keys(this);
    let n = t.length, o = !1;
    for (; n--; ) {
      const i = t[n];
      (!r || Mn(this, this[i], i, r, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(r) {
    const t = this, n = {};
    return R.forEach(this, (o, i) => {
      const a = R.findKey(n, i);
      if (a) {
        t[a] = wt(o), delete t[i];
        return;
      }
      const s = r ? np(i) : String(i).trim();
      s !== i && delete t[i], t[s] = wt(o), n[s] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const t = /* @__PURE__ */ Object.create(null);
    return R.forEach(this, (n, o) => {
      n != null && n !== !1 && (t[o] = r && R.isArray(n) ? n.join(", ") : n);
    }), t;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, t]) => r + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...t) {
    const n = new this(r);
    return t.forEach((o) => n.set(o)), n;
  }
  static accessor(r) {
    const n = (this[_s] = this[_s] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Fr(a);
      n[s] || (op(o, a), n[s] = !0);
    }
    return R.isArray(r) ? r.forEach(i) : i(r), this;
  }
}
hn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(hn.prototype, ({ value: e }, r) => {
  let t = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    }
  };
});
R.freezeMethods(hn);
const Ne = hn;
function kn(e, r) {
  const t = this || Fi, n = r || t, o = Ne.from(n.headers);
  let i = n.data;
  return R.forEach(e, function(s) {
    i = s.call(t, i, o.normalize(), r ? r.status : void 0);
  }), o.normalize(), i;
}
function Lc(e) {
  return !!(e && e.__CANCEL__);
}
function ct(e, r, t) {
  P.call(this, e ?? "canceled", P.ERR_CANCELED, r, t), this.name = "CanceledError";
}
R.inherits(ct, P, {
  __CANCEL__: !0
});
function ip(e, r, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status) ? e(t) : r(new P(
    "Request failed with status code " + t.status,
    [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][Math.floor(t.status / 100) - 4],
    t.config,
    t.request,
    t
  ));
}
const ap = Te.isStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(t, n, o, i, a, s) {
        const u = [];
        u.push(t + "=" + encodeURIComponent(n)), R.isNumber(o) && u.push("expires=" + new Date(o).toGMTString()), R.isString(i) && u.push("path=" + i), R.isString(a) && u.push("domain=" + a), s === !0 && u.push("secure"), document.cookie = u.join("; ");
      },
      read: function(t) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(t) {
        this.write(t, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function sp(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function up(e, r) {
  return r ? e.replace(/\/+$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function Mc(e, r) {
  return e && !sp(r) ? up(e, r) : r;
}
const cp = Te.isStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), t = document.createElement("a");
    let n;
    function o(i) {
      let a = i;
      return r && (t.setAttribute("href", a), a = t.href), t.setAttribute("href", a), {
        href: t.href,
        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
        host: t.host,
        search: t.search ? t.search.replace(/^\?/, "") : "",
        hash: t.hash ? t.hash.replace(/^#/, "") : "",
        hostname: t.hostname,
        port: t.port,
        pathname: t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname
      };
    }
    return n = o(window.location.href), function(a) {
      const s = R.isString(a) ? o(a) : a;
      return s.protocol === n.protocol && s.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function lp(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function fp(e, r) {
  e = e || 10;
  const t = new Array(e), n = new Array(e);
  let o = 0, i = 0, a;
  return r = r !== void 0 ? r : 1e3, function(u) {
    const c = Date.now(), l = n[i];
    a || (a = c), t[o] = u, n[o] = c;
    let f = i, d = 0;
    for (; f !== o; )
      d += t[f++], f = f % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), c - a < r)
      return;
    const _ = l && c - l;
    return _ ? Math.round(d * 1e3 / _) : void 0;
  };
}
function hs(e, r) {
  let t = 0;
  const n = fp(50, 250);
  return (o) => {
    const i = o.loaded, a = o.lengthComputable ? o.total : void 0, s = i - t, u = n(s), c = i <= a;
    t = i;
    const l = {
      loaded: i,
      total: a,
      progress: a ? i / a : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && a && c ? (a - i) / u : void 0,
      event: o
    };
    l[r ? "download" : "upload"] = !0, e(l);
  };
}
const dp = typeof XMLHttpRequest < "u", _p = dp && function(e) {
  return new Promise(function(t, n) {
    let o = e.data;
    const i = Ne.from(e.headers).normalize(), a = e.responseType;
    let s;
    function u() {
      e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
    }
    let c;
    R.isFormData(o) && (Te.isStandardBrowserEnv || Te.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.getContentType(/^\s*multipart\/form-data/) ? R.isString(c = i.getContentType()) && i.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : i.setContentType("multipart/form-data"));
    let l = new XMLHttpRequest();
    if (e.auth) {
      const h = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(h + ":" + m));
    }
    const f = Mc(e.baseURL, e.url);
    l.open(e.method.toUpperCase(), Hc(f, e.params, e.paramsSerializer), !0), l.timeout = e.timeout;
    function d() {
      if (!l)
        return;
      const h = Ne.from(
        "getAllResponseHeaders" in l && l.getAllResponseHeaders()
      ), T = {
        data: !a || a === "text" || a === "json" ? l.responseText : l.response,
        status: l.status,
        statusText: l.statusText,
        headers: h,
        config: e,
        request: l
      };
      ip(function(v) {
        t(v), u();
      }, function(v) {
        n(v), u();
      }, T), l = null;
    }
    if ("onloadend" in l ? l.onloadend = d : l.onreadystatechange = function() {
      !l || l.readyState !== 4 || l.status === 0 && !(l.responseURL && l.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, l.onabort = function() {
      l && (n(new P("Request aborted", P.ECONNABORTED, e, l)), l = null);
    }, l.onerror = function() {
      n(new P("Network Error", P.ERR_NETWORK, e, l)), l = null;
    }, l.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const T = e.transitional || Gc;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new P(
        m,
        T.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED,
        e,
        l
      )), l = null;
    }, Te.isStandardBrowserEnv) {
      const h = (e.withCredentials || cp(f)) && e.xsrfCookieName && ap.read(e.xsrfCookieName);
      h && i.set(e.xsrfHeaderName, h);
    }
    o === void 0 && i.setContentType(null), "setRequestHeader" in l && R.forEach(i.toJSON(), function(m, T) {
      l.setRequestHeader(T, m);
    }), R.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials), a && a !== "json" && (l.responseType = e.responseType), typeof e.onDownloadProgress == "function" && l.addEventListener("progress", hs(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && l.upload && l.upload.addEventListener("progress", hs(e.onUploadProgress)), (e.cancelToken || e.signal) && (s = (h) => {
      l && (n(!h || h.type ? new ct(null, e, l) : h), l.abort(), l = null);
    }, e.cancelToken && e.cancelToken.subscribe(s), e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
    const _ = lp(f);
    if (_ && Te.protocols.indexOf(_) === -1) {
      n(new P("Unsupported protocol " + _ + ":", P.ERR_BAD_REQUEST, e));
      return;
    }
    l.send(o || null);
  });
}, Vo = {
  http: Bh,
  xhr: _p
};
R.forEach(Vo, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const ps = (e) => `- ${e}`, hp = (e) => R.isFunction(e) || e === null || e === !1, kc = {
  getAdapter: (e) => {
    e = R.isArray(e) ? e : [e];
    const { length: r } = e;
    let t, n;
    const o = {};
    for (let i = 0; i < r; i++) {
      t = e[i];
      let a;
      if (n = t, !hp(t) && (n = Vo[(a = String(t)).toLowerCase()], n === void 0))
        throw new P(`Unknown adapter '${a}'`);
      if (n)
        break;
      o[a || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(o).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = r ? i.length > 1 ? `since :
` + i.map(ps).join(`
`) : " " + ps(i[0]) : "as no adapter specified";
      throw new P(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Vo
};
function Bn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ct(null, e);
}
function ms(e) {
  return Bn(e), e.headers = Ne.from(e.headers), e.data = kn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kc.getAdapter(e.adapter || Fi.adapter)(e).then(function(n) {
    return Bn(e), n.data = kn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ne.from(n.headers), n;
  }, function(n) {
    return Lc(n) || (Bn(e), n && n.response && (n.response.data = kn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ne.from(n.response.headers))), Promise.reject(n);
  });
}
const Es = (e) => e instanceof Ne ? e.toJSON() : e;
function gr(e, r) {
  r = r || {};
  const t = {};
  function n(c, l, f) {
    return R.isPlainObject(c) && R.isPlainObject(l) ? R.merge.call({ caseless: f }, c, l) : R.isPlainObject(l) ? R.merge({}, l) : R.isArray(l) ? l.slice() : l;
  }
  function o(c, l, f) {
    if (R.isUndefined(l)) {
      if (!R.isUndefined(c))
        return n(void 0, c, f);
    } else
      return n(c, l, f);
  }
  function i(c, l) {
    if (!R.isUndefined(l))
      return n(void 0, l);
  }
  function a(c, l) {
    if (R.isUndefined(l)) {
      if (!R.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, l);
  }
  function s(c, l, f) {
    if (f in r)
      return n(c, l);
    if (f in e)
      return n(void 0, c);
  }
  const u = {
    url: i,
    method: i,
    data: i,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, l) => o(Es(c), Es(l), !0)
  };
  return R.forEach(Object.keys(Object.assign({}, e, r)), function(l) {
    const f = u[l] || o, d = f(e[l], r[l], l);
    R.isUndefined(d) && f !== s || (t[l] = d);
  }), t;
}
const Bc = "1.5.1", ji = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  ji[e] = function(n) {
    return typeof n === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Ts = {};
ji.transitional = function(r, t, n) {
  function o(i, a) {
    return "[Axios v" + Bc + "] Transitional option '" + i + "'" + a + (n ? ". " + n : "");
  }
  return (i, a, s) => {
    if (r === !1)
      throw new P(
        o(a, " has been removed" + (t ? " in " + t : "")),
        P.ERR_DEPRECATED
      );
    return t && !Ts[a] && (Ts[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + t + " and will be removed in the near future"
      )
    )), r ? r(i, a, s) : !0;
  };
};
function pp(e, r, t) {
  if (typeof e != "object")
    throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let o = n.length;
  for (; o-- > 0; ) {
    const i = n[o], a = r[i];
    if (a) {
      const s = e[i], u = s === void 0 || a(s, i, e);
      if (u !== !0)
        throw new P("option " + i + " must be " + u, P.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0)
      throw new P("Unknown option " + i, P.ERR_BAD_OPTION);
  }
}
const Wo = {
  assertOptions: pp,
  validators: ji
}, Ge = Wo.validators;
class Kt {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new ds(),
      response: new ds()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(r, t) {
    typeof r == "string" ? (t = t || {}, t.url = r) : t = r || {}, t = gr(this.defaults, t);
    const { transitional: n, paramsSerializer: o, headers: i } = t;
    n !== void 0 && Wo.assertOptions(n, {
      silentJSONParsing: Ge.transitional(Ge.boolean),
      forcedJSONParsing: Ge.transitional(Ge.boolean),
      clarifyTimeoutError: Ge.transitional(Ge.boolean)
    }, !1), o != null && (R.isFunction(o) ? t.paramsSerializer = {
      serialize: o
    } : Wo.assertOptions(o, {
      encode: Ge.function,
      serialize: Ge.function
    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
    let a = i && R.merge(
      i.common,
      i[t.method]
    );
    i && R.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (h) => {
        delete i[h];
      }
    ), t.headers = Ne.concat(a, i);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(t) === !1 || (u = u && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let l, f = 0, d;
    if (!u) {
      const h = [ms.bind(this), void 0];
      for (h.unshift.apply(h, s), h.push.apply(h, c), d = h.length, l = Promise.resolve(t); f < d; )
        l = l.then(h[f++], h[f++]);
      return l;
    }
    d = s.length;
    let _ = t;
    for (f = 0; f < d; ) {
      const h = s[f++], m = s[f++];
      try {
        _ = h(_);
      } catch (T) {
        m.call(this, T);
        break;
      }
    }
    try {
      l = ms.call(this, _);
    } catch (h) {
      return Promise.reject(h);
    }
    for (f = 0, d = c.length; f < d; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(r) {
    r = gr(this.defaults, r);
    const t = Mc(r.baseURL, r.url);
    return Hc(t, r.params, r.paramsSerializer);
  }
}
R.forEach(["delete", "get", "head", "options"], function(r) {
  Kt.prototype[r] = function(t, n) {
    return this.request(gr(n || {}, {
      method: r,
      url: t,
      data: (n || {}).data
    }));
  };
});
R.forEach(["post", "put", "patch"], function(r) {
  function t(n) {
    return function(i, a, s) {
      return this.request(gr(s || {}, {
        method: r,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Kt.prototype[r] = t(), Kt.prototype[r + "Form"] = t(!0);
});
const Ht = Kt;
class Vi {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function(i) {
      t = i;
    });
    const n = this;
    this.promise.then((o) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](o);
      n._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        n.unsubscribe(i);
      }, a;
    }, r(function(i, a, s) {
      n.reason || (n.reason = new ct(i, a, s), t(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const t = this._listeners.indexOf(r);
    t !== -1 && this._listeners.splice(t, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new Vi(function(o) {
        r = o;
      }),
      cancel: r
    };
  }
}
const mp = Vi;
function Ep(e) {
  return function(t) {
    return e.apply(null, t);
  };
}
function Tp(e) {
  return R.isObject(e) && e.isAxiosError === !0;
}
const Xo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Xo).forEach(([e, r]) => {
  Xo[r] = e;
});
const Op = Xo;
function xc(e) {
  const r = new Ht(e), t = Rc(Ht.prototype.request, r);
  return R.extend(t, Ht.prototype, r, { allOwnKeys: !0 }), R.extend(t, r, null, { allOwnKeys: !0 }), t.create = function(o) {
    return xc(gr(e, o));
  }, t;
}
const W = xc(Fi);
W.Axios = Ht;
W.CanceledError = ct;
W.CancelToken = mp;
W.isCancel = Lc;
W.VERSION = Bc;
W.toFormData = _n;
W.AxiosError = P;
W.Cancel = W.CanceledError;
W.all = function(r) {
  return Promise.all(r);
};
W.spread = Ep;
W.isAxiosError = Tp;
W.mergeConfig = gr;
W.AxiosHeaders = Ne;
W.formToJSON = (e) => Cc(R.isHTMLForm(e) ? new FormData(e) : e);
W.getAdapter = kc.getAdapter;
W.HttpStatusCode = Op;
W.default = W;
const vp = W, Eg = vp.create({
  baseURL: vc,
  withCredentials: !0
}), Rp = {
  MAIN: "/",
  EDITOR: "/edit",
  ABOUT: "/about",
  PROFILE: "/users"
}, Tg = [Rp.PROFILE], gp = ({ when: e, children: r }) => e ? r : null, Fc = Iu({}), bp = async () => Promise.all([
  import("./react-spring_web.modern-61edb6fc.mjs"),
  import("./use-gesture-react.esm-51ac5389.mjs")
]), Ip = ({ children: e }) => {
  const r = To(), t = To(), n = KR(), o = async () => {
    const [a, s] = await bp();
    r.current = a, t.current = s, n.on();
  };
  en(() => {
    o();
  }, []);
  const i = Nu(
    () => ({
      Spring: r.current,
      Gesture: t.current,
      isLoaded: n.val
    }),
    [n.val]
  );
  return /* @__PURE__ */ fe(Fc.Provider, { value: i, children: /* @__PURE__ */ fe(gp, { when: n.val, children: e }) });
}, Og = () => mi(Fc);
var q;
q = { __e: function(e, r, t, n) {
  for (var o, i, a; r = r.__; )
    if ((o = r.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), a = o.__d), a)
          return o.__E = o;
      } catch (s) {
        e = s;
      }
  throw e;
} }, typeof Promise == "function" && Promise.prototype.then.bind(Promise.resolve());
var Yt, F, xn, Os, Ko = 0, jc = [], Gt = [], vs = q.__b, Rs = q.__r, gs = q.diffed, bs = q.__c, Is = q.unmount;
function Vc(e, r) {
  q.__h && q.__h(F, e, Ko || r), Ko = 0;
  var t = F.__H || (F.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({ __V: Gt }), t.__[e];
}
function Np(e) {
  return Ko = 1, yp(Wc, e);
}
function yp(e, r, t) {
  var n = Vc(Yt++, 2);
  if (n.t = e, !n.__c && (n.__ = [t ? t(r) : Wc(void 0, r), function(s) {
    var u = n.__N ? n.__N[0] : n.__[0], c = n.t(u, s);
    u !== c && (n.__N = [c, n.__[1]], n.__c.setState({}));
  }], n.__c = F, !F.u)) {
    var o = function(s, u, c) {
      if (!n.__c.__H)
        return !0;
      var l = n.__c.__H.__.filter(function(d) {
        return d.__c;
      });
      if (l.every(function(d) {
        return !d.__N;
      }))
        return !i || i.call(this, s, u, c);
      var f = !1;
      return l.forEach(function(d) {
        if (d.__N) {
          var _ = d.__[0];
          d.__ = d.__N, d.__N = void 0, _ !== d.__[0] && (f = !0);
        }
      }), !(!f && n.__c.props === s) && (!i || i.call(this, s, u, c));
    };
    F.u = !0;
    var i = F.shouldComponentUpdate, a = F.componentWillUpdate;
    F.componentWillUpdate = function(s, u, c) {
      if (this.__e) {
        var l = i;
        i = void 0, o(s, u, c), i = l;
      }
      a && a.call(this, s, u, c);
    }, F.shouldComponentUpdate = o;
  }
  return n.__N || n.__;
}
function Ap(e) {
  var r = Vc(Yt++, 10), t = Np();
  return r.__ = e, F.componentDidCatch || (F.componentDidCatch = function(n, o) {
    r.__ && r.__(n, o), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function Sp() {
  for (var e; e = jc.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ct), e.__H.__h.forEach(Yo), e.__H.__h = [];
      } catch (r) {
        e.__H.__h = [], q.__e(r, e.__v);
      }
}
q.__b = function(e) {
  F = null, vs && vs(e);
}, q.__r = function(e) {
  Rs && Rs(e), Yt = 0;
  var r = (F = e.__c).__H;
  r && (xn === F ? (r.__h = [], F.__h = [], r.__.forEach(function(t) {
    t.__N && (t.__ = t.__N), t.__V = Gt, t.__N = t.i = void 0;
  })) : (r.__h.forEach(Ct), r.__h.forEach(Yo), r.__h = [], Yt = 0)), xn = F;
}, q.diffed = function(e) {
  gs && gs(e);
  var r = e.__c;
  r && r.__H && (r.__H.__h.length && (jc.push(r) !== 1 && Os === q.requestAnimationFrame || ((Os = q.requestAnimationFrame) || Dp)(Sp)), r.__H.__.forEach(function(t) {
    t.i && (t.__H = t.i), t.__V !== Gt && (t.__ = t.__V), t.i = void 0, t.__V = Gt;
  })), xn = F = null;
}, q.__c = function(e, r) {
  r.some(function(t) {
    try {
      t.__h.forEach(Ct), t.__h = t.__h.filter(function(n) {
        return !n.__ || Yo(n);
      });
    } catch (n) {
      r.some(function(o) {
        o.__h && (o.__h = []);
      }), r = [], q.__e(n, t.__v);
    }
  }), bs && bs(e, r);
}, q.unmount = function(e) {
  Is && Is(e);
  var r, t = e.__c;
  t && t.__H && (t.__H.__.forEach(function(n) {
    try {
      Ct(n);
    } catch (o) {
      r = o;
    }
  }), t.__H = void 0, r && q.__e(r, t.__v));
};
var Ns = typeof requestAnimationFrame == "function";
function Dp(e) {
  var r, t = function() {
    clearTimeout(n), Ns && cancelAnimationFrame(r), setTimeout(e);
  }, n = setTimeout(t, 100);
  Ns && (r = requestAnimationFrame(t));
}
function Ct(e) {
  var r = F, t = e.__c;
  typeof t == "function" && (e.__c = void 0, t()), F = r;
}
function Yo(e) {
  var r = F;
  e.__c = e.__(), F = r;
}
function Wc(e, r) {
  return typeof r == "function" ? r(e) : r;
}
const Up = () => /* @__PURE__ */ Ei("div", { children: [
  "Custom Error Boundary. ",
  /* @__PURE__ */ fe("br", {})
] }), vg = ({ children: e }) => {
  const [r] = Ap();
  return console.error(r), r ? /* @__PURE__ */ fe(Up, { errorInfo: r }) : /* @__PURE__ */ fe(Ti, { children: e });
}, Xc = Iu(
  {}
), Rg = ({ children: e }) => {
  const [r, t] = df.useMessage(), n = ({ type: o, message: i }) => {
    r.open({
      type: o ?? "info",
      content: i,
      duration: 5
    });
  };
  return /* @__PURE__ */ Ei(Ti, { children: [
    t,
    /* @__PURE__ */ fe(Xc.Provider, { value: { open: n }, children: e })
  ] });
};
var L = "-ms-", zr = "-moz-", w = "-webkit-", Kc = "comm", pn = "rule", Wi = "decl", Pp = "@import", Yc = "@keyframes", wp = "@layer", Hp = Math.abs, Xi = String.fromCharCode, qo = Object.assign;
function Gp(e, r) {
  return z(e, 0) ^ 45 ? (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3) : 0;
}
function qc(e) {
  return e.trim();
}
function Ie(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function D(e, r, t) {
  return e.replace(r, t);
}
function Lt(e, r) {
  return e.indexOf(r);
}
function z(e, r) {
  return e.charCodeAt(r) | 0;
}
function br(e, r, t) {
  return e.slice(r, t);
}
function Ee(e) {
  return e.length;
}
function zc(e) {
  return e.length;
}
function Wr(e, r) {
  return r.push(e), e;
}
function Cp(e, r) {
  return e.map(r).join("");
}
function ys(e, r) {
  return e.filter(function(t) {
    return !Ie(t, r);
  });
}
var mn = 1, Ir = 1, $c = 0, ie = 0, V = 0, Dr = "";
function En(e, r, t, n, o, i, a, s) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: mn, column: Ir, length: a, return: "", siblings: s };
}
function Le(e, r) {
  return qo(En("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function sr(e) {
  for (; e.root; )
    e = Le(e.root, { children: [e] });
  Wr(e, e.siblings);
}
function Lp() {
  return V;
}
function Mp() {
  return V = ie > 0 ? z(Dr, --ie) : 0, Ir--, V === 10 && (Ir = 1, mn--), V;
}
function le() {
  return V = ie < $c ? z(Dr, ie++) : 0, Ir++, V === 10 && (Ir = 1, mn++), V;
}
function er() {
  return z(Dr, ie);
}
function Mt() {
  return ie;
}
function Tn(e, r) {
  return br(Dr, e, r);
}
function zo(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function kp(e) {
  return mn = Ir = 1, $c = Ee(Dr = e), ie = 0, [];
}
function Bp(e) {
  return Dr = "", e;
}
function Fn(e) {
  return qc(Tn(ie - 1, $o(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xp(e) {
  for (; (V = er()) && V < 33; )
    le();
  return zo(e) > 2 || zo(V) > 3 ? "" : " ";
}
function Fp(e, r) {
  for (; --r && le() && !(V < 48 || V > 102 || V > 57 && V < 65 || V > 70 && V < 97); )
    ;
  return Tn(e, Mt() + (r < 6 && er() == 32 && le() == 32));
}
function $o(e) {
  for (; le(); )
    switch (V) {
      case e:
        return ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && $o(V);
        break;
      case 40:
        e === 41 && $o(e);
        break;
      case 92:
        le();
        break;
    }
  return ie;
}
function jp(e, r) {
  for (; le() && e + V !== 47 + 10; )
    if (e + V === 42 + 42 && er() === 47)
      break;
  return "/*" + Tn(r, ie - 1) + "*" + Xi(e === 47 ? e : le());
}
function Vp(e) {
  for (; !zo(er()); )
    le();
  return Tn(e, ie);
}
function Wp(e) {
  return Bp(kt("", null, null, null, [""], e = kp(e), 0, [0], e));
}
function kt(e, r, t, n, o, i, a, s, u) {
  for (var c = 0, l = 0, f = a, d = 0, _ = 0, h = 0, m = 1, T = 1, p = 1, v = 0, O = "", b = o, N = i, g = n, I = O; T; )
    switch (h = v, v = le()) {
      case 40:
        if (h != 108 && z(I, f - 1) == 58) {
          Lt(I += D(Fn(v), "&", "&\f"), "&\f") != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        I += Fn(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        I += xp(h);
        break;
      case 92:
        I += Fp(Mt() - 1, 7);
        continue;
      case 47:
        switch (er()) {
          case 42:
          case 47:
            Wr(Xp(jp(le(), Mt()), r, t, u), u);
            break;
          default:
            I += "/";
        }
        break;
      case 123 * m:
        s[c++] = Ee(I) * p;
      case 125 * m:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            T = 0;
          case 59 + l:
            p == -1 && (I = D(I, /\f/g, "")), _ > 0 && Ee(I) - f && Wr(_ > 32 ? Ss(I + ";", n, t, f - 1, u) : Ss(D(I, " ", "") + ";", n, t, f - 2, u), u);
            break;
          case 59:
            I += ";";
          default:
            if (Wr(g = As(I, r, t, c, l, o, s, O, b = [], N = [], f, i), i), v === 123)
              if (l === 0)
                kt(I, r, g, g, b, i, f, s, N);
              else
                switch (d === 99 && z(I, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    kt(e, g, g, n && Wr(As(e, g, g, 0, 0, o, s, O, o, b = [], f, N), N), o, N, f, s, n ? b : N);
                    break;
                  default:
                    kt(I, g, g, g, [""], N, 0, s, N);
                }
        }
        c = l = _ = 0, m = p = 1, O = I = "", f = a;
        break;
      case 58:
        f = 1 + Ee(I), _ = h;
      default:
        if (m < 1) {
          if (v == 123)
            --m;
          else if (v == 125 && m++ == 0 && Mp() == 125)
            continue;
        }
        switch (I += Xi(v), v * m) {
          case 38:
            p = l > 0 ? 1 : (I += "\f", -1);
            break;
          case 44:
            s[c++] = (Ee(I) - 1) * p, p = 1;
            break;
          case 64:
            er() === 45 && (I += Fn(le())), d = er(), l = f = Ee(O = I += Vp(Mt())), v++;
            break;
          case 45:
            h === 45 && Ee(I) == 2 && (m = 0);
        }
    }
  return i;
}
function As(e, r, t, n, o, i, a, s, u, c, l, f) {
  for (var d = o - 1, _ = o === 0 ? i : [""], h = zc(_), m = 0, T = 0, p = 0; m < n; ++m)
    for (var v = 0, O = br(e, d + 1, d = Hp(T = a[m])), b = e; v < h; ++v)
      (b = qc(T > 0 ? _[v] + " " + O : D(O, /&\f/g, _[v]))) && (u[p++] = b);
  return En(e, r, t, o === 0 ? pn : s, u, c, l, f);
}
function Xp(e, r, t, n) {
  return En(e, r, t, Kc, Xi(Lp()), br(e, 2, -2), 0, n);
}
function Ss(e, r, t, n, o) {
  return En(e, r, t, Wi, br(e, 0, n), br(e, n + 1, -1), n, o);
}
function Qc(e, r, t) {
  switch (Gp(e, r)) {
    case 5103:
      return w + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return w + e + e;
    case 4789:
      return zr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return w + e + zr + e + L + e + e;
    case 5936:
      switch (z(e, r + 11)) {
        case 114:
          return w + e + L + D(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return w + e + L + D(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return w + e + L + D(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return w + e + L + e + e;
    case 6165:
      return w + e + L + "flex-" + e + e;
    case 5187:
      return w + e + D(e, /(\w+).+(:[^]+)/, w + "box-$1$2" + L + "flex-$1$2") + e;
    case 5443:
      return w + e + L + "flex-item-" + D(e, /flex-|-self/g, "") + (Ie(e, /flex-|baseline/) ? "" : L + "grid-row-" + D(e, /flex-|-self/g, "")) + e;
    case 4675:
      return w + e + L + "flex-line-pack" + D(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return w + e + L + D(e, "shrink", "negative") + e;
    case 5292:
      return w + e + L + D(e, "basis", "preferred-size") + e;
    case 6060:
      return w + "box-" + D(e, "-grow", "") + w + e + L + D(e, "grow", "positive") + e;
    case 4554:
      return w + D(e, /([^-])(transform)/g, "$1" + w + "$2") + e;
    case 6187:
      return D(D(D(e, /(zoom-|grab)/, w + "$1"), /(image-set)/, w + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return D(e, /(image-set\([^]*)/, w + "$1$`$1");
    case 4968:
      return D(D(e, /(.+:)(flex-)?(.*)/, w + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + w + e + e;
    case 4200:
      if (!Ie(e, /flex-|baseline/))
        return L + "grid-column-align" + br(e, r) + e;
      break;
    case 2592:
    case 3360:
      return L + D(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(n, o) {
        return r = o, Ie(n.props, /grid-\w+-end/);
      }) ? ~Lt(e + (t = t[r].value), "span") ? e : L + D(e, "-start", "") + e + L + "grid-row-span:" + (~Lt(t, "span") ? Ie(t, /\d+/) : +Ie(t, /\d+/) - +Ie(e, /\d+/)) + ";" : L + D(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(n) {
        return Ie(n.props, /grid-\w+-start/);
      }) ? e : L + D(D(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return D(e, /(.+)-inline(.+)/, w + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ee(e) - 1 - r > 6)
        switch (z(e, r + 1)) {
          case 109:
            if (z(e, r + 4) !== 45)
              break;
          case 102:
            return D(e, /(.+:)(.+)-([^]+)/, "$1" + w + "$2-$3$1" + zr + (z(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Lt(e, "stretch") ? Qc(D(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return D(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(n, o, i, a, s, u, c) {
        return L + o + ":" + i + c + (a ? L + o + "-span:" + (s ? u : +u - +i) + c : "") + e;
      });
    case 4949:
      if (z(e, r + 6) === 121)
        return D(e, ":", ":" + w) + e;
      break;
    case 6444:
      switch (z(e, z(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return D(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + w + (z(e, 14) === 45 ? "inline-" : "") + "box$3$1" + w + "$2$3$1" + L + "$2box$3") + e;
        case 100:
          return D(e, ":", ":" + L) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return D(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function qt(e, r) {
  for (var t = "", n = 0; n < e.length; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function Kp(e, r, t, n) {
  switch (e.type) {
    case wp:
      if (e.children.length)
        break;
    case Pp:
    case Wi:
      return e.return = e.return || e.value;
    case Kc:
      return "";
    case Yc:
      return e.return = e.value + "{" + qt(e.children, n) + "}";
    case pn:
      if (!Ee(e.value = e.props.join(",")))
        return "";
  }
  return Ee(t = qt(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Yp(e) {
  var r = zc(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function qp(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function zp(e, r, t, n) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Wi:
        e.return = Qc(e.value, e.length, t);
        return;
      case Yc:
        return qt([Le(e, { value: D(e.value, "@", "@" + w) })], n);
      case pn:
        if (e.length)
          return Cp(t = e.props, function(o) {
            switch (Ie(o, n = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                sr(Le(e, { props: [D(o, /:(read-\w+)/, ":" + zr + "$1")] })), sr(Le(e, { props: [o] })), qo(e, { props: ys(t, n) });
                break;
              case "::placeholder":
                sr(Le(e, { props: [D(o, /:(plac\w+)/, ":" + w + "input-$1")] })), sr(Le(e, { props: [D(o, /:(plac\w+)/, ":" + zr + "$1")] })), sr(Le(e, { props: [D(o, /:(plac\w+)/, L + "input-$1")] })), sr(Le(e, { props: [o] })), qo(e, { props: ys(t, n) });
                break;
            }
            return "";
          });
    }
}
var $p = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Nr = typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" } !== void 0 && ({ GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_ATTR || { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_ATTR) || "data-styled", Ki = typeof window < "u" && "HTMLElement" in window, Qp = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" } !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "" ? { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" } !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== void 0 && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY !== "false" && { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_1fe912a6-f1a9-43de-827f-7c75d1ec5762", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "yarn/3.6.3 npm/? node/v20.8.0 linux x64", NX_WORKSPACE_ROOT: "/home/runner/work/code-gear/code-gear", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_1fe912a6-f1a9-43de-827f-7c75d1ec5762", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/tmp/xfs-96ed8589/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/code-gear/code-gear/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "Gearonix", GRADLE_HOME: "/usr/share/gradle-8.3", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.0.10792818", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", NX_INVOKED_BY_RUNNER: "true", GITHUB_REPOSITORY_OWNER_ID: "74734213", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "dependabot/npm_and_yarn/babel/traverse-7.23.2", SYSTEMD_EXEC_PID: "577", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.8/x64", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.1/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20231001.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17781", GITHUB_WORKFLOW: "code-gear > build", _: "/usr/local/bin/yarn", GITHUB_RUN_ID: "6546009623", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_BASE_REF: "master", ImageOS: "ubuntu22", NX_TASK_HASH: "738677091576130865", GITHUB_WORKFLOW_REF: "Gearonix/code-gear/.github/workflows/build.yml@refs/pull/41/merge", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", PATH: "/home/runner/work/code-gear/code-gear/node_modules/.bin:/home/runner/work/code-gear/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/20.8.0/x64/bin:/tmp/xfs-96ed8589:/opt/hostedtoolcache/node/20.8.0/x64/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/snap/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_4eb443b4-a580-48ea-af7f-4ee62e29283f", INVOCATION_ID: "a99f1f1690b540179ccd8bc9265e5873", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", npm_package_name: "@code-gear/source", GITHUB_ACTION: "__run_3", GITHUB_RUN_NUMBER: "77", GITHUB_TRIGGERING_ACTOR: "dependabot[bot]", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LERNA_PACKAGE_NAME: "web-shared", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 3", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "41/merge", GITHUB_REPOSITORY: "Gearonix/code-gear", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", PROJECT_CWD: "/home/runner/work/code-gear/code-gear", GITHUB_REPOSITORY_ID: "659143083", GITHUB_ACTIONS: "true", STATS_NM: "true", npm_package_version: "1.1.1", GITHUB_REF_PROTECTED: "false", NX_CLI_SET: "true", GITHUB_WORKSPACE: "/home/runner/work/code-gear/code-gear", ACCEPT_EULA: "Y", GITHUB_JOB: "build", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "436e45d94b6e899ac681d853e8eccb23b5d18da0", GITHUB_RUN_ATTEMPT: "1", NX_TASK_TARGET_TARGET: "build", GITHUB_REF: "refs/pull/41/merge", GITHUB_ACTOR: "dependabot[bot]", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", NX_LOAD_DOT_ENV_FILES: "true", LEIN_HOME: "/usr/local/lib/lein", NX_TASK_TARGET_PROJECT: "web-shared", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_1fe912a6-f1a9-43de-827f-7c75d1ec5762", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/code-gear/code-gear", GITHUB_ACTOR_ID: "49699333", RUNNER_WORKSPACE: "/home/runner/work/code-gear", BERRY_BIN_FOLDER: "/tmp/xfs-96ed8589", npm_execpath: "/tmp/xfs-96ed8589/yarn", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.10.0-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_1fe912a6-f1a9-43de-827f-7c75d1ec5762", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_1fe912a6-f1a9-43de-827f-7c75d1ec5762", INIT_CWD: "/home/runner/work/code-gear/code-gear", NX_TERMINAL_OUTPUT_PATH: "/home/runner/work/code-gear/code-gear/node_modules/.cache/nx/terminalOutputs/738677091576130865", NX_TASK_TARGET_CONFIGURATION: "production", NODE_ENV: "production" }.SC_DISABLE_SPEEDY), Jp = {}, On = Object.freeze([]), yr = Object.freeze({});
function Jc(e, r, t) {
  return t === void 0 && (t = yr), e.theme !== t.theme && e.theme || r || t.theme;
}
var Zc = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Zp = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, em = /(^-|-$)/g;
function Ds(e) {
  return e.replace(Zp, "-").replace(em, "");
}
var rm = /(a)(d)/gi, Us = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Qo(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = Us(r % 52) + t;
  return (Us(r % 52) + t).replace(rm, "$1-$2");
}
var jn, _r = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, el = function(e) {
  return _r(5381, e);
};
function rl(e) {
  return Qo(el(e) >>> 0);
}
function tm(e) {
  return e.displayName || e.name || "Component";
}
function Vn(e) {
  return typeof e == "string" && !0;
}
var tl = typeof Symbol == "function" && Symbol.for, nl = tl ? Symbol.for("react.memo") : 60115, nm = tl ? Symbol.for("react.forward_ref") : 60112, om = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, im = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ol = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, am = ((jn = {})[nm] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, jn[nl] = ol, jn);
function Ps(e) {
  return ("type" in (r = e) && r.type.$$typeof) === nl ? ol : "$$typeof" in e ? am[e.$$typeof] : om;
  var r;
}
var sm = Object.defineProperty, um = Object.getOwnPropertyNames, ws = Object.getOwnPropertySymbols, cm = Object.getOwnPropertyDescriptor, lm = Object.getPrototypeOf, Hs = Object.prototype;
function il(e, r, t) {
  if (typeof r != "string") {
    if (Hs) {
      var n = lm(r);
      n && n !== Hs && il(e, n, t);
    }
    var o = um(r);
    ws && (o = o.concat(ws(r)));
    for (var i = Ps(e), a = Ps(r), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!(u in im || t && t[u] || a && u in a || i && u in i)) {
        var c = cm(r, u);
        try {
          sm(e, u, c);
        } catch {
        }
      }
    }
  }
  return e;
}
function rr(e) {
  return typeof e == "function";
}
function Yi(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function Je(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function Jo(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], n = 1; n < e.length; n++)
    t += r ? r + e[n] : e[n];
  return t;
}
function rt(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Zo(e, r, t) {
  if (t === void 0 && (t = !1), !t && !rt(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var n = 0; n < r.length; n++)
      e[n] = Zo(e[n], r[n]);
  else if (rt(r))
    for (var n in r)
      e[n] = Zo(e[n], r[n]);
  return e;
}
function qi(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
function tr(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : ""));
}
var fm = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, n = 0; n < r; n++)
      t += this.groupSizes[n];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var n = this.groupSizes, o = n.length, i = o; r >= i; )
        if ((i <<= 1) < 0)
          throw tr(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(n), this.length = i;
      for (var a = o; a < i; a++)
        this.groupSizes[a] = 0;
    }
    for (var s = this.indexOfGroup(r + 1), u = (a = 0, t.length); a < u; a++)
      this.tag.insertRule(s, t[a]) && (this.groupSizes[r]++, s++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], n = this.indexOfGroup(r), o = n + t;
      this.groupSizes[r] = 0;
      for (var i = n; i < o; i++)
        this.tag.deleteRule(n);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var n = this.groupSizes[r], o = this.indexOfGroup(r), i = o + n, a = o; a < i; a++)
      t += "".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);
    return t;
  }, e;
}(), Bt = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), Wn = 1, Tt = function(e) {
  if (Bt.has(e))
    return Bt.get(e);
  for (; zt.has(Wn); )
    Wn++;
  var r = Wn++;
  return Bt.set(e, r), zt.set(r, e), r;
}, dm = function(e, r) {
  Bt.set(e, r), zt.set(r, e);
}, _m = "style[".concat(Nr, "][").concat("data-styled-version", '="').concat("6.0.8", '"]'), hm = new RegExp("^".concat(Nr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), pm = function(e, r, t) {
  for (var n, o = t.split(","), i = 0, a = o.length; i < a; i++)
    (n = o[i]) && e.registerName(r, n);
}, mm = function(e, r) {
  for (var t, n = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(`/*!sc*/
`), o = [], i = 0, a = n.length; i < a; i++) {
    var s = n[i].trim();
    if (s) {
      var u = s.match(hm);
      if (u) {
        var c = 0 | parseInt(u[1], 10), l = u[2];
        c !== 0 && (dm(l, c), pm(e, l, u[3]), e.getTag().insertRules(c, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
};
function Em() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var al = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(s) {
    var u = Array.from(s.querySelectorAll("style[".concat(Nr, "]")));
    return u[u.length - 1];
  }(t), i = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Nr, "active"), n.setAttribute("data-styled-version", "6.0.8");
  var a = Em();
  return a && n.setAttribute("nonce", a), t.insertBefore(n, i), n;
}, Tm = function() {
  function e(r) {
    this.element = al(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var n = document.styleSheets, o = 0, i = n.length; o < i; o++) {
        var a = n[o];
        if (a.ownerNode === t)
          return a;
      }
      throw tr(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), Om = function() {
  function e(r) {
    this.element = al(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var n = document.createTextNode(t);
      return this.element.insertBefore(n, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), vm = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Gs = Ki, Rm = { isServer: !Ki, useCSSOMInjection: !Qp }, $t = function() {
  function e(r, t, n) {
    r === void 0 && (r = yr), t === void 0 && (t = {});
    var o = this;
    this.options = E(E({}, Rm), r), this.gs = t, this.names = new Map(n), this.server = !!r.isServer, !this.server && Ki && Gs && (Gs = !1, function(i) {
      for (var a = document.querySelectorAll(_m), s = 0, u = a.length; s < u; s++) {
        var c = a[s];
        c && c.getAttribute(Nr) !== "active" && (mm(i, c), c.parentNode && c.parentNode.removeChild(c));
      }
    }(this)), qi(this, function() {
      return function(i) {
        for (var a = i.getTag(), s = a.length, u = "", c = function(f) {
          var d = function(p) {
            return zt.get(p);
          }(f);
          if (d === void 0)
            return "continue";
          var _ = i.names.get(d), h = a.getGroup(f);
          if (_ === void 0 || h.length === 0)
            return "continue";
          var m = "".concat(Nr, ".g").concat(f, '[id="').concat(d, '"]'), T = "";
          _ !== void 0 && _.forEach(function(p) {
            p.length > 0 && (T += "".concat(p, ","));
          }), u += "".concat(h).concat(m, '{content:"').concat(T, '"}').concat(`/*!sc*/
`);
        }, l = 0; l < s; l++)
          c(l);
        return u;
      }(o);
    });
  }
  return e.registerId = function(r) {
    return Tt(r);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(E(E({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var n = t.useCSSOMInjection, o = t.target;
      return t.isServer ? new vm(o) : n ? new Tm(o) : new Om(o);
    }(this.options), new fm(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Tt(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var n = /* @__PURE__ */ new Set();
      n.add(t), this.names.set(r, n);
    }
  }, e.prototype.insertRules = function(r, t, n) {
    this.registerName(r, t), this.getTag().insertRules(Tt(r), n);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Tt(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), gm = /&/g, bm = /^\s*\/\/.*$/gm;
function sl(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(n) {
      return "".concat(r, " ").concat(n);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = sl(t.children, r)), t;
  });
}
function Im(e) {
  var r, t, n, o = e === void 0 ? yr : e, i = o.options, a = i === void 0 ? yr : i, s = o.plugins, u = s === void 0 ? On : s, c = function(d, _, h) {
    return h === t || h.startsWith(t) && h.endsWith(t) && h.replaceAll(t, "").length > 0 ? ".".concat(r) : d;
  }, l = u.slice();
  l.push(function(d) {
    d.type === pn && d.value.includes("&") && (d.props[0] = d.props[0].replace(gm, t).replace(n, c));
  }), a.prefix && l.push(zp), l.push(Kp);
  var f = function(d, _, h, m) {
    _ === void 0 && (_ = ""), h === void 0 && (h = ""), m === void 0 && (m = "&"), r = m, t = _, n = new RegExp("\\".concat(t, "\\b"), "g");
    var T = d.replace(bm, ""), p = Wp(h || _ ? "".concat(h, " ").concat(_, " { ").concat(T, " }") : T);
    a.namespace && (p = sl(p, a.namespace));
    var v = [];
    return qt(p, Yp(l.concat(qp(function(O) {
      return v.push(O);
    })))), v;
  };
  return f.hash = u.length ? u.reduce(function(d, _) {
    return _.name || tr(15), _r(d, _.name);
  }, 5381).toString() : "", f;
}
var Nm = new $t(), ei = Im(), ul = Q.createContext({ shouldForwardProp: void 0, styleSheet: Nm, stylis: ei });
ul.Consumer;
Q.createContext(void 0);
function ri() {
  return mi(ul);
}
var ym = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, i) {
      i === void 0 && (i = ei);
      var a = n.name + i.hash;
      o.hasNameForId(n.id, a) || o.insertRules(n.id, a, i(n.rules, a, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, qi(this, function() {
      throw tr(12, String(n.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = ei), this.name + r.hash;
  }, e;
}(), Am = function(e) {
  return e >= "A" && e <= "Z";
};
function Cs(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var n = e[t];
    if (t === 1 && n === "-" && e[0] === "-")
      return e;
    Am(n) ? r += "-" + n.toLowerCase() : r += n;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var cl = function(e) {
  return e == null || e === !1 || e === "";
}, ll = function(e) {
  var r, t, n = [];
  for (var o in e) {
    var i = e[o];
    e.hasOwnProperty(o) && !cl(i) && (Array.isArray(i) && i.isCss || rr(i) ? n.push("".concat(Cs(o), ":"), i, ";") : rt(i) ? n.push.apply(n, ne(ne(["".concat(o, " {")], ll(i), !1), ["}"], !1)) : n.push("".concat(Cs(o), ": ").concat((r = o, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in $p || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return n;
};
function Be(e, r, t, n) {
  if (cl(e))
    return [];
  if (Yi(e))
    return [".".concat(e.styledComponentId)];
  if (rr(e)) {
    if (!rr(i = e) || i.prototype && i.prototype.isReactComponent || !r)
      return [e];
    var o = e(r);
    return Be(o, r, t, n);
  }
  var i;
  return e instanceof ym ? t ? (e.inject(t, n), [e.getName(n)]) : [e] : rt(e) ? ll(e) : Array.isArray(e) ? Array.prototype.concat.apply(On, e.map(function(a) {
    return Be(a, r, t, n);
  })) : [e.toString()];
}
function fl(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (rr(t) && !Yi(t))
      return !1;
  }
  return !0;
}
var Sm = el("6.0.8"), Dm = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = (n === void 0 || n.isStatic) && fl(r), this.componentId = t, this.baseHash = _r(Sm, t), this.baseStyle = n, $t.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, n) : "";
    if (this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        o = Je(o, this.staticRulesId);
      else {
        var i = Jo(Be(this.rules, r, t, n)), a = Qo(_r(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(this.componentId, a)) {
          var s = n(i, ".".concat(a), void 0, this.componentId);
          t.insertRules(this.componentId, a, s);
        }
        o = Je(o, a), this.staticRulesId = a;
      }
    else {
      for (var u = _r(this.baseHash, n.hash), c = "", l = 0; l < this.rules.length; l++) {
        var f = this.rules[l];
        if (typeof f == "string")
          c += f;
        else if (f) {
          var d = Jo(Be(f, r, t, n));
          u = _r(u, d + l), c += d;
        }
      }
      if (c) {
        var _ = Qo(u >>> 0);
        t.hasNameForId(this.componentId, _) || t.insertRules(this.componentId, _, n(c, ".".concat(_), void 0, this.componentId)), o = Je(o, _);
      }
    }
    return o;
  }, e;
}(), tt = Q.createContext(void 0);
tt.Consumer;
function Um(e) {
  var r = Q.useContext(tt), t = Nu(function() {
    return function(n, o) {
      if (!n)
        throw tr(14);
      if (rr(n)) {
        var i = n(o);
        return i;
      }
      if (Array.isArray(n) || typeof n != "object")
        throw tr(8);
      return o ? E(E({}, o), n) : n;
    }(e.theme, r);
  }, [e.theme, r]);
  return e.children ? Q.createElement(tt.Provider, { value: t }, e.children) : null;
}
var Xn = {};
function Pm(e, r, t) {
  var n = Yi(e), o = e, i = !Vn(e), a = r.attrs, s = a === void 0 ? On : a, u = r.componentId, c = u === void 0 ? function(O, b) {
    var N = typeof O != "string" ? "sc" : Ds(O);
    Xn[N] = (Xn[N] || 0) + 1;
    var g = "".concat(N, "-").concat(rl("6.0.8" + N + Xn[N]));
    return b ? "".concat(b, "-").concat(g) : g;
  }(r.displayName, r.parentComponentId) : u, l = r.displayName;
  l === void 0 && function(O) {
    return Vn(O) ? "styled.".concat(O) : "Styled(".concat(tm(O), ")");
  }(e);
  var f = r.displayName && r.componentId ? "".concat(Ds(r.displayName), "-").concat(r.componentId) : r.componentId || c, d = n && o.attrs ? o.attrs.concat(s).filter(Boolean) : s, _ = r.shouldForwardProp;
  if (n && o.shouldForwardProp) {
    var h = o.shouldForwardProp;
    if (r.shouldForwardProp) {
      var m = r.shouldForwardProp;
      _ = function(O, b) {
        return h(O, b) && m(O, b);
      };
    } else
      _ = h;
  }
  var T = new Dm(t, f, n ? o.componentStyle : void 0);
  function p(O, b) {
    return function(N, g, I) {
      var A = N.attrs, B = N.componentStyle, x = N.defaultProps, X = N.foldedComponentIds, ae = N.styledComponentId, wr = N.target, Hr = Q.useContext(tt), Gr = ri(), or = N.shouldForwardProp || Gr.shouldForwardProp, _e = function(Pe, we, _t) {
        for (var Lr, ze = E(E({}, we), { className: void 0, theme: _t }), gn = 0; gn < Pe.length; gn += 1) {
          var ht = rr(Lr = Pe[gn]) ? Lr(ze) : Lr;
          for (var He in ht)
            ze[He] = He === "className" ? Je(ze[He], ht[He]) : He === "style" ? E(E({}, ze[He]), ht[He]) : ht[He];
        }
        return we.className && (ze.className = Je(ze.className, we.className)), ze;
      }(A, g, Jc(g, Hr, x) || yr), qe = _e.as || wr, K = {};
      for (var he in _e)
        _e[he] === void 0 || he[0] === "$" || he === "as" || he === "theme" || (he === "forwardedAs" ? K.as = _e.forwardedAs : or && !or(he, qe) || (K[he] = _e[he]));
      var Cr = function(Pe, we) {
        var _t = ri(), Lr = Pe.generateAndInjectStyles(we, _t.styleSheet, _t.stylis);
        return Lr;
      }(B, _e), pe = Je(X, ae);
      return Cr && (pe += " " + Cr), _e.className && (pe += " " + _e.className), K[Vn(qe) && !Zc.has(qe) ? "class" : "className"] = pe, K.ref = I, ff(qe, K);
    }(v, O, b);
  }
  var v = Q.forwardRef(p);
  return v.attrs = d, v.componentStyle = T, v.shouldForwardProp = _, v.foldedComponentIds = n ? Je(o.foldedComponentIds, o.styledComponentId) : "", v.styledComponentId = f, v.target = n ? o.target : e, Object.defineProperty(v, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(O) {
    this._foldedDefaultProps = n ? function(b) {
      for (var N = [], g = 1; g < arguments.length; g++)
        N[g - 1] = arguments[g];
      for (var I = 0, A = N; I < A.length; I++)
        Zo(b, A[I], !0);
      return b;
    }({}, o.defaultProps, O) : O;
  } }), qi(v, function() {
    return ".".concat(v.styledComponentId);
  }), i && il(v, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), v;
}
function Ls(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}
var Ms = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function te(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  if (rr(e) || rt(e)) {
    var n = e;
    return Ms(Be(Ls(On, ne([n], r, !0))));
  }
  var o = e;
  return r.length === 0 && o.length === 1 && typeof o[0] == "string" ? Be(o) : Ms(Be(Ls(o, r)));
}
function ti(e, r, t) {
  if (t === void 0 && (t = yr), !r)
    throw tr(1, r);
  var n = function(o) {
    for (var i = [], a = 1; a < arguments.length; a++)
      i[a - 1] = arguments[a];
    return e(r, t, te.apply(void 0, ne([o], i, !1)));
  };
  return n.attrs = function(o) {
    return ti(e, r, E(E({}, t), { attrs: Array.prototype.concat(t.attrs, o).filter(Boolean) }));
  }, n.withConfig = function(o) {
    return ti(e, r, E(E({}, t), o));
  }, n;
}
var dl = function(e) {
  return ti(Pm, e);
}, wm = dl;
Zc.forEach(function(e) {
  wm[e] = dl(e);
});
var Hm = function() {
  function e(r, t) {
    this.rules = r, this.componentId = t, this.isStatic = fl(r), $t.registerId(this.componentId + 1);
  }
  return e.prototype.createStyles = function(r, t, n, o) {
    var i = o(Jo(Be(this.rules, t, n, o)), ""), a = this.componentId + r;
    n.insertRules(a, a, i);
  }, e.prototype.removeStyles = function(r, t) {
    t.clearRules(this.componentId + r);
  }, e.prototype.renderStyles = function(r, t, n, o) {
    r > 2 && $t.registerId(this.componentId + r), this.removeStyles(r, n), this.createStyles(r, t, n, o);
  }, e;
}();
function Gm(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  var n = te.apply(void 0, ne([e], r, !1)), o = "sc-global-".concat(rl(JSON.stringify(n))), i = new Hm(n, o), a = function(u) {
    var c = ri(), l = Q.useContext(tt), f = Q.useRef(c.styleSheet.allocateGSInstance(o)).current;
    return c.styleSheet.server && s(f, u, c.styleSheet, l, c.stylis), Q.useLayoutEffect(function() {
      if (!c.styleSheet.server)
        return s(f, u, c.styleSheet, l, c.stylis), function() {
          return i.removeStyles(f, c.styleSheet);
        };
    }, [f, u, c.styleSheet, l, c.stylis]), null;
  };
  function s(u, c, l, f, d) {
    if (i.isStatic)
      i.renderStyles(u, Jp, l, d);
    else {
      var _ = E(E({}, c), { theme: Jc(c, f, a.defaultProps) });
      i.renderStyles(u, _, l, d);
    }
  }
  return Q.memo(a);
}
const Cm = (e = "100%", r = e) => te`
  width: ${e};
  height: ${r};
`, Lm = te`
  border: 1px solid red;
`, Mm = (e) => te`
  padding-left: ${e}px;
  padding-right: ${e}px;
`, km = (e = "flex-start", r = "stretch", t = "row") => te`
  display: flex;
  justify-content: ${e};
  align-items: ${r};
  flex-direction: ${t};
`, Bm = (e) => te`
  transition: color 200ms;
  &:hover {
    color: ${e};
  }
`, _l = (e) => te`
  font-family: '${e}', sans-serif;
`, xm = (e) => ({ theme: r }) => `${r[e]} !important;`, hl = (e = "&") => te`
  ${e}::-webkit-scrollbar {
    width: 10px;
  }

  ${e}::-webkit-scrollbar-track {
    background-color: ${({ theme: r }) => r.lightGrey};
  }

  ${e}::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`, Fm = (e) => te`
  ${({ theme: r }) => r[e]}
`, jm = (e) => te`
  position: absolute;
  ${Object.entries(e).map(([r, t]) => `${r}: ${t};`).join(`
`)}
`, Vm = (e, r) => te`
  margin-left: ${e}px;
  margin-top: ${r}px;
`, Wm = te`
  -webkit-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
`, Xm = "1px solid", gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  absolute: jm,
  antdColor: xm,
  br: Xm,
  color: Fm,
  customScrollbar: hl,
  flex: km,
  font: _l,
  hPadding: Mm,
  hover: Bm,
  margin: Vm,
  shadow: Wm,
  testBorder: Lm,
  wh: Cm
}, Symbol.toStringTag, { value: "Module" })), Km = Gm`
  body {
    background: ${({ theme: e }) => e.default};
    ${_l("Poppins")}
    overflow-x: hidden;
    user-select: none;
  }

  p, h2, h3, h4 {
    font-size: ${({ theme: e }) => e.fz6};
  }
  h1, h2, h3, h4, h5, h6, p {
    font-weight: normal;
    margin: 0;
  }


  ${hl("body")}

  .ant-popconfirm {
    z-index: 2;
  }
`, $e = {
  black: "#000",
  light: "#C4CBDA",
  white: "#fff",
  default: "#1E1E1E",
  grey: "#24272E",
  greyDark: "#3C3C4A",
  lightGrey: "#3C3C4A",
  secondaryGrey: "#9099AC",
  darkBlue: "#1F2228",
  fz5: "14px",
  fz6: "16px",
  fz7: "18px",
  fz8: "19px",
  fz9: "21px",
  f10: "28px"
}, Ym = {
  algorithm: _f.darkAlgorithm,
  token: {
    colorBgBase: $e.grey,
    colorTextBase: $e.light,
    colorBorder: $e.lightGrey,
    colorBgTextHover: $e.light,
    colorBgTextActive: $e.light,
    colorPrimary: $e.light
  }
}, qm = ({ children: e }) => /* @__PURE__ */ fe(hf, { theme: Ym, children: /* @__PURE__ */ fe(Um, { theme: $e, children: e }) }), bg = () => mi(Xc);
var Kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ge = function(e) {
  try {
    return !!e();
  } catch {
    return !0;
  }
}, zm = ge, pl = !zm(function() {
  var e = (function() {
  }).bind();
  return typeof e != "function" || e.hasOwnProperty("prototype");
}), ml = pl, El = Function.prototype, ni = El.call, $m = ml && El.bind.bind(ni, ni), be = ml ? $m : function(e) {
  return function() {
    return ni.apply(e, arguments);
  };
}, Tl = be, Qm = Tl({}.toString), Jm = Tl("".slice), Zm = function(e) {
  return Jm(Qm(e), 8, -1);
}, eE = be, rE = ge, tE = Zm, Yn = Object, nE = eE("".split), oE = rE(function() {
  return !Yn("z").propertyIsEnumerable(0);
}) ? function(e) {
  return tE(e) == "String" ? nE(e, "") : Yn(e);
} : Yn, Ol = function(e) {
  return e == null;
}, iE = Ol, aE = TypeError, vl = function(e) {
  if (iE(e))
    throw aE("Can't call method on " + e);
  return e;
}, sE = oE, uE = vl, lt = function(e) {
  return sE(uE(e));
}, Ot = function(e) {
  return e && e.Math == Math && e;
}, de = (
  // eslint-disable-next-line es/no-global-this -- safe
  Ot(typeof globalThis == "object" && globalThis) || Ot(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  Ot(typeof self == "object" && self) || Ot(typeof Kn == "object" && Kn) || // eslint-disable-next-line no-new-func -- fallback
  function() {
    return this;
  }() || Kn || Function("return this")()
), zi = { exports: {} }, ks = de, cE = Object.defineProperty, $i = function(e, r) {
  try {
    cE(ks, e, { value: r, configurable: !0, writable: !0 });
  } catch {
    ks[e] = r;
  }
  return r;
}, lE = de, fE = $i, Bs = "__core-js_shared__", dE = lE[Bs] || fE(Bs, {}), Qi = dE, xs = Qi;
(zi.exports = function(e, r) {
  return xs[e] || (xs[e] = r !== void 0 ? r : {});
})("versions", []).push({
  version: "3.30.2",
  mode: "global",
  copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var _E = vl, hE = Object, Rl = function(e) {
  return hE(_E(e));
}, pE = be, mE = Rl, EE = pE({}.hasOwnProperty), De = Object.hasOwn || function(r, t) {
  return EE(mE(r), t);
}, TE = be, OE = 0, vE = Math.random(), RE = TE(1 .toString), gl = function(e) {
  return "Symbol(" + (e === void 0 ? "" : e) + ")_" + RE(++OE + vE, 36);
}, gE = typeof navigator < "u" && String(navigator.userAgent) || "", bl = de, qn = gE, Fs = bl.process, js = bl.Deno, Vs = Fs && Fs.versions || js && js.version, Ws = Vs && Vs.v8, ce, Qt;
Ws && (ce = Ws.split("."), Qt = ce[0] > 0 && ce[0] < 4 ? 1 : +(ce[0] + ce[1]));
!Qt && qn && (ce = qn.match(/Edge\/(\d+)/), (!ce || ce[1] >= 74) && (ce = qn.match(/Chrome\/(\d+)/), ce && (Qt = +ce[1])));
var bE = Qt, Xs = bE, IE = ge, NE = de, yE = NE.String, Il = !!Object.getOwnPropertySymbols && !IE(function() {
  var e = Symbol();
  return !yE(e) || !(Object(e) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && Xs && Xs < 41;
}), AE = Il, Nl = AE && !Symbol.sham && typeof Symbol.iterator == "symbol", SE = de, DE = zi.exports, Ks = De, UE = gl, PE = Il, wE = Nl, hr = SE.Symbol, zn = DE("wks"), HE = wE ? hr.for || hr : hr && hr.withoutSetter || UE, Ur = function(e) {
  return Ks(zn, e) || (zn[e] = PE && Ks(hr, e) ? hr[e] : HE("Symbol." + e)), zn[e];
}, oi = typeof document == "object" && document.all, GE = typeof oi > "u" && oi !== void 0, yl = {
  all: oi,
  IS_HTMLDDA: GE
}, Al = yl, CE = Al.all, ee = Al.IS_HTMLDDA ? function(e) {
  return typeof e == "function" || e === CE;
} : function(e) {
  return typeof e == "function";
}, Ys = ee, Sl = yl, LE = Sl.all, Pr = Sl.IS_HTMLDDA ? function(e) {
  return typeof e == "object" ? e !== null : Ys(e) || e === LE;
} : function(e) {
  return typeof e == "object" ? e !== null : Ys(e);
}, ME = Pr, kE = String, BE = TypeError, ft = function(e) {
  if (ME(e))
    return e;
  throw BE(kE(e) + " is not an object");
}, Dl = {}, xE = ge, Ue = !xE(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
}), FE = Ue, jE = ge, Ul = FE && jE(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: !1
  }).prototype != 42;
}), Ye = {}, VE = de, qs = Pr, ii = VE.document, WE = qs(ii) && qs(ii.createElement), Ji = function(e) {
  return WE ? ii.createElement(e) : {};
}, XE = Ue, KE = ge, YE = Ji, Pl = !XE && !KE(function() {
  return Object.defineProperty(YE("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
}), qE = pl, vt = Function.prototype.call, vn = qE ? vt.bind(vt) : function() {
  return vt.apply(vt, arguments);
}, $n = de, zE = ee, $E = function(e) {
  return zE(e) ? e : void 0;
}, Zi = function(e, r) {
  return arguments.length < 2 ? $E($n[e]) : $n[e] && $n[e][r];
}, QE = be, JE = QE({}.isPrototypeOf), ZE = Zi, eT = ee, rT = JE, tT = Nl, nT = Object, wl = tT ? function(e) {
  return typeof e == "symbol";
} : function(e) {
  var r = ZE("Symbol");
  return eT(r) && rT(r.prototype, nT(e));
}, oT = String, iT = function(e) {
  try {
    return oT(e);
  } catch {
    return "Object";
  }
}, aT = ee, sT = iT, uT = TypeError, Hl = function(e) {
  if (aT(e))
    return e;
  throw uT(sT(e) + " is not a function");
}, cT = Hl, lT = Ol, fT = function(e, r) {
  var t = e[r];
  return lT(t) ? void 0 : cT(t);
}, Qn = vn, Jn = ee, Zn = Pr, dT = TypeError, _T = function(e, r) {
  var t, n;
  if (r === "string" && Jn(t = e.toString) && !Zn(n = Qn(t, e)) || Jn(t = e.valueOf) && !Zn(n = Qn(t, e)) || r !== "string" && Jn(t = e.toString) && !Zn(n = Qn(t, e)))
    return n;
  throw dT("Can't convert object to primitive value");
}, hT = vn, zs = Pr, $s = wl, pT = fT, mT = _T, ET = Ur, TT = TypeError, OT = ET("toPrimitive"), vT = function(e, r) {
  if (!zs(e) || $s(e))
    return e;
  var t = pT(e, OT), n;
  if (t) {
    if (r === void 0 && (r = "default"), n = hT(t, e, r), !zs(n) || $s(n))
      return n;
    throw TT("Can't convert object to primitive value");
  }
  return r === void 0 && (r = "number"), mT(e, r);
}, RT = vT, gT = wl, Gl = function(e) {
  var r = RT(e, "string");
  return gT(r) ? r : r + "";
}, bT = Ue, IT = Pl, NT = Ul, Rt = ft, Qs = Gl, yT = TypeError, eo = Object.defineProperty, AT = Object.getOwnPropertyDescriptor, ro = "enumerable", to = "configurable", no = "writable";
Ye.f = bT ? NT ? function(r, t, n) {
  if (Rt(r), t = Qs(t), Rt(n), typeof r == "function" && t === "prototype" && "value" in n && no in n && !n[no]) {
    var o = AT(r, t);
    o && o[no] && (r[t] = n.value, n = {
      configurable: to in n ? n[to] : o[to],
      enumerable: ro in n ? n[ro] : o[ro],
      writable: !1
    });
  }
  return eo(r, t, n);
} : eo : function(r, t, n) {
  if (Rt(r), t = Qs(t), Rt(n), IT)
    try {
      return eo(r, t, n);
    } catch {
    }
  if ("get" in n || "set" in n)
    throw yT("Accessors not supported");
  return "value" in n && (r[t] = n.value), r;
};
var ST = Math.ceil, DT = Math.floor, UT = Math.trunc || function(r) {
  var t = +r;
  return (t > 0 ? DT : ST)(t);
}, PT = UT, Cl = function(e) {
  var r = +e;
  return r !== r || r === 0 ? 0 : PT(r);
}, wT = Cl, HT = Math.max, GT = Math.min, CT = function(e, r) {
  var t = wT(e);
  return t < 0 ? HT(t + r, 0) : GT(t, r);
}, LT = Cl, MT = Math.min, kT = function(e) {
  return e > 0 ? MT(LT(e), 9007199254740991) : 0;
}, BT = kT, xT = function(e) {
  return BT(e.length);
}, FT = lt, jT = CT, VT = xT, Js = function(e) {
  return function(r, t, n) {
    var o = FT(r), i = VT(o), a = jT(n, i), s;
    if (e && t != t) {
      for (; i > a; )
        if (s = o[a++], s != s)
          return !0;
    } else
      for (; i > a; a++)
        if ((e || a in o) && o[a] === t)
          return e || a || 0;
    return !e && -1;
  };
}, WT = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: Js(!0),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: Js(!1)
}, ea = {}, XT = be, oo = De, KT = lt, YT = WT.indexOf, qT = ea, Zs = XT([].push), Ll = function(e, r) {
  var t = KT(e), n = 0, o = [], i;
  for (i in t)
    !oo(qT, i) && oo(t, i) && Zs(o, i);
  for (; r.length > n; )
    oo(t, i = r[n++]) && (~YT(o, i) || Zs(o, i));
  return o;
}, ra = [
  "constructor",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toLocaleString",
  "toString",
  "valueOf"
], zT = Ll, $T = ra, QT = Object.keys || function(r) {
  return zT(r, $T);
}, JT = Ue, ZT = Ul, eO = Ye, rO = ft, tO = lt, nO = QT;
Dl.f = JT && !ZT ? Object.defineProperties : function(r, t) {
  rO(r);
  for (var n = tO(t), o = nO(t), i = o.length, a = 0, s; i > a; )
    eO.f(r, s = o[a++], n[s]);
  return r;
};
var oO = Zi, iO = oO("document", "documentElement"), aO = zi.exports, sO = gl, eu = aO("keys"), ta = function(e) {
  return eu[e] || (eu[e] = sO(e));
}, uO = ft, cO = Dl, ru = ra, lO = ea, fO = iO, dO = Ji, _O = ta, tu = ">", nu = "<", ai = "prototype", si = "script", Ml = _O("IE_PROTO"), io = function() {
}, kl = function(e) {
  return nu + si + tu + e + nu + "/" + si + tu;
}, ou = function(e) {
  e.write(kl("")), e.close();
  var r = e.parentWindow.Object;
  return e = null, r;
}, hO = function() {
  var e = dO("iframe"), r = "java" + si + ":", t;
  return e.style.display = "none", fO.appendChild(e), e.src = String(r), t = e.contentWindow.document, t.open(), t.write(kl("document.F=Object")), t.close(), t.F;
}, gt, xt = function() {
  try {
    gt = new ActiveXObject("htmlfile");
  } catch {
  }
  xt = typeof document < "u" ? document.domain && gt ? ou(gt) : hO() : ou(gt);
  for (var e = ru.length; e--; )
    delete xt[ai][ru[e]];
  return xt();
};
lO[Ml] = !0;
var Bl = Object.create || function(r, t) {
  var n;
  return r !== null ? (io[ai] = uO(r), n = new io(), io[ai] = null, n[Ml] = r) : n = xt(), t === void 0 ? n : cO.f(n, t);
}, pO = Ur, mO = Bl, EO = Ye.f, ui = pO("unscopables"), ci = Array.prototype;
ci[ui] == null && EO(ci, ui, {
  configurable: !0,
  value: mO(null)
});
var TO = function(e) {
  ci[ui][e] = !0;
}, na = {}, OO = de, vO = ee, iu = OO.WeakMap, RO = vO(iu) && /native code/.test(String(iu)), oa = function(e, r) {
  return {
    enumerable: !(e & 1),
    configurable: !(e & 2),
    writable: !(e & 4),
    value: r
  };
}, gO = Ue, bO = Ye, IO = oa, Rn = gO ? function(e, r, t) {
  return bO.f(e, r, IO(1, t));
} : function(e, r, t) {
  return e[r] = t, e;
}, NO = RO, xl = de, yO = Pr, AO = Rn, ao = De, so = Qi, SO = ta, DO = ea, au = "Object already initialized", li = xl.TypeError, UO = xl.WeakMap, Jt, nt, Zt, PO = function(e) {
  return Zt(e) ? nt(e) : Jt(e, {});
}, wO = function(e) {
  return function(r) {
    var t;
    if (!yO(r) || (t = nt(r)).type !== e)
      throw li("Incompatible receiver, " + e + " required");
    return t;
  };
};
if (NO || so.state) {
  var me = so.state || (so.state = new UO());
  me.get = me.get, me.has = me.has, me.set = me.set, Jt = function(e, r) {
    if (me.has(e))
      throw li(au);
    return r.facade = e, me.set(e, r), r;
  }, nt = function(e) {
    return me.get(e) || {};
  }, Zt = function(e) {
    return me.has(e);
  };
} else {
  var ur = SO("state");
  DO[ur] = !0, Jt = function(e, r) {
    if (ao(e, ur))
      throw li(au);
    return r.facade = e, AO(e, ur, r), r;
  }, nt = function(e) {
    return ao(e, ur) ? e[ur] : {};
  }, Zt = function(e) {
    return ao(e, ur);
  };
}
var Fl = {
  set: Jt,
  get: nt,
  has: Zt,
  enforce: PO,
  getterFor: wO
}, ia = {}, jl = {}, Vl = {}.propertyIsEnumerable, Wl = Object.getOwnPropertyDescriptor, HO = Wl && !Vl.call({ 1: 2 }, 1);
jl.f = HO ? function(r) {
  var t = Wl(this, r);
  return !!t && t.enumerable;
} : Vl;
var GO = Ue, CO = vn, LO = jl, MO = oa, kO = lt, BO = Gl, xO = De, FO = Pl, su = Object.getOwnPropertyDescriptor;
ia.f = GO ? su : function(r, t) {
  if (r = kO(r), t = BO(t), FO)
    try {
      return su(r, t);
    } catch {
    }
  if (xO(r, t))
    return MO(!CO(LO.f, r, t), r[t]);
};
var Xl = { exports: {} }, fi = Ue, jO = De, Kl = Function.prototype, VO = fi && Object.getOwnPropertyDescriptor, aa = jO(Kl, "name"), WO = aa && (function() {
}).name === "something", XO = aa && (!fi || fi && VO(Kl, "name").configurable), Yl = {
  EXISTS: aa,
  PROPER: WO,
  CONFIGURABLE: XO
}, KO = be, YO = ee, di = Qi, qO = KO(Function.toString);
YO(di.inspectSource) || (di.inspectSource = function(e) {
  return qO(e);
});
var zO = di.inspectSource, sa = be, $O = ge, QO = ee, bt = De, _i = Ue, JO = Yl.CONFIGURABLE, ZO = zO, ql = Fl, ev = ql.enforce, rv = ql.get, uu = String, Ft = Object.defineProperty, tv = sa("".slice), nv = sa("".replace), ov = sa([].join), iv = _i && !$O(function() {
  return Ft(function() {
  }, "length", { value: 8 }).length !== 8;
}), av = String(String).split("String"), sv = Xl.exports = function(e, r, t) {
  tv(uu(r), 0, 7) === "Symbol(" && (r = "[" + nv(uu(r), /^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (r = "get " + r), t && t.setter && (r = "set " + r), (!bt(e, "name") || JO && e.name !== r) && (_i ? Ft(e, "name", { value: r, configurable: !0 }) : e.name = r), iv && t && bt(t, "arity") && e.length !== t.arity && Ft(e, "length", { value: t.arity });
  try {
    t && bt(t, "constructor") && t.constructor ? _i && Ft(e, "prototype", { writable: !1 }) : e.prototype && (e.prototype = void 0);
  } catch {
  }
  var n = ev(e);
  return bt(n, "source") || (n.source = ov(av, typeof r == "string" ? r : "")), e;
};
Function.prototype.toString = sv(function() {
  return QO(this) && rv(this).source || ZO(this);
}, "toString");
var uv = ee, cv = Ye, lv = Xl.exports, fv = $i, ua = function(e, r, t, n) {
  n || (n = {});
  var o = n.enumerable, i = n.name !== void 0 ? n.name : r;
  if (uv(t) && lv(t, i, n), n.global)
    o ? e[r] = t : fv(r, t);
  else {
    try {
      n.unsafe ? e[r] && (o = !0) : delete e[r];
    } catch {
    }
    o ? e[r] = t : cv.f(e, r, {
      value: t,
      enumerable: !1,
      configurable: !n.nonConfigurable,
      writable: !n.nonWritable
    });
  }
  return e;
}, zl = {}, dv = Ll, _v = ra, hv = _v.concat("length", "prototype");
zl.f = Object.getOwnPropertyNames || function(r) {
  return dv(r, hv);
};
var $l = {};
$l.f = Object.getOwnPropertySymbols;
var pv = Zi, mv = be, Ev = zl, Tv = $l, Ov = ft, vv = mv([].concat), Rv = pv("Reflect", "ownKeys") || function(r) {
  var t = Ev.f(Ov(r)), n = Tv.f;
  return n ? vv(t, n(r)) : t;
}, cu = De, gv = Rv, bv = ia, Iv = Ye, Nv = function(e, r, t) {
  for (var n = gv(r), o = Iv.f, i = bv.f, a = 0; a < n.length; a++) {
    var s = n[a];
    !cu(e, s) && !(t && cu(t, s)) && o(e, s, i(r, s));
  }
}, yv = ge, Av = ee, Sv = /#|\.prototype\./, dt = function(e, r) {
  var t = Uv[Dv(e)];
  return t == wv ? !0 : t == Pv ? !1 : Av(r) ? yv(r) : !!r;
}, Dv = dt.normalize = function(e) {
  return String(e).replace(Sv, ".").toLowerCase();
}, Uv = dt.data = {}, Pv = dt.NATIVE = "N", wv = dt.POLYFILL = "P", Hv = dt, uo = de, Gv = ia.f, Cv = Rn, Lv = ua, Mv = $i, kv = Nv, Bv = Hv, xv = function(e, r) {
  var t = e.target, n = e.global, o = e.stat, i, a, s, u, c, l;
  if (n ? a = uo : o ? a = uo[t] || Mv(t, {}) : a = (uo[t] || {}).prototype, a)
    for (s in r) {
      if (c = r[s], e.dontCallGetSet ? (l = Gv(a, s), u = l && l.value) : u = a[s], i = Bv(n ? s : t + (o ? "." : "#") + s, e.forced), !i && u !== void 0) {
        if (typeof c == typeof u)
          continue;
        kv(c, u);
      }
      (e.sham || u && u.sham) && Cv(c, "sham", !0), Lv(a, s, c, e);
    }
}, Fv = ge, jv = !Fv(function() {
  function e() {
  }
  return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
}), Vv = De, Wv = ee, Xv = Rl, Kv = ta, Yv = jv, lu = Kv("IE_PROTO"), hi = Object, qv = hi.prototype, Ql = Yv ? hi.getPrototypeOf : function(e) {
  var r = Xv(e);
  if (Vv(r, lu))
    return r[lu];
  var t = r.constructor;
  return Wv(t) && r instanceof t ? t.prototype : r instanceof hi ? qv : null;
}, zv = ge, $v = ee, Qv = Pr, fu = Ql, Jv = ua, Zv = Ur, pi = Zv("iterator"), Jl = !1, nr, co, lo;
[].keys && (lo = [].keys(), "next" in lo ? (co = fu(fu(lo)), co !== Object.prototype && (nr = co)) : Jl = !0);
var eR = !Qv(nr) || zv(function() {
  var e = {};
  return nr[pi].call(e) !== e;
});
eR && (nr = {});
$v(nr[pi]) || Jv(nr, pi, function() {
  return this;
});
var Zl = {
  IteratorPrototype: nr,
  BUGGY_SAFARI_ITERATORS: Jl
}, rR = Ye.f, tR = De, nR = Ur, du = nR("toStringTag"), ef = function(e, r, t) {
  e && !t && (e = e.prototype), e && !tR(e, du) && rR(e, du, { configurable: !0, value: r });
}, oR = Zl.IteratorPrototype, iR = Bl, aR = oa, sR = ef, uR = na, cR = function() {
  return this;
}, lR = function(e, r, t, n) {
  var o = r + " Iterator";
  return e.prototype = iR(oR, { next: aR(+!n, t) }), sR(e, o, !1), uR[o] = cR, e;
}, fR = be, dR = Hl, _R = function(e, r, t) {
  try {
    return fR(dR(Object.getOwnPropertyDescriptor(e, r)[t]));
  } catch {
  }
}, hR = ee, pR = String, mR = TypeError, ER = function(e) {
  if (typeof e == "object" || hR(e))
    return e;
  throw mR("Can't set " + pR(e) + " as a prototype");
}, TR = _R, OR = ft, vR = ER, RR = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var e = !1, r = {}, t;
  try {
    t = TR(Object.prototype, "__proto__", "set"), t(r, []), e = r instanceof Array;
  } catch {
  }
  return function(o, i) {
    return OR(o), vR(i), e ? t(o, i) : o.__proto__ = i, o;
  };
}() : void 0), gR = xv, bR = vn, rf = Yl, IR = ee, NR = lR, _u = Ql, hu = RR, yR = ef, AR = Rn, fo = ua, SR = Ur, DR = na, tf = Zl, UR = rf.PROPER, PR = rf.CONFIGURABLE, pu = tf.IteratorPrototype, It = tf.BUGGY_SAFARI_ITERATORS, jr = SR("iterator"), mu = "keys", Vr = "values", Eu = "entries", wR = function() {
  return this;
}, HR = function(e, r, t, n, o, i, a) {
  NR(t, r, n);
  var s = function(p) {
    if (p === o && d)
      return d;
    if (!It && p in l)
      return l[p];
    switch (p) {
      case mu:
        return function() {
          return new t(this, p);
        };
      case Vr:
        return function() {
          return new t(this, p);
        };
      case Eu:
        return function() {
          return new t(this, p);
        };
    }
    return function() {
      return new t(this);
    };
  }, u = r + " Iterator", c = !1, l = e.prototype, f = l[jr] || l["@@iterator"] || o && l[o], d = !It && f || s(o), _ = r == "Array" && l.entries || f, h, m, T;
  if (_ && (h = _u(_.call(new e())), h !== Object.prototype && h.next && (_u(h) !== pu && (hu ? hu(h, pu) : IR(h[jr]) || fo(h, jr, wR)), yR(h, u, !0))), UR && o == Vr && f && f.name !== Vr && (PR ? AR(l, "name", Vr) : (c = !0, d = function() {
    return bR(f, this);
  })), o)
    if (m = {
      values: s(Vr),
      keys: i ? d : s(mu),
      entries: s(Eu)
    }, a)
      for (T in m)
        (It || c || !(T in l)) && fo(l, T, m[T]);
    else
      gR({ target: r, proto: !0, forced: It || c }, m);
  return l[jr] !== d && fo(l, jr, d, { name: o }), DR[r] = d, m;
}, GR = function(e, r) {
  return { value: e, done: r };
}, CR = lt, ca = TO, Tu = na, nf = Fl, LR = Ye.f, MR = HR, Nt = GR, kR = Ue, of = "Array Iterator", BR = nf.set, xR = nf.getterFor(of), FR = MR(Array, "Array", function(e, r) {
  BR(this, {
    type: of,
    target: CR(e),
    // target
    index: 0,
    // next index
    kind: r
    // kind
  });
}, function() {
  var e = xR(this), r = e.target, t = e.kind, n = e.index++;
  return !r || n >= r.length ? (e.target = void 0, Nt(void 0, !0)) : t == "keys" ? Nt(n, !1) : t == "values" ? Nt(r[n], !1) : Nt([n, r[n]], !1);
}, "values"), Ou = Tu.Arguments = Tu.Array;
ca("keys");
ca("values");
ca("entries");
if (kR && Ou.name !== "values")
  try {
    LR(Ou, "name", { value: "values" });
  } catch {
  }
var jR = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
}, VR = Ji, _o = VR("span").classList, vu = _o && _o.constructor && _o.constructor.prototype, WR = vu === Object.prototype ? void 0 : vu, Ru = de, af = jR, XR = WR, Xr = FR, ho = Rn, sf = Ur, po = sf("iterator"), gu = sf("toStringTag"), mo = Xr.values, uf = function(e, r) {
  if (e) {
    if (e[po] !== mo)
      try {
        ho(e, po, mo);
      } catch {
        e[po] = mo;
      }
    if (e[gu] || ho(e, gu, r), af[r]) {
      for (var t in Xr)
        if (e[t] !== Xr[t])
          try {
            ho(e, t, Xr[t]);
          } catch {
            e[t] = Xr[t];
          }
    }
  }
};
for (var Eo in af)
  uf(Ru[Eo] && Ru[Eo].prototype, Eo);
uf(XR, "DOMTokenList");
const Ig = () => {
  const [e, r] = yu([]);
  return {
    on: (t) => {
      Object.entries(t).forEach(([n, o]) => {
        const i = (a) => {
          if (a.altKey && a.key === n.toLowerCase())
            return a.preventDefault(), o(), !1;
        };
        r([...e, i]), document.addEventListener("keydown", i);
      });
    },
    clear: () => {
      e.forEach((t) => {
        document.removeEventListener("keydown", t);
      });
    }
  };
}, Ng = (e, r = []) => {
  en(() => {
    e();
  }, r);
}, KR = (e = !1) => {
  const [r, t] = yu(e);
  return {
    off: () => t(!1),
    on: () => t(!0),
    toggle: () => t(!r),
    val: r
  };
}, yg = (e, r) => {
  const t = To();
  return (...n) => {
    t.current && clearTimeout(t.current), t.current = setTimeout(() => {
      e(...n);
    }, r);
  };
}, Ag = (e, r) => {
  en(() => {
    for (const t of r)
      if (!t)
        return;
    return e();
  }, r);
}, Sg = () => () => {
  if (!document.fullscreenElement)
    return document.documentElement.requestFullscreen();
  document.exitFullscreen && document.exitFullscreen();
}, Dg = () => {
  en(() => (document.body.style.overflow = "hidden", () => {
    document.body.style.overflow = "auto";
  }));
};
class Ug {
  async request(r, t, n = "query") {
    var a;
    const o = {
      variables: t ? {
        payload: t
      } : void 0
    };
    let i;
    try {
      return n === "mutate" ? i = await ss.mutate({
        mutation: r.gql,
        ...o
      }) : i = await ss.query({
        query: r.gql,
        ...o
      }), [(a = i == null ? void 0 : i.data) == null ? void 0 : a[r.method], null];
    } catch (s) {
      return [null, s];
    }
  }
}
var cf = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, bu = Q.createContext && Q.createContext(cf), xe = globalThis && globalThis.__assign || function() {
  return xe = Object.assign || function(e) {
    for (var r, t = 1, n = arguments.length; t < n; t++) {
      r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, xe.apply(this, arguments);
}, YR = globalThis && globalThis.__rest || function(e, r) {
  var t = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]]);
  return t;
};
function lf(e) {
  return e && e.map(function(r, t) {
    return Q.createElement(r.tag, xe({
      key: t
    }, r.attr), lf(r.child));
  });
}
function re(e) {
  return function(r) {
    return Q.createElement(qR, xe({
      attr: xe({}, e.attr)
    }, r), lf(e.child));
  };
}
function qR(e) {
  var r = function(t) {
    var n = e.attr, o = e.size, i = e.title, a = YR(e, ["attr", "size", "title"]), s = o || t.size || "1em", u;
    return t.className && (u = t.className), e.className && (u = (u ? u + " " : "") + e.className), Q.createElement("svg", xe({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, t.attr, n, a, {
      className: u,
      style: xe(xe({
        color: e.color || t.color
      }, t.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), i && Q.createElement("title", null, i), e.children);
  };
  return bu !== void 0 ? Q.createElement(bu.Consumer, null, function(t) {
    return r(t);
  }) : r(cf);
}
function zR(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 1024 1024", fill: "currentColor", fillRule: "evenodd" }, child: [{ tag: "path", attr: { d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z" } }] })(e);
}
function $R(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M145 96l66 746.6L511.8 928l299.6-85.4L878.7 96H145zm610.9 700.6l-244.1 69.6-245.2-69.6-56.7-641.2h603.8l-57.8 641.2zM281 249l1.7 24.3 22.7 253.5h206.5v-.1h112.9l-11.4 118.5L511 672.9v.2h-.8l-102.4-27.7-6.5-73.2h-91l11.3 144.7 188.6 52h1.7v-.4l187.7-51.7 1.7-16.3 21.2-242.2 3.2-24.3H511v.2H389.9l-8.2-94.2h352.1l1.7-19.5 4.8-47.2L742 249H511z" } }] })(e);
}
function QR(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }, { tag: "path", attr: { d: "M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" } }] })(e);
}
function JR(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] })(e);
}
function ZR(e) {
  return re({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" } }, { tag: "path", attr: { d: "M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" } }] })(e);
}
function eg(e) {
  return re({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" } }] })(e);
}
function rg(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { d: "M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z" } }, { tag: "path", attr: { d: "M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z" } }] })(e);
}
function tg(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", stroke: "#000", strokeWidth: "2", d: "M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M5,5 L19,19" } }] })(e);
}
function ng(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3" } }, { tag: "path", attr: { d: "m16 2 6 6" } }, { tag: "path", attr: { d: "M12 16H4" } }] })(e);
}
function og(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } }, { tag: "path", attr: { d: "M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05A6.976 6.976 0 0011 4c-3.53 0-6.43 2.61-6.92 6H6.1A5 5 0 0111 6zm5.64 9.14A6.89 6.89 0 0017.92 12H15.9a5 5 0 01-4.9 4c-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05A6.976 6.976 0 0011 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z" } }] })(e);
}
function ig(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M576 736l-32-.001v-286c0-.336-.096-.656-.096-1.008s.096-.655.096-.991c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32s14.336 32 32 32h32v256h-32c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32zm-64-384.001c35.344 0 64-28.656 64-64s-28.656-64-64-64-64 28.656-64 64 28.656 64 64 64zm0-352c-282.768 0-512 229.232-512 512 0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512 0-282.768-229.216-512-512-512zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01z" } }] })(e);
}
function ag(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M685.904 383.184l275.264-273.572-.896 155.072c-.289 12.928 9.967 24.176 22.912 23.888l16.416-.016c12.944-.304 23.648-8 23.92-20.928l.672-231.008c0-.223-.88-.399-.88-.623l1.264-11.712c.128-6.496-1.391-12.288-5.584-16.431-4.143-4.176-9.951-6.72-16.4-6.544l-11.696.272c-.223 0-.399.08-.64.113L760.77.687c-12.928.288-23.632 10.976-23.92 23.92l-.032 16.417c1.967 15.248 13.952 24.16 26.88 23.872l151.248.4L640.657 337.92c-12.496 12.496-12.496 32.752 0 45.264 12.496 12.48 32.752 12.48 45.247 0zM339.088 640.812L63.825 913.532l.88-154.224c.304-12.944-9.969-24.192-22.897-23.904l-17.423.032c-12.96.32-23.649 8-23.921 20.944l-.672 231.008c0 .224.88.367.88.623l-1.264 11.68c-.144 6.496 1.376 12.32 5.584 16.433 4.128 4.192 9.952 6.72 16.384 6.56l11.712-.288c.223 0 .383-.096.64-.096l230.495 1.008c12.928-.32 23.617-11.009 23.92-23.936l.032-16.432c-1.967-15.216-13.952-24.16-26.88-23.872l-151.247-.4L384.32 686.076c12.496-12.497 12.496-32.752 0-45.248s-32.737-12.512-45.233-.016zm685.122 346.56l-.672-231.01c-.288-12.944-10.992-20.624-23.92-20.944l-16.416-.032c-12.944-.289-23.184 10.975-22.912 23.903l.896 155.072-275.28-273.552c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248L914.93 958.649l-151.232.4c-12.928-.288-24.912 8.657-26.88 23.872l.032 16.432c.304 12.944 11.008 23.633 23.92 23.936l229.504-1.007c.24 0 .416.095.64.095l11.696.288c6.448.16 12.272-2.368 16.4-6.56 4.193-4.128 5.696-9.936 5.584-16.432l-1.263-11.68c0-.255.88-.399.88-.622zM110.049 65.321l151.264-.397c12.928.288 24.912-8.64 26.88-23.873l-.032-16.431C287.84 11.677 277.15.972 264.24.7l-230.512.992c-.256-.032-.416-.112-.64-.112l-11.712-.273C14.945 1.132 9.105 3.676 4.992 7.851.784 11.995-.735 17.787-.592 24.283L.672 35.995c0 .223-.88.384-.88.624l.672 231.008c.288 12.928 10.977 20.624 23.921 20.928l17.424.015c12.928.288 23.183-10.96 22.895-23.888l-.88-154.224 275.264 272.72c12.48 12.497 32.753 12.497 45.25 0s12.496-32.768 0-45.264z" } }] })(e);
}
function sg(e) {
  return re({ tag: "svg", attr: { version: "1.1", viewBox: "0 0 17 17" }, child: [{ tag: "g", attr: {}, child: [] }, { tag: "path", attr: { d: "M8.5 5.972c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5zM8.5 9.972c-0.827 0-1.5-0.673-1.5-1.5s0.673-1.5 1.5-1.5 1.5 0.673 1.5 1.5-0.673 1.5-1.5 1.5zM16.94 9.446c0.037-0.321 0.060-0.645 0.060-0.974s-0.023-0.653-0.060-0.974l-2.588-0.778c-0.119-0.402-0.278-0.787-0.474-1.149l1.279-2.377c-0.406-0.51-0.869-0.973-1.38-1.38l-2.377 1.28c-0.363-0.196-0.748-0.354-1.15-0.474l-0.776-2.588c-0.32-0.037-0.644-0.060-0.974-0.060s-0.654 0.023-0.974 0.060l-0.776 2.588c-0.403 0.119-0.789 0.278-1.15 0.475l-2.377-1.28c-0.511 0.406-0.974 0.869-1.379 1.38l1.279 2.375c-0.196 0.362-0.354 0.748-0.474 1.15l-2.589 0.778c-0.037 0.32-0.060 0.644-0.060 0.974s0.023 0.654 0.060 0.974l2.588 0.776c0.12 0.403 0.278 0.789 0.474 1.151l-1.279 2.376c0.406 0.511 0.869 0.974 1.38 1.38l2.377-1.279c0.362 0.196 0.748 0.354 1.15 0.474l0.776 2.588c0.321 0.037 0.645 0.060 0.974 0.060s0.654-0.023 0.974-0.060l0.776-2.588c0.402-0.12 0.788-0.278 1.15-0.474l2.376 1.279c0.511-0.407 0.974-0.87 1.38-1.381l-1.278-2.376c0.196-0.362 0.354-0.748 0.474-1.15l2.588-0.776zM13.548 9.419l-0.154 0.518c-0.1 0.337-0.233 0.66-0.396 0.959l-0.256 0.475 0.255 0.475 0.952 1.77c-0.099 0.105-0.201 0.207-0.306 0.306l-2.243-1.209-0.475 0.256c-0.301 0.163-0.624 0.295-0.96 0.396l-0.518 0.154-0.155 0.518-0.579 1.932c-0.072 0.002-0.143 0.003-0.213 0.003s-0.141-0.001-0.213-0.003l-0.579-1.932-0.155-0.518-0.518-0.154c-0.336-0.1-0.659-0.233-0.959-0.396l-0.475-0.256-2.245 1.207c-0.104-0.099-0.207-0.201-0.306-0.306l1.208-2.244-0.256-0.475c-0.162-0.3-0.295-0.623-0.396-0.96l-0.153-0.517-2.449-0.734c-0.003-0.072-0.004-0.143-0.004-0.212 0-0.070 0.001-0.141 0.004-0.213l2.448-0.734 0.154-0.518c0.1-0.337 0.233-0.66 0.396-0.959l0.256-0.475-1.208-2.245c0.099-0.104 0.201-0.207 0.305-0.306l2.247 1.21 0.476-0.259c0.297-0.162 0.619-0.295 0.956-0.395l0.518-0.154 0.155-0.518 0.579-1.932c0.073-0.001 0.144-0.002 0.214-0.002s0.141 0.001 0.213 0.003l0.579 1.932 0.155 0.518 0.518 0.154c0.335 0.1 0.659 0.233 0.96 0.396l0.475 0.255 2.244-1.208c0.104 0.099 0.207 0.201 0.306 0.306l-0.953 1.77-0.255 0.475 0.257 0.475c0.163 0.3 0.295 0.622 0.395 0.957l0.154 0.518 0.518 0.155 1.932 0.581c0.001 0.072 0.002 0.143 0.002 0.213s-0.001 0.141-0.004 0.213l-2.448 0.734z" } }] })(e);
}
function ug(e) {
  return re({ tag: "svg", attr: { viewBox: "0 0 16 16", fill: "currentColor" }, child: [{ tag: "path", attr: { d: "M3.78 2L3 2.41v12l.78.42 9-6V8l-9-6zM4 13.48V3.35l7.6 5.07L4 13.48z" } }] })(e);
}
const Pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AiOutlineClose: zR,
  AiOutlineHtml5: $R,
  AiOutlineInfoCircle: QR,
  AiOutlineSwap: JR,
  BsJournals: ZR,
  BsSearch: eg,
  GoTerminal: rg,
  GrClear: tg,
  LuTestTube2: ng,
  MdFindReplace: og,
  SlInfo: ig,
  SlSizeFullscreen: ag,
  TfiSettings: sg,
  VscPlay: ug
}, Symbol.toStringTag, { value: "Module" })), wg = (e) => /* @__PURE__ */ fe(Ip, { children: e() }), Hg = (e) => /* @__PURE__ */ Ei(Ti, { children: [
  e(),
  /* @__PURE__ */ fe(Km, {})
] }), Gg = (e) => /* @__PURE__ */ fe(qm, { children: e() }), Cg = (e) => (r = {}, t = []) => ({
  args: {
    ...e,
    ...r
  },
  decorators: t
});
export {
  wg as AnimationDecorator,
  Ip as AnimationProvider,
  Ym as AntdConfig,
  Ug as ApolloMiddleware,
  dg as Assets,
  $e as DarkThemePalette,
  gp as Display,
  vg as ErrorBoundary,
  Km as GlobalStyles,
  Pg as Icons,
  Q_ as LocalStorage,
  Z_ as LocalStorageClient,
  Xc as NotificationsContext,
  Rg as NotificationsProvider,
  Tg as PrivatePaths,
  Rp as RoutePaths,
  Hg as StylesDecorator,
  Gg as ThemeDecorator,
  qm as ThemeProvider,
  ss as apolloClient,
  Cg as createStorybookVariant,
  Eg as httpService,
  mg as isFunction,
  pg as isNumber,
  hg as isObject,
  J_ as isString,
  gg as s,
  Ig as useAltKeyDown,
  Og as useAnimations,
  Ng as useAsyncEffect,
  KR as useBooleanState,
  yg as useDebounce,
  Ag as useFilteredEffect,
  Sg as useFullScreen,
  bg as useNotifications,
  Dg as useOverflow
};
