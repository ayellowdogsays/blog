// 这四个常量是复制,复制成功,展开,收缩
// 我使用的是 https://fontawesome.com/ 图标, 不用可以改为文字.
const copyText = '<i class="fa-regular fa-copy"  style="color: #aa69ec;"></i>';
const copySuccess = '<i class="fa-regular fa-circle-check"  style="color: limegreen;"></i>';
const openText = '<i class="fa-solid fa-angles-down  fa-beat-fade"></i>';
const closeText = '<i class="fa-solid fa-angles-up  fa-beat-fade"></i>';

const codeElements = document.querySelectorAll('td.code');

codeElements.forEach((code, index) => {
    const preCode = code.querySelector('pre');

    // 设置id和样式
    preCode.id = `ZYCode${index+1}`;
    preCode.style.webkitLineClamp = '6';

    // 添加展开/收起按钮
    if (preCode.innerHTML.split('<br>').length > 6) {
        const codeCopyDiv = document.createElement('div');
        codeCopyDiv.classList.add('CodeCloseDiv');
        code.parentNode.parentNode.parentNode.parentNode.appendChild(codeCopyDiv);

        const codeCopyOver = document.createElement('button');
        codeCopyOver.classList.add('CodeClose');
        codeCopyOver.innerHTML = openText;

        const parent = code.parentNode.parentNode.parentNode.parentNode;
        const description = parent.childNodes.length === 3 ? parent.children[2] : parent.children[1];
        description.appendChild(codeCopyOver);

        codeCopyOver.addEventListener('click', () => {
            if (codeCopyOver.innerHTML === openText) {
                const scrollTop = document.documentElement.scrollTop;
                const codeHeight = code.clientHeight;

                if (scrollTop < codeHeight) {
                    document.documentElement.scrollTop += codeHeight - scrollTop;
                }

                preCode.style.webkitLineClamp = '99999';
                codeCopyOver.innerHTML = closeText;
            } else {
                preCode.style.webkitLineClamp = '6';
                codeCopyOver.innerHTML = openText;
            }
        });
    }

    // 添加复制按钮
    const codeCopyBtn = document.createElement('div');
    codeCopyBtn.classList.add('copy-btn');
    codeCopyBtn.innerHTML = copyText;
    code.appendChild(codeCopyBtn);

    // 添加复制功能
    codeCopyBtn.addEventListener('click', async () => {
        const currentCodeElement = code.querySelector('pre')?.innerText;
        await copyCode(currentCodeElement);

        codeCopyBtn.innerHTML = copySuccess;
        codeCopyBtn.classList.add('success');

        setTimeout(() => {
            codeCopyBtn.innerHTML = copyText;
            codeCopyBtn.classList.remove('success');
        }, 3000);
    });
});

async function copyCode(currentCode) {
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(currentCode);
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error('当前浏览器不支持此API');
    }
}

