/** Quiz **/
(function () {
    const BEST_KEY = 'chronoearth-quiz-best';
    const form = document.querySelector('.quiz');
    const total = form.querySelectorAll('.quiz-q').length;
    document.documentElement.classList.add('js');
    /** Progress bar **/
    const progress = document.createElement('div');
    progress.className = 'quiz-progress';
    const progressText = document.createElement('p');
    const progressBar = document.createElement('progress');
    progressBar.max = total;
    progress.appendChild(progressText);
    progress.appendChild(progressBar);
    form.insertBefore(progress, form.firstChild);
    /** Result **/
    const result = form.querySelector('.quiz-result');
    const scoreText = result.querySelector('.quiz-score');
    const verdict = document.createElement('p');
    verdict.className = 'quiz-verdict';
    const best = document.createElement('p');
    best.className = 'quiz-best';
    result.querySelector('h2').after(verdict, best);
    function verdictFor(score) {
        if (score === total) return 'Perfect score! You really know deep time.';
        if (score >= 6) return 'Great job. You know your way around Earth’s history.';
        if (score >= 4) return 'A good start. The "Learn more" links will fill the gaps.';
        return 'Keep exploring. The timeline has plenty to teach you.';
    }
    /** Best score **/
    function saveBest(score) {
        let bestScore = 0;
        try {
            bestScore = Number(localStorage.getItem(BEST_KEY)) || 0;
        } catch (e) {}
        if (score > bestScore) {
            bestScore = score;
            try {
                localStorage.setItem(BEST_KEY, bestScore);
            } catch (e) {}
        }
        return bestScore;
    }
    /** Update **/
    function update() {
        const answered = form.querySelectorAll('input[type="radio"]:checked').length;
        const score = form.querySelectorAll('input.correct:checked').length;
        progressText.textContent = answered + ' of ' + total + ' answered';
        progressBar.value = answered;
        scoreText.textContent = score;
        if (answered === total) {
            verdict.textContent = verdictFor(score);
            best.textContent = 'Best score on this device: ' + saveBest(score) + ' / ' + total;
        }
    }
    form.addEventListener('change', update);
    form.addEventListener('reset', function () {
        setTimeout(update, 0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    update();
})();
