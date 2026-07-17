import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outDir = join(root, 'public', 'images', 'album')
mkdirSync(outDir, { recursive: true })

// Thumbnail URLs from the shared sculptures album, upgraded to large stills.
const thumbs = [
  'https://lh3.googleusercontent.com/pw/AP1GczN68vzWEamS7gxDfcyokXHkE9NNbXCdeyee_tpv56J5EB_wyQp9sZqaDMtsD2UJt9mQWPb8IyTbrgmhuIi98DVb5BmherX8_DxICMkLkbHeEENOz8KE=w41-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczOlRTaQL2VN6bt9b54M8SYUF11ifzK9DjZj4kaC5RrWMvX0QqVlKABW2CgGYz-bSeVUGM6YGMuE-sCErnq-fYVCQZie2pzL70rEvLRhdwrLUFGDQ5Bq=w41-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczMjlD1vfySCzGFbPrOuohpRR6_qsWv-dIDsKHUgIU3DiQf7qa1YqwA2VE-NU7r6MbwFsAGFLmgzYyVre9Po3942ucN5lX4JZ3Vn7Jq7AbMLLiRtXjLW=w57-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczMc9oZUHamJIg2qmRi1yDosJU2ZJIUt2uqAcWW0vfGki6pPyF9ILO5iXAYdcaqHoGcds51XxG1M4BjvsxpsglBZQZdCPVSQCpIzwlSdHfmvK3OvdVMq=w108-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczP4r_2vkOL8hsqipdp0fprgPPRHkj7S30e-zRvG7HcvkcvL583g4dyKsh6g-UTDHkOe2vKSoxmrgmMfL98BftWv3AEPcXHgFCEz6yYTeHe0KNe7nH6S=w57-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczOlIkW0XIaoGzXyhCxcTAwVbiSQG0DyyMSF6uE5rtTtHrYIu1cqCFICiBN8SkGEnpbw5zzHlbrRbBzLlsk75n-pUilqJr3SdBrVY7ct08s3HuzrniLe=w108-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczO5pg_aTsbzb6a0ZDWT6ABt8vIRf_VUSy7QdApU2oKYwJyg4NEo6FHZL1p8bXs__HXINFUN85aHC9CN_oyADDzL0zYoTU32t7UrqZK6IVyqwE3RwX9u=w108-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczOPMk_atcxYm81xqNsjLaBI6-fDTQKQ1902LugoeF49Z2IwdG-E5fB4fsqte4TuFPiSk_PLNCFhk-u-wAtdbGi13QjorRzVZR9sCMSzqMRErALauTgT=s72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczN7W3USuo4IJeuohYcks8l113ae2UmJ2j7kfsz9S1XqwwzEIjHGkFb1_3zluU5sfGIMerCGedSfdx7o1VYNdNdyXFQlWYcDhWvuTQGhK_ECPvySvFdA=w54-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczPc4QAOoMp_qvdOIyJFC310FPUIeQqVPSHIVbrrwCy4aPW_wtlfJsF3KnIdkbszHAXoQ9wk4n-4pheTtKFMCRouF1vhWQNar51B0Ey6iBVGyvrH3IXM=w54-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczPiJMmWKLn0MPyCfKwi9aNeK3f03sLWnM1FpQpIfOZ-2qf40eEy852jzSCySmWcPWj3Ts2ewAc8DQ-P2_sBTpOdnT8uBvgzveFz-I2susEwOtZhl9Us=w54-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczM4lZoFlzsGeLDfxS7vWmJtALi7iCsZBkJVYQ6iM5SDp87Q7pJqv7ckfDmVydcWwZzc0swf2K9hSLhx1AdaRu9NSrm53TkRiEyxDqoJp_5zcX3feQNd=w54-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczPtGIK_1ge5cfOvuFNBq7MLq27wDdcHJdzU4mYEqYvy_lxIxOmYvmMFzN97gBzM_fWIpZMgzfZa4aZzBGZZ4Ieom7eCd4RxkDIRpOksBe6HU6sRxUpf=w54-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczOyDvs17rtpGeG8frG4SRx5t1A6XP8jEyw6FyOy-cexi0PWslpr8ps_VvlEvbPMj3WAn35fjFjRW3RZVgkhkzl1zO4B7yNnJv0-2lhAE81IgvBCe6tB=w54-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczPoWISj1AfyqN-Pefr3I_uBu8l2ud99SQ3HgTgSFJCaJMsWGkBSPgkNgH9wdylXl51gBv4zsdQKBe-VvMO0M4pWubtDAMOZ1L-gVYx4_3TZ0S5Cng_m=w37-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczO_rwiaIwYxyOxv-GOeNT8vyKDtHfbeB17WF3g6DpP-hvJANmNUv6ZhxAewVgw3nmHN1XNHJNyFjfHg_UbnR1hC-kX22rcrBYw7eLXCsyiUUPcdCpWd=w138-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczPaVAg4VQea8L4Dj7Oq-CjYiSmWS0PoJFpY6kHOVxvlqbySJTlpaSA_GlyC-vcZAPQHhan3yxbpXVVtbc_HyAICBfXEP4rWrMid7zgEBXbe1kO10dZx=w35-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczMyFEMBTtAJUkylSzruZWI_LZK8hbIgab6Rz_wp5Y3ClwgOfxai4ASj3YuJLqCp3rQqosz4x-R_lCCIvTboe2LtDsbBewdhoVKlt1pvV0CRU6WYojQ5=w35-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczPaQ-dbFTMNOzGUlTgRAHa6GvkltZ-05Q8M4k9vzLRkwaaNoW9l--TcfBo8KuXHm9AomG9Ec7x5YtOYhZI8-6RSZIh2txoy2ipKa5f4LZIbo89Jmm_n=w35-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczMiCXDnssrYX5YEtTUIAu-UVC9nkoK1JCgMfU1RzvHSCwLwCj-WwfGXQ7yxU4esve22yJC-RR66LWdYL4tgwBRmYElxXD-wbp56PzOkr9YrF26pDa3J=w35-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczOBa10sl9Va8lN7UcF-HPRKM_8X_yOXsPBl2mSvreiNZz8RhZLq16-DpYvEAGsJmsQ7xEO-d_2nXfEsm01KXJQkTiW7sR5cB_tfoN2qUaKZWT_gSPU7=w35-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczP1adQgzvxQAoVXlgFMTkb2JIgqVa9RerA0BC1wPKiVEbKcbqkJNlgNDjsPzoUg-YbY1yLQFK7kPTQ4XhRHEEZdHXXCrVWNjC4G6ijFXYrTOj1dOrwr=w37-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczOGGCtc6JJJK2szAdo-MM7D3XPEL8VbdcQVMpGGoO3Aklmqr6Qo-k35OKDhtGngDlIsmKA16osFhHCzqTktx_mpfa6MjMu51H8yzzBpNnaqIylrXvw-=w96-h72-no',
  'https://lh3.googleusercontent.com/pw/AP1GczP_w6LIs2qwlyNGf2u_r7NzLP2EVieCV-czC-JrIbXVkpa9HAvep4KhTKcz1y8i29p8yNZ1sztJIQ8WIYxz8pE4H6tA-DSJc7Xr7pz96XwaJ1HaSrAG=w96-h72-no',
]

function toLarge(url) {
  return url.replace(/=[^=]+$/, '=w1600-h1600-no')
}

const manifest = []
for (let i = 0; i < thumbs.length; i += 1) {
  const src = toLarge(thumbs[i])
  const name = `album-${String(i + 1).padStart(2, '0')}.jpg`
  const dest = join(outDir, name)
  process.stdout.write(`Downloading ${name}... `)
  try {
    const res = await fetch(src, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    writeFileSync(dest, buf)
    console.log(`${buf.length} bytes`)
    manifest.push({
      id: `album-${String(i + 1).padStart(2, '0')}`,
      src: `/images/album/${name}`,
      bytes: buf.length,
    })
  } catch (err) {
    console.log(`FAIL ${err.message}`)
  }
}

writeFileSync(join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2))
console.log(`Saved ${manifest.length}/${thumbs.length} images`)
