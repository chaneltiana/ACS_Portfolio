using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;

public class OnBoardingManager : MonoBehaviour
{
    public GameObject TextGameName;
    public GameObject TextInstructions;

    void Start()
    {

    }

    public void pressButtonOn()
    {
        Debug.Log("I have pressed the button");
        TextGameName.SetActive(false);
        TextInstructions.SetActive(true);
    }

    public void screenChange()
    {
        SceneManager.LoadScene("Game");
    }

}
