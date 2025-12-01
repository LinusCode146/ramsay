const storyData: StoryData = {
    start: {
        text: "Es ist ein super cosy snuggly comfy Abend in deinem princess Bett und wir sind mitten in einer Folge Game of Thrones. Gerade kommt ein Szenenwechsel - man sieht Jon und Ygritte. Plötzlich spürst du etwas komisches in deinem Hinterkopf und greifst dir mit deiner Hand an deine Schläfe. Ich frage, ob alles gut ist - jedoch hörst du mich gar nicht richtig. Das Gefühl von Schwindel wird größer und plötzlich werden wir beide von einem Sog in das Tablett hingezogen, ohne, dass wir etwas dagegen tun könnten. (Schade aber auch)",
        choices: [
            { text: "Festhalten und hoffen", next: "sog" },
            { text: "Schreien", next: "sog" },
            { text: "Paralyzed durch Überforderung", next: "sog" }
        ]
    },

    sog: {
        text: "Kälte. Schnee. Ein dumpfer Aufprall. Als du die Augen öffnest, siehst du rotes Haar. Pelz, Leder, Bogen. Du bist Ygritte. Ich liege neben dir im Schnee und sehe aus wie eine Budget-Version von Jon Snow, aber immer noch eindeutig Jon Snow. Hinter uns stehen mehrere Wildlings und mustern uns wie zwei komische Alis, die aus dem Nichts gespawned sind.",
        choices: [
            { text: "\"Siehst du das auch?\"", next: "kennen" },
            { text: "Erstmal ausprobieren, ob dein Ygritte-Bogen echt ist", next: "bogen" },
            { text: "So tun, als wäre alles normal", next: "kennen" }
        ]
    },

    kennen: {
        text: "Ich komme hoch, raffe meinen schwarzen Night’s Watch Mantel zurecht und schaue dich an. 'Maja? Also… Ygritte?' Du merkst, dass die Wildlings nicht gerade die geduldigsten Menschen sind. Vielleicht solltest du reden. Oder ich. Oder niemand, weil wir beide lost sind.",
        choices: [
            { text: "\"Wir kommen in Frieden?\"", next: "wildlinge" },
            { text: "Dich an mich drücken, weil der Norden literally freezing ist", next: "kuscheln" },
            { text: "Versuchen, Ygritte zu channeln", next: "rolle" }
        ]
    },

    bogen: {
        text: "Du spannst den Bogen testweise - und lässt ausversehen los(Ygritte hat zwar im Gegensatz zu dir ordentlich Bizeps - aber das Muscle-Memory wurde leider nicht mit übertragen). Der Pfeil fliegt… und landet in einem Schneehaufen, der sich als Wildling-Baby entpuppt. Zum Glück hast du dem Baby nur einen kleinen Kratzer am rechten Ohr verpasst. Die Mutter schreit trotzdem so laut, dass man denken könnte, dass gerade ihr Baby verletzt wurde.",
        choices: [
            { text: "Ganz unauffällig verschwinden", next: "wildlinge" },
            { text: "Dich vorschieben. Ygritte Bonuspunkte und so.", next: "rolle" }
        ]
    },

    wildlinge: {
        text: "Tormund Giantsbane tritt vor. Riesiger Bart, noch größere Ausstrahlung. Er fixiert dich erst, dann mich. 'Wer seid Ihr?' Du spürst wie ich neben dir so steif werde wie ein verräterischer Night’s Watch Rekrut.",
        choices: [
            { text: "\"Ich bin Ygritte, und er est John Snow ähemmm.\" Wir dürfen sicherlich vorerst bei euch mitkommen? :3", next: "aufnahme" },
            { text: "\"Wir ähh, wir sind Touristen. Von weit weit Weg...\"", next: "touristen" },
        ]
    },

    kuscheln: {
        text: "Ich ziehe dich an mich, weil der Wind schneidend kalt ist. Es ist überraschend warm unter meinem Mantel. Für ein paar Sekunden ist Westeros sogar cozy. Dann hörst du Schritte hinter euch.",
        choices: [
            { text: "Schnell auf Abstand gehen", next: "wildlinge" },
            { text: "So tun, als sei das hier ein ganz normales Night’s Watch-Date", next: "aufnahme" }
        ]
    },

    rolle: {
        text: "Du wirfst dein rotes Ygritte-Haar zurück und redest so, als hättest du im Norden gelebt, seit du laufen kannst. Die Wildlings nicken beeindruckt. Ich stehe daneben und nicke einfach rhythmisch, weil ich keine Ahnung habe, was ich sonst tun soll.",
        choices: [
            { text: "Mit der Gruppe mitgehen", next: "aufnahme" },
            { text: "Einen Plan entwickeln, bevor jemand merkt, dass wir zwei absolut ahnungslose Weltenbesucher sind", next: "plan" }
        ]
    },

    touristen: {
        text: "'Touristen.' Du sagst es. Einfach so - Die Wildlings blinzeln. Ein paar kichern. Dann lachen alle. 'Die sind verrückt, nehmt sie mit' - sagt einer von ihnen. Na gut.",
        choices: [
            { text: "Folgen", next: "plan" }
        ]
    },

    aufnahme: {
        text: "Nach einem langen und anstrengenden Marsch kommen wir zu einer Wildling-Behausung. Dort angekommen werden wir zuerst dem Stammesanführer vorgestellt. Nachdem er uns zu unseren whereabouts fragt und wir nichts außer ein paar öhhs und ähhms zugesammengebrummt bekommen stellt er uns vor ein Ultimatum. Entweder wir sollen die Wahrheit sagen oder wir würden beide sofort hingerichtet werden. Wir probieren natürlich eine gute Geschichte zu erfinden - bitte einmal mit einem w6 für die Qualität unserer Improvisationskünste würfeln.",
        choices: [
            { text: "3 oder kleiner", next: "tot" },
            { text: "4 oder größer", next: "wut" },
        ]
    },

    tot: {
        text: "Diese Scheiße hätte ich mir auch aus dem Hut ziehen können. Wir werden aus dem Zelt des Häuptlings herausgefüht, and große hölzerene Pflöcke gebunden und schließlich jeweils von einem Bogenschützen erlegt.",
        choices: [
            { text: "Harter Schlag...", next: "start" },
        ]
    },

    wut: {
        text: "Es ist kaum zu glauben aber du yappst so, als ob du den ganzen Tag nichts anderes machen würdest(haha). Der Häuptling lauscht gespannt deiner Geschichte und als du geendet hast läd er uns zum Abendmahl mit dem Stamm ein. Das ist nochmal gut gegangen! Erleichtert schaue ich dich an",
        choices: [
            { text: "Essen und die Nacht im Camp verbringen", next: "romantik" },
        ]
    },

    plan: {
        text: "Wir kommen ins Wildling camp. Es gibt Feuer, Fleisch, Schnee und sehr viele skeptische Blicke. Und dann taucht sie auf: Melisandre -The Red Woman. Sie sieht euch an, als hätte sie genau auf euch gewartet.",
        choices: [
            { text: "Mit ihr sprechen", next: "melisandre" },
            { text: "Sie ignorieren, weil du nicht in irgendeinem Fire-Ritual enden willst", next: "ign" },
            { text: "\"Wenn wir geopfert werden, blame ich dich\", flüstern", next: "melisandre" }
        ]
    },

    ign: {
        text: "Du ignorierst Melisandre. Sie ignoriert dich. Es herrscht ein merkwürdiges neutrales Energielevel. Die Wildlings sehen aus, als stünde der Weltuntergang bevor.",
        choices: [
            { text: "Doch zu ihr gehen", next: "melisandre" },
            { text: "In den Wald fliehen", next: "wald" }
        ]
    },

    melisandre: {
        text: "Melisandre hebt die Hand. Das Feuer neben ihr wird größer. 'Ihr seid nicht von dieser Welt.' Ich versuche cool zu bleiben, wirke aber eher wie ein Jon Snow, der seine lines vergessen hat.",
        choices: [
            { text: "\"What do you want from us?\" fragen" , next: "prophezeiung" },
            { text: "Mich vorschieben, weil ich ja angeblich der Auserwählte bin", next: "prophezeiung" },
            { text: "Fluchtmodus: On", next: "wald" }
        ]
    },

    wald: {
        text: "Wir rennen weg durch einen verschneiten Wald. Äste, Wind, Frost. Ich nehme irgendwann deine Hand, damit du nicht hinfällst. Der Wald wirkt unheimlich. Du hattest dir das mit dem Jon und Ygritte sein irgendwie netter vorgestellt.",
        choices: [
            { text: "Ein direwolf taucht auf", next: "geist" },
            { text: "Ein Portal erscheint", next: "portal" }
        ]
    },

    geist: {
        text: "Ein riesiger weißer direwolf tritt aus dem Dunkeln. Ghost. Er erkennt mein Jon-Snow-Gesicht und stupst mich an. Dann legt er sich neben dich. Du wirst von ihm akzeptiert(so basically you're made for me).",
        choices: [
            { text: "Mit Ghost zu Melisandre gehen", next: "prophezeiung" },
            { text: "Dich an Ghost ankuscheln", next: "romantik" }
        ]
    },

    portal: {
        text: "Ein blaues Portal erscheint im Schnee. Du hörst den Game of Thrones Intro-Sound, Popcornrascheln und dein Heizungssurren. Zuhause ruft.",
        choices: [
            { text: "Zurück in die echte Welt", next: "ende_real" },
            { text: "In Westeros bleiben", next: "romantik" }
        ]
    },

    romantik: {
        text: "Ihr sitzt am Feuer des Wildling camps. Ghost schläft neben euch. Du lehnst dich an mich und Westeros wirkt für einen Moment nicht gefährlich, sondern einfach… magisch. Ich sehe dich an und du spürst, dass es egal ist, in welcher Welt wir landen. We are always meant to be together.",
        choices: [
            { text: "Here we go again", next: "start" }
        ]
    },

    prophezeiung: {
        text: "Melisandre erklärt, dass wir gar keine epische Mission haben. Wir sollen nur einen Streit zwischen Wildlings und einem extrem aggressiven Schnee-Hühnchen lösen. Mit vereinten Kräften schaffen wir das irgendwie. Danach feiert uns der ganze Wildling-Stamm.",
        choices: [
            { text: "Feiern", next: "romantik" },
            { text: "Zurück durch das Portal, dass zufällig aufgetraucht ist.", next: "ende_real" }
        ]
    },

    ende_real: {
        text: "Ein Licht. Ein Knall. Ihr sitzt wieder auf deinem Sofa. Popcorn auf dem Boden. Die Folge pausiert auf dem Tablet. Wir sehen uns an und sagen nichts. Manche Dinge kann man einfach nicht erklären.",
        choices: [
            { text: "Nochmal nach Westeros", next: "start" }
        ]
    }
};




// Type Definitionen
interface Choice {
    text: string;
    next: string;
}

interface Scene {
    text: string;
    choices: Choice[];
}

interface StoryData {
    [key: string]: Scene;
}

class StoryGame {
    private currentScene: string;
    private storyTextEl: HTMLElement;
    private choicesEl: HTMLElement;
    private isTyping: boolean;

    constructor() {
        this.currentScene = 'start';
        this.storyTextEl = document.getElementById('storyText')!;
        this.choicesEl = document.getElementById('choicesContainer')!;
        this.isTyping = false;

        this.startGame();
    }

    startGame(): void {
        this.showScene(this.currentScene);
    }

    async showScene(sceneId: string): Promise<void> {
        if (this.isTyping) return;

        const scene = storyData[sceneId];
        if (!scene) {
            console.error('Scene not found:', sceneId);
            return;
        }

        this.currentScene = sceneId;
        this.clearChoices();

        await this.typeText(scene.text);
        this.showChoices(scene.choices);
    }

    async typeText(text: string): Promise<void> {
        this.isTyping = true;
        this.storyTextEl.innerHTML = '';

        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        this.storyTextEl.appendChild(cursor);

        for (let i = 0; i < text.length; i++) {
            await this.delay(1 + Math.random() * 4); // Natürlichere Geschwindigkeit 40

            const char = text[i];
            const textNode = document.createTextNode(char);
            this.storyTextEl.insertBefore(textNode, cursor);

            // Scrolle nach unten falls nötig
            this.storyTextEl.scrollTop = this.storyTextEl.scrollHeight;
        }

        await this.delay(500);
        cursor.remove();
        this.isTyping = false;
    }

    showChoices(choices: Choice[]): void {
        this.choicesEl.innerHTML = '';

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-button';
            button.textContent = choice.text;
            button.addEventListener('click', () => this.makeChoice(choice.next));

            // Staggered Animation für Buttons
            button.style.opacity = '0';
            button.style.transform = 'translateY(20px)';

            this.choicesEl.appendChild(button);

            setTimeout(() => {
                button.style.transition = 'all 0.5s ease';
                button.style.opacity = '1';
                button.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    clearChoices(): void {
        this.choicesEl.innerHTML = '';
    }

    makeChoice(nextScene: string): void {
        if (this.isTyping) return;

        // Disable all buttons während der Transition
        //const buttons = this.choicesEl.querySelectorAll('.choice-button');
        //buttons.forEach(btn => btn.disabled = true);

        setTimeout(() => {
            this.showScene(nextScene);
        }, 300);
    }

    delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Spiel starten wenn die Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
    new StoryGame();
});