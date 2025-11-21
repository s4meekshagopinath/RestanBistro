import Navbar from "../components/Navbar";

export default function Home() {
  const items = [
    {
      id: 1,
      name: "Truffle Pasta",
      price: 699,
      image:
        "https://www.sprinklesandsprouts.com/wp-content/uploads/2018/11/Black-Truffle-Pasta3.jpg",
      desc: "Creamy truffle tagliatelle.",
    },
    {
      id: 2,
      name: "Herb Chicken",
      price: 549,
      image:
        "https://www.allrecipes.com/thmb/-UKM4NTWBZnLnkeOCh7ESmeTOcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-Lemon-Herb-Chicken-2000-610e2f2a1e9a4ba292d775e72f3dc888.jpg",
      desc: "Roasted chicken with fresh herbs.",
    },
    {
      id: 3,
      name: "Fresh Mojito",
      price: 199,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/20191031-mojitos-three-ways-delish-ehg-2887-1584029660.jpg",
      desc: "Lime, mint and soda.",
    },
    {
      id: 4,
      name: "BBQ Smash Burger",
      price: 349,
      image:
        "https://www.licious.in/blog/wp-content/uploads/2022/08/shutterstock_574607542.jpg",
      desc: "Smashed chicken patty, cheddar, onion tanglers, and smoky BBQ sauce.",
    },
    {
      id: 5,
      name: "Caesar Salad",
      price: 299,
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFxsYFxgYGBgbFxgaIBcaGhsYGBoaHSggGRolHxoXITEhJSkrLi4uFyAzODMtNygtLisBCgoKDg0OGhAQGy8lHyYtLS0tLS8tLS0tLS0vLS0tLS0tLS0vLS0tLy0tLS0tLy0tLy0tLS0tLS8tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABEEAACAQIEAwUFBQcDAwIHAAABAhEAAwQSITEFQVEGImFx8BOBkaGxBzJCwdEUI1JiguHxQ3KSJDPCFeI0Y3ODorLS/8QAGgEAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EAC8RAAIBBAIBAwMDAgcAAAAAAAABAgMRITEEEkEiUfATYYEykcEFsRRCcaHR4fH/2gAMAwEAAhEDEQA/AMbaiKXlnemkYbc6droxdziOmk7oWFnTQCmThTuIp67todabtIQZ6aiPypyJpS+43bsevnSbkD0YFOG/pGm/vpm4ZFC0rGwlK+RhrmtGuII8qRctxTNL8lOGiYl8TB0p7MBvpttz8qrGQnwpxr7c/jRqbFOknom3cUc2m1M+08xPjVrwTsxisVBtWiVP427qf8jv7prbcK+yVdDir7N/JaEL5Fmkn3AUudeMdsdS4kp6WDmbXkiF368qRawF+8f3dq7cn+FGP0FegeF9jsDh49nhrcj8TDO3/JpNXigDQaDwqeXL9kWQ4KjtnnbC9h+ItBXCXP6iq/8A7MKlr9mfEj/oqPO4n5GvQE0c0p8iTKFxoI8+n7L+Jj/RQ/8A3F/Oq7EfZ7xNTJwjn/ayN9GmvSc0c0P1pBfRieU8dwfE2Z9ph71vxa24HxIioK3J5ivXRg1T8V7J4LET7XDWnP8AFlAb/ksGiVb3QLoezPL+aiBrtPG/sZsNJw157J5K/fT46MPia5z2i7C47ByblkvbH+pb7y++NV94pkaiYqVJooQOdJmmlM89KdDaUwTawTPpR4a/lIbeDNEKQ2lZdhWTVi8t4vMAcqz4fn40esan9d+dU1q9FTbGKBPv1B5/E0fdsn+iovCJatBPIdaYxF3POiwDAPPYHWdIqJjcQB46gmPlBMj/ABRYbE7hAzk9QAupBMaaH5UNxyi7XJeBuJJGne2AJ5TrO07dKYvs87wCTGusdT10pVtTmJA5nu/ST0pGIwgIGjA8h1JknMdaYr2F2ipX9x4DoungdPqKFIQmNFHun8hRVoFn8/8AS0tvsJ1mdtaO5iZOXYjpz+O3uqGwMgBm8ydz9P8AFSLSd4NuY101P60auKbtklvqBMg0sXQg6zOtLV9O8PColxwHmJj1pTXgki7sO8mkj3+FMWHiTv50/exAbnHuqNctnlrSpvOCilH052PW1zT749dKRYwg1JO+2nzNKtXMsAgR1/WeVb3sl2NfERevSlkgZR+K4PCfup48+XWvOUYx7TPKE5y600Y/hHZrEYl8llJjdj9wf7m5eW/hXUOzP2b4bDw9/wD6i7/MP3a+S8/NvgK1uDwqWkFu0gRRsBoP8+NP+v7Vz6vIcn6cI7NDiKC9WWGu0DQUc0mfX5+6j9frU5Ww6j2sajMVBB6EbEf2OlO3bmVS2vdE6bmBPzFcZwnHbn7W7e0IVrh7hbbMxJjQSsz5aUirWVNoC6WztgPr3UB+lZfgnHCWCOemh3EiRVhiu0mGtkqbqSN+8NNedMjUjJXTD6N6Ln9B9aE+vfVCeOKRmVwRE6azudOtZ7F8YLgG2XZmEFT3crEgbrrA1M+VKrciNK1zygdAn18qNgKwH/q7239kHJadRmzR5H6DenMb2h/eC2DsAW894+nxoI82m5dfJvQ3cmmb19csyNduYP8Aas/Z41ktwx7zAldR0kxPQD5Vl+znFQb6oWAD5iJMCASfcYBravKUJxjbf+wNs2LntP8AZzhMYC6r7C6dc9sd0n+ddj8jXGe1HZDFYF/3yTbJ7t1dUP8A/J8D869IWsag0DD8v8U9fsW7yFGVXRhBUgFSKuhVaFTpKR5ILAURM10/7QfsvayGxGCBa2NXtbsninNl8N65cGqmM1ImlBxDDabURuHfn9KUpmjy/CtBukC2+hB159dvyp/DKyHTXmNiPMehTaW4/vtTpAYRqGHwNEgZElro3c6gaiI3jlNHhcSD3dJGnQSenUmmbeQhlZidIBI0M+MTI6VCsqVcZhIUxCkGCOfWNN6Z3asLVNSTLS2SRIUgeOh8dJoVFxC2gx+5711+tCtu/jM+nfP8FphLbNoNAB1knzMxM1YWsOFIl58zFCxGTqOuo+RGtGXAMDmOgp8VY5lSTk7Ica4QIHWot8HwqRudKbxI6mOWn50b0LhhkU2RG4n8qcDdDrFKtNAEDSTrz/tW27A9khfYYq+s20PcXlcYbk9UHzOnIilVJRhHsVUqcqsuiJXYbsMGy4nFAkb27bcxyZx06Dnua6VM0kmaE+vWxrk1Kjm7s+go0Y0o9UKn11/vRT6/PzovXrxpvFXMqM/8KlifIEz5+FLbsNIuH41ZuBjbdWKNlddmUyRqDqAY32qxttIB6+hXCsJjEtlnV3W+CPZZdRcnSHBEZQdT1zdRW74X26TJkePaqcpMyjaAyrD72508KnpV1JZ2Cncve2vFfYWJCF8xIOh0AUt5bgDU7ExrXH+IYxGjEpAL3AMvJOYYn8M6n3GK6Fx/ijYuwbIIT2jKoYZiRLCdtYy5p02muSY0Oxa0DnNu4R3c0PrlzQdZkbxJzHpSqsVOdzJRNtwmw4Y4i+5IdEcHUMZQNMgxl72XxK8ubON7Q2kORbZJPOFVY0mZMkidR40zhcG9iybSk3CCWE9SqjRZPd7pj+9YvGjOWdWAAIgSxLHQGCfjr7ulRU6cK02748HXoTjToLpvyabCY2b4tW7ot27wJYEaIcpJKmZgkRptNLxGNFv95q2aQkD8IlY1GjE/Wsz2cM4oLcuBEKsuciQOXn/n3jXcJslbuFRgl1CxFtxK6AzmIPMEhtaZyIdbJ5x/yc7kT7TbRanHNbVC05VJJMA+zuEaW80SQIkSedZq12kNy+11iBrB8ojWecDenOMcWzJcRH/di4WUTMk6a8ogE1mE0kBdCdY3PPffeg49HHaWxKnY2w42b90GVChWUZyFADfiXTczpH0qcuGCG291QGbcrJA2Kyp2OpGnw65nD4ce3S3c7qkxKgjUyIObUMrQD5GtbgWy2EGIYOPwKTGZgSZJ2OgUyetDybMxu7uXiY7LcgbGNJnXp4dY8a3HDlIRZOu5rC9luDtduG4xJUGc0zmJ10Pw8vfXQbaV0OHd01cNvCHVM771yX7Uvs4zhsXhE747120Bo3VkH8XhzrrUUYM+dWxbWgGk9nj5TTqtXTPth7DexY47DrFtj++Qfhb+MdAefx61y1YqqErolnCzH3aRp5UeHuQffSS0ePOkW7h05+VHfIu2C1DrETpuR79tRBn8qj4u0IUKugO+vTY/xfSmLLgGDotSQ4I25QNRtqKZfshPVxd0NJZyiCsHynx3oqk20BAMfKhRKJ51M5NRasgLyJjWRHwAqJftOCTyNWC3kW2d85kSfwgZYjxPeBkVWftRPdiYEydPhVLkmjkqEkxtlgjf9KavrJmBvvz2inM5bcEdDRnfr+dDsam08lx2W4C+JxC2RKp964w/Cg3I8TsPE1221aVFW2ihVUBVUbBRsKz/AGD4L+zYUMwi7eh36hfwJ7gZPixrRrtPX1vXL5NXvOy0ju8Kh9OF3thn10/saIH1+v60YpQWpywAHr1vUDtHfRcPczlgrDISoltdNPE7DzFT7twASdqr8ouElgCqw0HaQZX5gH3Uuq/S0eWTEcZ7AWmsoqOVurDOx/HvKrr3PvHbSQJqh4xhLDHK1nKR0lWEc5EGR1ro3F7jQGTcTnk90rAJMk/hEnxiKzPGsKMRZDI0FiCs/hMb5p1E6EDXmD15cpNPAKkl4M3isYq4d1zkMuVrbfiDA6QRtMjWrLs92bKYW42d89wBruo31YKoPIBtSTJI3A0rPcTQNaNwnIWmbcEiRoRuIUsDqNhHu29rFG9h7TWlZReSdtZBhvMBlI03HSk8ipNQw9uz/gK/Z3KVDct4i0AZ7ua4D4r+IHUbetqz/aXhXcOItKYZmLgaxrowA2XWr7tJxK2S91ic+YWBz2UExG5IPyNZ3iPFS1vJZPcDfdEMwlArExrlkaDbWhoRl2UorH9w4z6u6K7htse2DQMqID19/wBDU+5xY3TFt1DLbOUD7xVmllH8wGnIx86C0GJeSwE94qFEd4EgzpsT3R0HKnMFiFWHZFYKCFUDLqfxMyjl3TruYrozop5f4FVZd5dg8QS0ktPWevly91TeEWrdxXRzkuZgVIbQLzGU6t/ynSq7FXfaOTbtsAToJLsPDMAM3wqK9weY6EUXRtWAL9MO+cpBckF9OUDMX22GXXwBrZ8ExFjF3LakOUtASo/ExUHLm/5TAG3hXNLGLZT3SQYIBUmRIggxrEaVccDVkBMsBvoefUjn0ip61L038mpHa7PFLdlMiFUVTlA57c53NaPCsSoJ3iuKW+OFWtWyQTIeeca909dRPwrquE42CAZUyNgRI6g0/hTnJPv+BjWC9oGqwcRk6QPXyqyU1cDYRirC3EZHAZWBDA7EGvMfbvsw2AxbWv8ATbvWj1WdvMbfCvUA0NYv7V+zX7Xg2ZRN2z306kfiX3imQlZgTjdHnYaUZHu8qQjU7NVEYLr7fXnU6xhlYSDlblMEbRr1k1VHerHBNIiRp65UcMsXVVo4EXHYGMi+4GPdrQp1t9z8qOmZAUvsaTEERLcvWg6a8qjWF0Yka7SZ1o3yg97QkTmnn0En6dBQNreGJ0HmI0MnnVD2cxRsrCGtjrV32K4UuJxdu22qqc9zpkXUg+BML/VVAN48da6f9k3Dgtu/iObsLSnwAzNHgZX/AI0mtPrBtFPGpd6qi/8AU3VwyfnQY6+gf70SczQX1z+RrkH0Ysev8Ur16/vSB6/xvUPjGK9naJ5nQfnQykoq7MGMTis7wNhtTt4hbeWdWBPuFY/H417ENdkKwJWNB8Y18qdw/Eb14hZyoo6d8jQELzAgb+dc2tyo2aHwoyniIrjPEzhlVMQAA9xgkn8GWZIjUd6N+Q0rIYfjtq0L+HacitmtjWQJHdE6xv8AEVd9qcThwuQA3bsQCe9B5yTzFc9xGGyv7RkmNxrB0n8gNqVT6zwzavBlGPZZNjxnAXMTatNh7ZZFt5AQRp7MAGZO2oMnqelX3YzgFzDJlOKBkliiKCFYgZoZvARoB86gdheNpiLeWBKkDKJ2MAQsaCdKte0HFxhLeYIAHYBmiXDwCuUTqI0PnzokurcX/wBkrbD4jw61bAtZAc9wkLAZ2Y/eJ9ppPTfXwFYfhHCEZsQblvLdRmzKoWSE/Cirpn59DyI3rW8V4g72wArM3dkAGWkZmUAmR3tDuJAqs4U2Ge6bzv7IsQns1/7jsxksQTAULKgjSRqOuK6vYGzZExHDLd2ytsQ7sg+4rKzmT3QfxGCG/LrgeNYK/YJIMorRlIAIIj79phoT5cuVbjiPD7gxF7LcC2m75JcSrADvJ/MJA16nfao/abgly9bL95nUCM7ZrjFfw6/i3mN4jyZSrRhJJ6ZRHi1JQcvjMQbJY21X905Iyk91GJPUcvPxrY3fs6xb+0YqiMqhh3xluMZkJpp/UBuNazN3DoGVhDW2fKAxkgaj95tB8NJitNw/jWLs2Rct4q9q0ZLwV1PdHezMSQNhEDnBMGqZytpiYwecFRiOD4i3DOrbQTM5eRBb5HzqbgQots9zZBmPjyj37eM1o+FducQyXP2vD2btoCCVhGEmASpLZlB3gaVie0HGvbM9tABazB2I2ZwCJGm2p896TKEqjsbhI1vZLhq30fEkw7k5QDAtgd0SdZJiY251Y8U4hh1VQgRbzNkXvbnQZiY00PhrArGcHxfsgozEDqCVInx2M7VBQ+2u5+THTX4a8jUsuP2m3LXj+AEdmwam2qgFmXq2rA+PLrBrbYdpUHwFYnA4icMCxmQNY6eHLaK0uHx/cXKOQ+lWf0+o5Qs/A1rBbkUGAI18j5VGwrsxk7VJTcirwDy/9oHB/wBkx960BCk50/2tr9ZHuqgzaV1z7fuF/wDw+JA5m231E/D51yAVXB3iS1I2Y5FScFM1HSpGFPeFNjsnnpk72Lfy++KFPA+XyoVRYi7MZgeOh3Pr1FThiQJCSfHnHr8qYuKI2168vhTHsyIIPLX30KTQ2UoyHc5mu79icN7Lh2GXmyG4Z377FhPuI+FcHIjnJ8elejUtZLVtB+C3bX4KKn5b9KRTwV62/sO7L/Y/UUFPrQ/XWiY6D+/5UQb1P6ioTqDvrn+dYf7QL73HFi0JYL4mM25gbxofd51t7dYPjOM/fYll++AQrclI7uvhqRrprUnMdqZhQcSx6tcsIAwSy1sFLhJ75MM2uu0eVb20hZCsABSQQNwfxA+Ej1Fcg43xG7fZHvsM5MNAUEAAECFHKG+JFS+yPHrlrEXGDTbY/vSxJGsw+Xm2v193Oq0HKOHoo43IUXZl/wAbw9uy87TqCBpz0nkZiqK/iPaHIFzE8hv0IHXkasuJ8V/bLlqwiqHf+ZmGYCYEqM2k8wB861HDOAphgofV2A73RuidNokRMTvS6VJxjeWy+rzYW9GWRuynZq1gizuo9s43OwHJUA1mdzz05UXaW8LromhuLdtlQZVs41AUtAjuldDyYc6mWrmS6HZo1nvanQ7EetDWT7TX7rY1bxKyQPu/d7rSFIPTTzB8TXqUlVblNu6Zxak8s2l23mRC05i2mozJC6EsBvEDlMA67VzXt1w25h7631Uiw1wZ2RRIfN3pOysZnzNbTCYlQch78awSc0xE7DxO07SN6ssTaz2fZlRetsoV1zZiRmOiiZzAEaR+E9NLYVFcCMit4xYt3cly2yhW3cRtl7q76GWmfMc5pGHIKgNsBInUHUfe85HKPjULhWGuYb2ljMblggBGO6Zvu5vDlm5Eid5pfE8cBK5YYADeQNjHy28TXOlBxfU+jo1I1IXRi+KYQHFm0sZS3tIkTMxBO/jBrdJgrYtoCAwgRI7p211EHlp9RXOHt4hMcLnsGPdV45m205XOsCRsNNtq2NzG3yDbNhtx98qAAV00k+fvqrlQkuufHuT069JdspZM52swn7OS2XMpdRGxUHUjTpoBO0jeKiYjh9tQWRtmjznbyOk1G45xa7fJWcxOkeXXnzqdxK5FpJHeYsx/5GP/ACqhKcYRT2c7k9FP0BYdlaybY1JMABZefA+Omg8KlcB4JeVtbN1fNGExvEir77NMBYtW7uNvqzuj5UUbhQASwkgE6zPLLFdEwmI9oodh7EmSEdgSOYBP8RGpHKfCkV63W8Ygxj5ZnuGWP4hB5zv41fcBLOoHr4mq7B3Uv4n2ZuDPOdwAdFCnLbB+DGYOnjWvwltUACgKPCKp4K9PZeTZ6JlsQAOnvpYOoptfW5pZG36V0BJjPtiwftOGXjztlXHuIJ+VecVavVHbmxnwGKU87TfQ15WRqfSYqqh8CnbJIYaTSLYpyxcAfaqESy0yQb58qFLCk66D3ihTck+BeIbK0a6dfrT1m8cuT+Ia7aQZ0PLemVUxJpxQYk9K3IUkrWI6IQSY11gV6ex+/wAPoK81biI8/Xwr0hcu57aONmtow96g1Ly1hFXDldy/Au4dv1NIzepP6Uq42g/WkD1vUhePWjrXJuP40JiL1pQTdZmYEqpEiGCQff5yK6xbNcr4xgQuPa0QJ9r7RHZogasVPKCpIHQxUvKTaXsDK9sD/ZnHWnHs8VbUFydGUBSScoU6QNifM1W8T4FhcJ7S/hWYuSpQlswtkH7oXZhP8U8xymtJxLs0RhmIzG4ArhQBMRJXKfvGCdPhVLgezL4vB275dbftC5ACliFzZQDqOatp0iooSkk7YzkDrI59Y4o1nEWbwMFHzSZ5Gdeccj512DiPEkvG2VebbgMpHM66HnuIP5VScP7IYexqx9o6z32AAWdCQuusaakxyg01d4jJN0qwtI2VRHnAkbEgfI0rl1O0VGAxRcUaPjWdBcGS2UAmW3nKDpE/HSmeyvDrd6zN4KzF8x2Hs+gDDWYy6T0pmx2gs3LBe4wTKSpUwT4HxkHppWTbirYdT7NmNvEMoN0SMqjcAaEE6DNA0nwqejTfZ4+e3zYvWzo2OvWbdwW1tILjNK3YU5DK6ktJDawB1gxrVdxO4MNb3IuOJR5P3mk97QZW1OkUxxSzbJskNb9nBJKwACpQDQHSRl1j8R51X9puIftFwWLCi7FhjyyqRChh0iRB/m0qqE3LDw/B5oj8JvH/AKhLegIGjmco705iQAYOu3QdazGOw5dr3s3uM0O5gkg5VO8+Q1nwiolntEVa5ms3c+UIOcGdSw94Edamdk+MWyjgjvk6yd16ctNxvz5aS36NSHqt7GRnKGUxrsXdfE4lzcPtGZJYklZAACqCsRoIAFaXF8duHEm2zKAiqruQSSFiJkklpMT4U32e4McMso8FyXQnQqIEBV3MKRJOmh8yfsgEZbjHckEy0s2wy9BDfdOuaKCdWnOo0bZsxOpu3bgGWXb7o8dAOQ+XOppuFnQNoBkUf7V2+Mn40/jrT21m3ElizBYMAyWA1JygE76xUVAbcXH0QGATrJjbzEg0+WT2WbLstxlbQFkzmckISuYAnSIGsSBr16amp3FMcrXF/e5c7tndTLQsSiRMchPvrD2rF5iLoR1GTMkgglTOpMQZB2G9X3BLK3MgOjopGXnqTJjxPOoatCKl28lkYSildGo4ZhW9ut5MqsqZ5mfaKdMhA2YCT8K0+Hx91Hy3RtzE1X8EwIywZAjkBM1fLgszBttI8h4U/jTqRwgJWLGw4YSNfjTjD1FMYXChJgb+H96f9c666vbIhlb2rP8A0mI/+k30ryaor1J9oWJ9nw7FN0tNHnBivLgWn0vIqp4H7dPYa1JJ6VFtDWrTCpCzVMFckqvqhBuGhS2uDqfgKFMEfgsMQqg937sQN/z8aaVuXInyqXi1B2/zzM1CSyW06022RUZXWR1ngqqKGJ2nzjbT1rXe+zN72nD8Kx3FoWz5ocn5VxO1hMqlvxFYAJgE8gevl4V1L7KsZmwlyw33rTBx/tYQQPIqT/VSOVTfS47g1o/VsvJq1aUHh4xSQff8aPD7stJ9da5yOyOIazHaTgK3sbYZoyMJb+YprlHiRHuBrTLQxlkMobLma2c6jqQDp4SNKXVj2gzxXYm9LZRyHwiPypNlFXCoFEDvfHOxPzmqfstx3273rV1BbcAhZ3IJG4OseI08qqsbfuC8LDOTbdmVVkgQQDqOYzfU1xF6M+WmYnbJD41abE4hrNu7FtFUvGxzZvveGkfGsxxNzhc1oXWb2iwyjVW3Anw8PGtP2cwpRcZaYHPbA00AyyxBH6bAis72tItujZgbgtyeZLEnu67RJ05R40+nK8rfNHRpqLpdrfLmddXCkqWHcIgzEHwk+jWk7L4Z8baVQLfcthTOhgd2dN20HxrPY7GHKGUyMskdG/ECOn6H3bjsfh0wuCQtp7VS119ZEjMB/KAsDTmD1NNrS607y98EfIhFtNDl/iNnBXThbQFzExrdba3MDeCREiANdJPKbDE8FXC2lyqFudz2hTuq2UEnVQJK5mgtPKayvDLFk4201gl1N1GMKRpmLSSSSTzkgTFbni2MZiAAxgOCEGpVvvBjUtSSjZK+fmvmhKtYqlwGGvXrt1rIy5lJJGZG1WMx2Dac41nrVpw7svgrV5HVQ1u6uUQ7ZVIUDQK0Q0T5iq20CCDbQIgCgiGYEie+085NTMfZW7cS4EFvKoBK90SDJI5ifyrI1Gle5kUF2u4dlxCXbboEQAFdc4czBX8IEZd+vOdHsXYW5Ztta1zQGgQVIP3SekkmedKxV0Qx++veZpmTsRB6DWofYvGKbGJREfNmlCQe8sryJnQt/CNOvJSaqXaVrfP3OlV4qhC62ZC9hHl8iEoGIOgnLOgMdSBrEVkcepvXraBw06xOinbKZ0BECuncfwuQkWyCYBADCGZVM90xpHI9Odc/xWDS1cLwYYhtRoCpMpI5kGdgJB6V0+PKy+5FCK7JPR0N8W4tohj92gWdDCjYDSR05/Soj2NPaLCPEqYggyS0AbyIkGTVPge0Np7gJ2OjKdT4RyGw+A86v8AlvGX1sK5KkEuRMAb5RP3SenKolSn2StlnXlUhZ+xs+w1u4bAu3XLF/ubABeoAjfrWpU+v80xYtBQFUAAAADkAOgp9fXo12oQUVZHFnK7HB60/Sgu9AeuVBaMAwH22Y/Jw4pOt11X3TJ+QNefQfhXUft34rnxFnDg6W1Lt5nQf+XxrmAWqKawIqSyHl10qfZujUTy22pWAw+kwJO3lSkwShwTJG4H6+FUxTRHOpFtohta1oqt2wi9D8aFF9MX/AIhDj3OQPkf70qw5DCI6f5qdg8EgfmywNwddN/Dr8qlf+nIBt7+Z9flT4xbyS1a0I4Itzh7XGzO2g2A5ec7fnWr7D8R/Z8ahYwlybT+AY92f6gp8gaorahNBpO/Ok4hyfhRSUXFp+RFOdRTjJaWjt+JQo3kYNC8OfX1sKruy3Fv2zCK5M3U/d3esgaP/AFDXznpVhZMgqdxXElFxbTPqoTU4qSApp609R9qWprDTNdsODR+9tiNcwI3Vh0rMcY4vnYObLI8Bc2aV0jKymBlaZkHrueXUWVXUqwkHQ+utYnjPCPZMQRKHY8j/AHqKvQTyF+pWGziQVF8pmc2st9dMzL4fxMvTmK532wfD3ryexu99oGQqRBMaRGnWes61rsTgngtYLZ+QALEnZfdMTOw5ik2exSvfs4u8hFsosqNGLssqxAEGJ5HcCo01Rk5SYcKs4xcPBleH9nJuKj22icsqfv6anbYE7VrOMvat2PZXVzLcClbcAhTGomBrMeWnWpGItqrJbbMhtlWV1AgoYEFd+YG3nWZ7SYn2+KFm3AW0XErEEz3mB5+HnpSVOVZpvSueipVGkDsMyW8WWdsgIItkncklQpgRMfWthi3JYNZuzmEMqQcoMgkkcjtHvmuf47hqWrb3UP3TBzKNDodGK678tOVDE3VcW7n3Xa2klWkkgROmxIg06pBVPUgK0JUsM12Iwt2xc9pmBtFgEuG1lW45gsIUSoAzH+gwKjY/EOrXFN1DJ/0x3dp0JI2291VmHu3AlsG45Ckko0FV6kA+EEx1qwxK4Z8oXEr3jH/bY6+IXvDlypUotvAhTRL4fxrIGzxctHQ6GU/mMCNdpjnvVOOK3LGLD2rZ0IaCCMyMo7o0kllPd5TBpB4mh7mW7aZYjWQCBEvmJ0I1iPeJqRahs15E7qxkFtSVLASzD4DT+YaVsYdHexVHlz6dFo3XH+G+1cXFgLGaIgMTEzpvHWsdxrAlLVxQiu/31LAGdNQQNtJ13mIjnreC9orV5EspauAooD5tFAAAMd4k8xr0rPYu7dvYrunJaV4VSqmADlLM2x11gmAPfLnh3TAckkY7AcFz2sxXI6kyGaCdBlyg+/UbzWs7F2/YyCGVhEFgQTpvry5TTGAZXuZHtuBmlQQRK8jmUZRz2MDN4VJwmEuLizbBZln90TuUJ0136jXpTKNSTnkGEmdTwjSqnmQDUlfX+DUXA2sqBeg9acql+tdvjXTBYZPofpTeNxC20Z2IAUEmnB1rmX219pfZWBhEPfu/fjknP47e89K2Ku7GN2Vzj/aPihxWKu3z+NiV/wBo0X5R8aYwljMfDnTFlCxgVb4ZAoj41bCJzq9Sy+5IRYp5U02pAPhS7g6VUc5u5Eexrz+NCn3tkneKFZYPu/cucNI0A/xy89OfnUrOJ50zbalZY/tRqVtCnT7O7Ftb5EUxiLWm8xNOhhQLk6ctv0o01LYqalTzHRO7GccOCxGdgfZOMt1YP3f4gOqnX3kc667ibY0dCGBAZSNmU6gg864fiVkk8wNQfLcVs/s57UgRg8Q3dJ/cufwMfwE/wnl0JjmIk5dC/qidL+n8z/LPz/c3jd4ZhvzptTS71s22J+Io2UEZl/x5VzTthKaXcRXUo4lT6nwplT6/Wlg148UicHaxfW4netloM/hB0JbymfdVtfwoKZJhViCNoyypHlp8Kl27kVB4jauXQ2W4EJGndn4+HKuXy6F36VcK99mL+0DGjKti2Rnf7zH8KgyRMaSY9wrP9mbOHQst5XIyEiCF/eciWBBC9K1g4LkJFxNdywBymTyPU/GqM4DOWCkqcxBJbQrG43jWN+YqKEut42sdWlQhGOGZPiZCqUBBEGQQInWdDyktA8T1qy7EPf8A3kWrd6VVO8smQ3XN3SAI26UwcGiO2YAw+i8gBB1+nuNbDh3GLYGlsIdNV8NiYiffVdn0wRcr1St7Bv2UW3fYsAJBhYLJoe9BjQrzHoO4zhaqPZ2rdvWMxZnCltGnRYgxEE9OlXfDeK23KLpOpAgzPMjXcwKsrfeJDCARDTzM92NJpTbvgh6o4x2sD27r2rp0HfAtiLbBoK5ZjugfMEVH4d2xvWi6Yebdtv8ATG33QpaTJDECcw1muz9ouC4e/Yb2ojICUYAZl8uo8OdYbs92FLnPcARfEd5vdyqqn7WCVPyK7JrddbtxCA105fuQF0gso8OWu+p51tuzvZ5MOqgCMo06+ZNTuG8Nt2VARdudWA9eulVUqKjs1vwhh+H2ypUoIMgxodfEag+NRuH8Et2iWlnYk95okAn7sAAAba1Zev7Hwo/Xl+opn043TsDcNR65+486P1/kUXrw8xSL95UUsxAUCSTsKMwh8f4vbwth790wqCfM8gOpJ0rzHxvilzG4l777udByVeS+4fOa0/2i9q34heyWyRhrZ7v/AMxv4z4dPjz0zdi1G1U0qb2SVq6WEHh7AUVLC0SilhffVqVtHMlK7yPWRrMaU6wmW0pVtIXakFNI39bxTLNCYyTZHZyNPzoUvI3ShQjbIuifD9Kbc+/19KJjJ+dAN8KzqZ3SwC22vhToNM6n6c6dtERuN9P19daNIRJgCA7nw/xUe4o19c/0qYYYbAGZHy+OlRcXd2+tNeEKg7yOhdie2quFwuLeG+7ZvHn0S4Tz6Nz566nZ3bLWzp8P0rz/AHgSDzrZdjftAewq2MZmuWNlfe5aG39aDpuOU6CufX4132idvicyy6z/AHOmiG20PT86Rt6+ZpaKlxBdsutxG1V0Mg+fjRe05MPfUOjqJ30BGpyfX0FI9nzGv60WvrrzNC1c0dBqPicDauf9y2jeJUT8d6dDevAUfr41nU27KW52PwZ2tFf9rGPnNHa7JYYbZ/iP0q6n8/0pSn6j6V7pH2POTIFngNgGYaZmZ5+6pjYcDVRp0pwN+X1pYb15GgnRjJWsBd3IGLtFyFOi7nxP6U9atR+nyIqSf7fHUUU/r7+dep0lEJsCD19DSx68+nlSfXmp/Slx66jl76aAAf4/Q0fr+1FUDjfG7GEtm5fuBRyH4mPRVGrHwrUrmE2/fVFLswVQJJJgAVxT7Qu3JxZNiwSLAOp2Nz/2fWoHbHtrexrFRNuwDpb5t0LxufDYeO9ZuJFVUqNsshrci+IiFqQqTSFWpFrbWq4o585ewFUAeNOIsnXSjZKWbZGlMsJch/KND4afGiyHelwRrGhFFeI8jGgGs0UhUGI16/WioojQg/OhQ5DuT0BjSm2WpFhZ0BpTWx51tnbBl13syMqztTqWo3+VLCgaCiNao+4M55xoedTB2+Imq+9bkmZ+tS2cnUzOnyAFN3GGu8yDM6jxHSjeVkVFdJYIKtA8Y8PhSHXOI0B8af8AY89BJoC1EflQFCd8of7P8cxODfNh3In7ynW2/wDuXbbnoR1rqHAe32FxIy3x+zXOp1tMfBvw/wBUeZrk7qAPrUW/cjSN6TUowlspo8qpB2jo9DvhCAGU6HYrqCOtJzkbia4dwPj+KwsewvOg3yboddZRpGvWJrb4D7URoMVh56vZMH/gx/8AKo58Wa1k6VPn05Ylhm6DKfDalBPHmT+lVGA7WcPvfdxKof4boKR72gfA1dW8OGEoysOqsCPlU8oSW0WRqRlpiPZn5D+9KVTP9R+lH+ysDzo/Yt4/ChCEqpj3fnS8uvv+RFAWm8aP2J8a8eCC6b8vmKORy6zTeJvW7Qm5cS2OrMAPmazvE/tB4fZkC6brD8NpS3/5aL86JRb0gJTits09N4rEpaUvddUUbsxAA95rlXGPtZvNK4aytsfxOczf8R3QfeawfFOK38Q2a/de4eWY6DyUaL7qbGg3snnyYr9OTqHaT7UbaymDX2jbe0YEIP8AaN2+Q865bxHiN3EObl52uOeZ5dABso8BUdVpYX3+dURhGOiSdWU9jeWnLYginhYmKK7ag05R8kzmtDpAmnVWoS7jz+VWYHw5UyOSep6bDBMa0pXJM86U60jLWu5itYkZiY106VIa0Cp5GRr4xr86gtcIHT8qfW8GBIcERHP3z4+NEmhUoPwR30MTPvo6T7ZfD40KwZZlthFGUafwn37zTrfpQoUyGieu/WIu7ny/Wk0KFDLY2n+hfPcWfzqJiOfrlR0KzwbH+Bq0dPcT8qVf39dKFCvMOG/3EOe6fL8qgch50KFDLYUNE25v68aZxB9fGjoUUhcdiGGlMXLzJ3kYqZ3UkH4ihQoXodDZc9le0GLLwcViCOhu3I3PLNXS+HcRvFRN24dObt+tFQqWslg6tBuzGuJ8SvAGLtweTt+tcy41x7FFyDib5HT2rx8Jo6FFSSE8iTwVF1iQSTJ01O/xornL3fQUKFGyZaGjypxRoaFCvLZr0Ogb+6nrW59daKhWLZ56HTy8/wAqm4VRB0HqKFCnx2R1NMrbKiW0Gx+tOptR0KDwM8ijSTQoVpj0M3j90cidfHTnScUYZVGi+zBgbT1jrQoVjCh4/JGsDu/H60KFCloa9n//2Q==",
      desc: "Crisp romaine with parmesan.",
    },
    {
      id: 6,
      name: "Tiramisu",
      price: 259,
      image:
        "https://bakewithzoha.com/wp-content/uploads/2025/06/tiramisu-featured.jpg",
      desc: "Classic Italian dessert.",
    },
  ];

  return (
    <div>
      <Navbar />

      <header
        className="relative h-screen md:h-[88vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://orders.co/static/99a59eec0735fca313bf2b93349bd5d6/f659b/Italian-Restaurant-Design-Creating-an-Inviting-Ambiance.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight max-w-4xl">
            Delicious Food and Fine Dining Experience
            <br />
            <span className="font-medium text-lg md:text-2xl">
              A cozy dining experience with delicious flavors and aesthetic ambience
            </span>
          </h1>

          <div className="mt-8 flex gap-4">
            <a
              href="/menu"
              className="px-6 py-3 rounded-full bg-[#a66a4a] hover:bg-[#8c563c] text-white font-semibold"
            >
              View Menu
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-full border border-white text-white font-semibold bg-white/10"
            >
              Book Table
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Dishes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.id} className="rounded-xl overflow-hidden border bg-white">
              <img src={it.image} alt={it.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-lg">{it.name}</h3>
                  <div className="text-sm font-medium">₹{it.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1 rounded bg-black text-white">Add</button>
                  <button className="px-3 py-1 rounded border">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}